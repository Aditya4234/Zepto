const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: 0
    },
    discountPrice: {
        type: Number,
        min: 0
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    image: {
        type: String,
        required: [true, 'Product image is required']
    },
    images: [{
        type: String
    }],
    category: {
        type: String,
        required: [true, 'Product category is required'],
        lowercase: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    inStock: {
        type: Boolean,
        default: true
    },
    ratings: {
        type: Number,
        default: 4.5,
        min: 0,
        max: 5
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        trim: true
    },
    unit: {
        type: String,
        default: 'piece'
    },
    tags: [{
        type: String
    }],
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Index for better search performance
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1 });

module.exports = mongoose.model('Product', productSchema);
