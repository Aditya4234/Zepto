const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        trim: true,
        unique: true
    },
    slug: {
        type: String,
        required: [true, 'Category slug is required'],
        unique: true,
        lowercase: true
    },
    image: {
        type: String,
        required: [true, 'Category image is required']
    },
    icon: {
        type: String
    },
    description: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#8B5CF6'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
