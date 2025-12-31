const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route   GET /api/products
// @desc    Get all products with pagination and filtering
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { category, search, page = 1, limit = 20, sort = '-createdAt' } = req.query;

        // Build query
        const query = {};
        
        if (category && category !== 'all') {
            query.category = category.toLowerCase();
        }
        
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        // Execute query with pagination
        const products = await Product.find(query)
            .sort(sort)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Product.countDocuments(query);

        res.status(200).json({
            success: true,
            count: products.length,
            total: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching products',
            error: error.message
        });
    }
});

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching product',
            error: error.message
        });
    }
});

// @route   GET /api/products/category/:slug
// @desc    Get products by category slug
// @access  Public
router.get('/category/:slug', async (req, res) => {
    try {
        const { page = 1, limit = 20, sort = '-createdAt' } = req.query;
        const category = req.params.slug.toLowerCase();

        const query = category === 'all' ? {} : { category };

        const products = await Product.find(query)
            .sort(sort)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Product.countDocuments(query);

        res.status(200).json({
            success: true,
            category,
            count: products.length,
            total: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching products by category',
            error: error.message
        });
    }
});

module.exports = router;
