# Zepto Backend API

Complete RESTful API backend for Zepto E-commerce Application built with Node.js, Express, and MongoDB.

## Features

- 🔐 JWT Authentication (Register, Login)
- 📦 Product Management with Categories
- 🛒 Shopping Cart Operations
- 📋 Order Management
- 🔍 Search & Filter Products
- 💾 MongoDB Database

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express Validator
- **Security**: bcryptjs for password hashing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zepto
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

3. Seed the database:
```bash
npm run seed
```

4. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Products
- `GET /api/products` - Get all products (with pagination & filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:slug` - Get products by category

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug

### Cart (Protected Routes)
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:productId` - Update cart item
- `DELETE /api/cart/remove/:productId` - Remove from cart
- `DELETE /api/cart/clear` - Clear cart

### Orders (Protected Routes)
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID

## Database Models

- **User**: Authentication and profile
- **Product**: Product information and inventory
- **Category**: Product categories
- **Cart**: User shopping cart
- **Order**: Order history and tracking

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

## Categories Available

1. All - All products
2. Cafe - Coffee, Tea & Snacks
3. Home - Home & Kitchen
4. Toys - Toys & Games
5. Fresh - Fruits & Vegetables
6. Electronics - Electronic Gadgets
7. Mobiles - Phones & Accessories
8. Beauty - Beauty & Personal Care
9. Fashion - Fashion & Apparel
10. Gourmet - Premium Foods

## Author

Aditya

## License

ISC
