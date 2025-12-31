const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('../models/Category');
const Product = require('../models/Product');

// Load env vars
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });

// Categories data
const categories = [
    {
        name: 'All',
        slug: 'all',
        image: '🛍️',
        description: 'Browse all products',
        color: '#8B5CF6',
        order: 0
    },
    {
        name: 'Cafe',
        slug: 'cafe',
        image: '☕',
        description: 'Coffee, Tea & Snacks',
        color: '#D97706',
        order: 1
    },
    {
        name: 'Home & Kitchen',
        slug: 'home',
        image: '🏠',
        description: 'Home & Kitchen Essentials',
        color: '#059669',
        order: 2
    },
    {
        name: 'Toys',
        slug: 'toys',
        image: '🧸',
        description: 'Toys & Games',
        color: '#EC4899',
        order: 3
    },
    {
        name: 'Fresh',
        slug: 'fresh',
        image: '🥬',
        description: 'Fresh Fruits & Vegetables',
        color: '#10B981',
        order: 4
    },
    {
        name: 'Electronics',
        slug: 'electronics',
        image: '💻',
        description: 'Electronic Gadgets',
        color: '#3B82F6',
        order: 5
    },
    {
        name: 'Mobiles',
        slug: 'mobiles',
        image: '📱',
        description: 'Mobile Phones & Accessories',
        color: '#6366F1',
        order: 6
    },
    {
        name: 'Beauty',
        slug: 'beauty',
        image: '💄',
        description: 'Beauty & Personal Care',
        color: '#F43F5E',
        order: 7
    },
    {
        name: 'Fashion',
        slug: 'fashion',
        image: '👕',
        description: 'Fashion & Apparel',
        color: '#A855F7',
        order: 8
    },
    {
        name: 'Gourmet',
        slug: 'gourmet',
        image: '🍽️',
        description: 'Gourmet & Premium Foods',
        color: '#F59E0B',
        order: 9
    }
];

