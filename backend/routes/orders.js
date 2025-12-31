const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { protect } = require('../middleware/auth');

// All order routes are protected
router.use(protect);

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.post('/', async (req, res) => {
    try {
        const { deliveryAddress, paymentMethod = 'COD' } = req.body;

        if (!deliveryAddress || !deliveryAddress.addressLine) {
            return res.status(400).json({
                success: false,
                message: 'Delivery address is required'
            });
        }

        // Get user's cart
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
        
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Cart is empty'
            });
        }

        // Prepare order items
        const orderItems = cart.items.map(item => ({
            product: item.product._id,
            name: item.product.name,
            image: item.product.image,
            price: item.price,
            quantity: item.quantity
        }));

        // Calculate totals
        const subtotal = cart.subtotal;
        const deliveryFee = subtotal > 200 ? 0 : 20; // Free delivery above ₹200
        const total = subtotal + deliveryFee - cart.discount;

        // Set estimated delivery (10 minutes from now)
        const estimatedDelivery = new Date(Date.now() + 10 * 60 * 1000);

        // Create order
        const order = await Order.create({
            user: req.user.id,
            items: orderItems,
            subtotal,
            discount: cart.discount,
            deliveryFee,
            total,
            deliveryAddress,
            paymentMethod,
            estimatedDelivery
        });

        // Clear cart after order
        cart.items = [];
        await cart.save();

        // Populate order details
        await order.populate('items.product');

        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating order',
            error: error.message
        });
    }
});

// @route   GET /api/orders
// @desc    Get user's orders
// @access  Private
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .populate('items.product')
            .sort('-createdAt');

        res.status(200).json({
            success: true,
            count: orders.length,
            orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching orders',
            error: error.message
        });
    }
});

// @route   GET /api/orders/:id
// @desc    Get single order by ID
// @access  Private
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items.product');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        // Make sure order belongs to user
        if (order.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view this order'
            });
        }

        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching order',
            error: error.message
        });
    }
});

module.exports = router;