// Products data
const products = [
    // Cafe Products
    {
        name: 'Nescafe Classic Coffee',
        description: 'Premium instant coffee for a perfect morning brew',
        price: 399,
        discountPrice: 349,
        discount: 13,
        image: '☕',
        category: 'cafe',
        stock: 50,
        brand: 'Nescafe',
        unit: '200g jar',
        ratings: 4.5,
        reviewCount: 234,
        featured: true
    },
    {
        name: 'Taj Mahal Tea',
        description: 'Premium quality tea leaves for authentic taste',
        price: 299,
        discountPrice: 249,
        discount: 17,
        image: '🍵',
        category: 'cafe',
        stock: 75,
        brand: 'Taj Mahal',
        unit: '500g',
        ratings: 4.6,
        reviewCount: 456
    },
    {
        name: 'Britannia Good Day Cookies',
        description: 'Delicious butter cookies for tea time',
        price: 50,
        discountPrice: 45,
        discount: 10,
        image: '🍪',
        category: 'cafe',
        stock: 100,
        brand: 'Britannia',
        unit: '200g pack',
        ratings: 4.4,
        reviewCount: 789
    },
    {
        name: 'Haldiram Bhujia',
        description: 'Crispy and spicy Indian snack',
        price: 60,
        discountPrice: 55,
        discount: 8,
        image: '🥨',
        category: 'cafe',
        stock: 80,
        brand: 'Haldiram',
        unit: '150g',
        ratings: 4.7,
        reviewCount: 567
    },
    {
        name: 'Cadbury Dairy Milk',
        description: 'Creamy milk chocolate bar',
        price: 50,
        discountPrice: 45,
        discount: 10,
        image: '🍫',
        category: 'cafe',
        stock: 120,
        brand: 'Cadbury',
        unit: '50g',
        ratings: 4.8,
        reviewCount: 1234
    },

    // Home & Kitchen Products
    {
        name: 'Vim Dishwash Gel',
        description: 'Powerful dishwashing liquid for sparkling clean dishes',
        price: 199,
        discountPrice: 179,
        discount: 10,
        image: '🧴',
        category: 'home',
        stock: 60,
        brand: 'Vim',
        unit: '500ml',
        ratings: 4.3,
        reviewCount: 345
    },
    {
        name: 'Tide Detergent Powder',
        description: 'Superior cleaning for all your clothes',
        price: 450,
        discountPrice: 399,
        discount: 11,
        image: '🧼',
        category: 'home',
        stock: 40,
        brand: 'Tide',
        unit: '2kg',
        ratings: 4.5,
        reviewCount: 567
    },
    {
        name: 'Domex Toilet Cleaner',
        description: 'Kills 99.9% germs for hygienic toilets',
        price: 120,
        discountPrice: 99,
        discount: 18,
        image: '🚽',
        category: 'home',
        stock: 55,
        brand: 'Domex',
        unit: '500ml',
        ratings: 4.4,
        reviewCount: 234
    },
    {
        name: 'Lizol Floor Cleaner',
        description: 'Kills germs and leaves floors shining',
        price: 180,
        discountPrice: 159,
        discount: 12,
        image: '🧹',
        category: 'home',
        stock: 45,
        brand: 'Lizol',
        unit: '975ml',
        ratings: 4.6,
        reviewCount: 456
    },
    {
        name: 'Scotch Brite Scrub Pad',
        description: 'Heavy duty scrubbing for tough stains',
        price: 30,
        discountPrice: 25,
        discount: 17,
        image: '🧽',
        category: 'home',
        stock: 150,
        brand: 'Scotch Brite',
        unit: '3 pack',
        ratings: 4.5,
        reviewCount: 678
    },

    // Toys
    {
        name: 'Hot Wheels Car Set',
        description: 'Set of 5 die-cast racing cars',
        price: 599,
        discountPrice: 499,
        discount: 17,
        image: '🏎️',
        category: 'toys',
        stock: 30,
        brand: 'Hot Wheels',
        unit: '5 pack',
        ratings: 4.7,
        reviewCount: 234
    },
    {
        name: 'Barbie Doll',
        description: 'Fashion doll with accessories',
        price: 799,
        discountPrice: 699,
        discount: 13,
        image: '👸',
        category: 'toys',
        stock: 25,
        brand: 'Barbie',
        unit: 'piece',
        ratings: 4.8,
        reviewCount: 345
    },
    {
        name: 'LEGO Building Blocks',
        description: 'Creative building blocks set',
        price: 1299,
        discountPrice: 1099,
        discount: 15,
        image: '🧱',
        category: 'toys',
        stock: 20,
        brand: 'LEGO',
        unit: '200 pieces',
        ratings: 4.9,
        reviewCount: 456
    },
    {
        name: 'Nerf Blaster',
        description: 'Foam dart blaster toy gun',
        price: 1499,
        discountPrice: 1299,
        discount: 13,
        image: '🔫',
        category: 'toys',
        stock: 15,
        brand: 'Nerf',
        unit: 'piece',
        ratings: 4.6,
        reviewCount: 189
    },
    {
        name: 'Puzzle Game 1000 Pieces',
        description: 'Challenging jigsaw puzzle',
        price: 399,
        discountPrice: 349,
        discount: 13,
        image: '🧩',
        category: 'toys',
        stock: 35,
        brand: 'Ravensburger',
        unit: '1000 pieces',
        ratings: 4.7,
        reviewCount: 267
    },

    // Fresh Products
    {
        name: 'Fresh Tomatoes',
        description: 'Farm fresh red tomatoes',
        price: 40,
        discountPrice: 35,
        discount: 13,
        image: '🍅',
        category: 'fresh',
        stock: 200,
        unit: '500g',
        ratings: 4.3,
        reviewCount: 456
    },
    {
        name: 'Fresh Bananas',
        description: 'Naturally ripened bananas',
        price: 50,
        discountPrice: 45,
        discount: 10,
        image: '🍌',
        category: 'fresh',
        stock: 150,
        unit: '1 dozen',
        ratings: 4.4,
        reviewCount: 567
    },
    {
        name: 'Fresh Apples',
        description: 'Crisp and juicy red apples',
        price: 180,
        discountPrice: 159,
        discount: 12,
        image: '🍎',
        category: 'fresh',
        stock: 100,
        unit: '1kg',
        ratings: 4.6,
        reviewCount: 234
    },
    {
        name: 'Fresh Spinach',
        description: 'Organic green spinach leaves',
        price: 30,
        discountPrice: 25,
        discount: 17,
        image: '🥬',
        category: 'fresh',
        stock: 80,
        unit: '250g',
        ratings: 4.5,
        reviewCount: 123
    },
    {
        name: 'Fresh Potatoes',
        description: 'Farm fresh potatoes',
        price: 35,
        discountPrice: 30,
        discount: 14,
        image: '🥔',
        category: 'fresh',
        stock: 250,
        unit: '1kg',
        ratings: 4.2,
        reviewCount: 345
    },

    // Electronics
    {
        name: 'boAt Earphones',
        description: 'Wireless Bluetooth earphones with deep bass',
        price: 1999,
        discountPrice: 1499,
        discount: 25,
        image: '🎧',
        category: 'electronics',
        stock: 45,
        brand: 'boAt',
        unit: 'piece',
        ratings: 4.4,
        reviewCount: 1234,
        featured: true
    },
    {
        name: 'Mi Power Bank 10000mAh',
        description: 'Fast charging portable power bank',
        price: 1499,
        discountPrice: 1199,
        discount: 20,
        image: '🔋',
        category: 'electronics',
        stock: 60,
        brand: 'Mi',
        unit: 'piece',
        ratings: 4.5,
        reviewCount: 789
    },
    {
        name: 'Logitech Wireless Mouse',
        description: 'Ergonomic wireless mouse',
        price: 999,
        discountPrice: 799,
        discount: 20,
        image: '🖱️',
        category: 'electronics',
        stock: 50,
        brand: 'Logitech',
        unit: 'piece',
        ratings: 4.6,
        reviewCount: 567
    },
    {
        name: 'SanDisk 64GB Pendrive',
        description: 'High speed USB 3.0 flash drive',
        price: 699,
        discountPrice: 599,
        discount: 14,
        image: '💾',
        category: 'electronics',
        stock: 100,
        brand: 'SanDisk',
        unit: '64GB',
        ratings: 4.5,
        reviewCount: 456
    },
    {
        name: 'Sony Wired Headphones',
        description: 'Over-ear headphones with superior sound',
        price: 2499,
        discountPrice: 1999,
        discount: 20,
        image: '🎧',
        category: 'electronics',
        stock: 35,
        brand: 'Sony',
        unit: 'piece',
        ratings: 4.7,
        reviewCount: 678
    },

    // Mobiles & Accessories
    {
        name: 'iPhone 15 Pro',
        description: 'Latest iPhone with A17 Pro chip',
        price: 134900,
        discountPrice: 129900,
        discount: 4,
        image: '📱',
        category: 'mobiles',
        stock: 10,
        brand: 'Apple',
        unit: '256GB',
        ratings: 4.9,
        reviewCount: 234,
        featured: true
    },
    {
        name: 'Samsung Galaxy S24',
        description: 'Flagship Android smartphone',
        price: 79999,
        discountPrice: 74999,
        discount: 6,
        image: '📱',
        category: 'mobiles',
        stock: 15,
        brand: 'Samsung',
        unit: '128GB',
        ratings: 4.7,
        reviewCount: 456
    },
    {
        name: 'Phone Tempered Glass',
        description: 'Scratch-resistant screen protector',
        price: 299,
        discountPrice: 199,
        discount: 33,
        image: '📱',
        category: 'mobiles',
        stock: 200,
        brand: 'Generic',
        unit: 'piece',
        ratings: 4.3,
        reviewCount: 567
    },
    {
        name: 'Phone Back Cover',
        description: 'Shockproof protective case',
        price: 399,
        discountPrice: 299,
        discount: 25,
        image: '📱',
        category: 'mobiles',
        stock: 150,
        brand: 'Generic',
        unit: 'piece',
        ratings: 4.4,
        reviewCount: 345
    },
    {
        name: 'Fast Charger 65W',
        description: 'Quick charging adapter with cable',
        price: 1299,
        discountPrice: 999,
        discount: 23,
        image: '🔌',
        category: 'mobiles',
        stock: 80,
        brand: 'Anker',
        unit: 'piece',
        ratings: 4.6,
        reviewCount: 234
    },

    // Beauty Products
    {
        name: 'Lakme Sunscreen SPF 50',
        description: 'Broad spectrum sun protection',
        price: 399,
        discountPrice: 349,
        discount: 13,
        image: '☀️',
        category: 'beauty',
        stock: 70,
        brand: 'Lakme',
        unit: '50ml',
        ratings: 4.4,
        reviewCount: 567
    },
    {
        name: 'Mamaearth Face Wash',
        description: 'Natural and gentle face cleanser',
        price: 299,
        discountPrice: 249,
        discount: 17,
        image: '💧',
        category: 'beauty',
        stock: 90,
        brand: 'Mamaearth',
        unit: '100ml',
        ratings: 4.5,
        reviewCount: 789
    },
    {
        name: 'Nivea Body Lotion',
        description: 'Nourishing moisturizer for soft skin',
        price: 249,
        discountPrice: 199,
        discount: 20,
        image: '🧴',
        category: 'beauty',
        stock: 100,
        brand: 'Nivea',
        unit: '200ml',
        ratings: 4.6,
        reviewCount: 456
    },
    {
        name: 'Dove Shampoo',
        description: 'Gentle cleansing for healthy hair',
        price: 299,
        discountPrice: 249,
        discount: 17,
        image: '🧴',
        category: 'beauty',
        stock: 85,
        brand: 'Dove',
        unit: '340ml',
        ratings: 4.5,
        reviewCount: 678
    },
    {
        name: 'Gillette Razor',
        description: 'Precision shaving razor',
        price: 399,
        discountPrice: 349,
        discount: 13,
        image: '🪒',
        category: 'beauty',
        stock: 60,
        brand: 'Gillette',
        unit: 'piece',
        ratings: 4.7,
        reviewCount: 345
    },

    // Fashion Products
    {
        name: 'Cotton T-Shirt',
        description: 'Comfortable round neck t-shirt',
        price: 499,
        discountPrice: 399,
        discount: 20,
        image: '👕',
        category: 'fashion',
        stock: 100,
        brand: 'Allen Solly',
        unit: 'piece',
        ratings: 4.3,
        reviewCount: 234
    },
    {
        name: 'Denim Jeans',
        description: 'Classic blue denim jeans',
        price: 1499,
        discountPrice: 1199,
        discount: 20,
        image: '👖',
        category: 'fashion',
        stock: 75,
        brand: 'Levis',
        unit: 'piece',
        ratings: 4.5,
        reviewCount: 456
    },
    {
        name: 'Sports Shoes',
        description: 'Comfortable running shoes',
        price: 2499,
        discountPrice: 1999,
        discount: 20,
        image: '👟',
        category: 'fashion',
        stock: 50,
        brand: 'Nike',
        unit: 'pair',
        ratings: 4.6,
        reviewCount: 567
    },
    {
        name: 'Formal Shirt',
        description: 'Crisp white formal shirt',
        price: 899,
        discountPrice: 699,
        discount: 22,
        image: '👔',
        category: 'fashion',
        stock: 60,
        brand: 'Van Heusen',
        unit: 'piece',
        ratings: 4.4,
        reviewCount: 345
    },
    {
        name: 'Casual Watch',
        description: 'Stylish analog watch',
        price: 1999,
        discountPrice: 1499,
        discount: 25,
        image: '⌚',
        category: 'fashion',
        stock: 40,
        brand: 'Fossil',
        unit: 'piece',
        ratings: 4.7,
        reviewCount: 234
    },

    // Gourmet Products
    {
        name: 'Amul Cheese Slices',
        description: 'Creamy processed cheese slices',
        price: 140,
        discountPrice: 125,
        discount: 11,
        image: '🧀',
        category: 'gourmet',
        stock: 80,
        brand: 'Amul',
        unit: '200g',
        ratings: 4.5,
        reviewCount: 456
    },
    {
        name: 'Maggi Noodles',
        description: 'Classic masala instant noodles',
        price: 120,
        discountPrice: 110,
        discount: 8,
        image: '🍜',
        category: 'gourmet',
        stock: 150,
        brand: 'Maggi',
        unit: '12 pack',
        ratings: 4.7,
        reviewCount: 1234
    },
    {
        name: 'Kissan Jam',
        description: 'Mixed fruit jam',
        price: 180,
        discountPrice: 159,
        discount: 12,
        image: '🍓',
        category: 'gourmet',
        stock: 70,
        brand: 'Kissan',
        unit: '500g',
        ratings: 4.4,
        reviewCount: 345
    },
    {
        name: 'Nutella Chocolate Spread',
        description: 'Hazelnut chocolate spread',
        price: 399,
        discountPrice: 349,
        discount: 13,
        image: '🍫',
        category: 'gourmet',
        stock: 60,
        brand: 'Nutella',
        unit: '350g',
        ratings: 4.8,
        reviewCount: 678
    },
    {
        name: 'Kelloggs Corn Flakes',
        description: 'Crispy breakfast cereal',
        price: 299,
        discountPrice: 249,
        discount: 17,
        image: '🥣',
        category: 'gourmet',
        stock: 90,
        brand: 'Kelloggs',
        unit: '475g',
        ratings: 4.5,
        reviewCount: 567
    }
];

// Seed function
const seedDatabase = async () => {
    try {
        // Clear existing data
        console.log('🗑️  Clearing existing data...');
        await Category.deleteMany({});
        await Product.deleteMany({});

        // Insert categories
        console.log('📁 Inserting categories...');
        await Category.insertMany(categories);
        console.log(`✅ ${categories.length} categories created`);

        // Insert products
        console.log('📦 Inserting products...');
        await Product.insertMany(products);
        console.log(`✅ ${products.length} products created`);

        console.log('\n✨ Database seeded successfully!\n');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

// Run seeder
seedDatabase();
