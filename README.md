# Zepto - Quick Delivery E-commerce Platform

> 🚀 Modern e-commerce application with 10-minute delivery promise, built with Next.js and Node.js

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

## ✨ Features

- 🔐 **Complete Authentication** - Register, Login with JWT
- 📦 **Product Catalog** - 50+ products across 10 categories
- 🛒 **Shopping Cart** - Add, update, remove items
- 📋 **Order Management** - Place and track orders
- 🎨 **Premium UI/UX** - Modern dark theme with gradient effects
- ⚡ **Fast Delivery** - 10-minute delivery promise
- 📱 **Responsive Design** - Works on all devices

## 🏗️ Architecture

```
Zepto/
├── frontend/          # Next.js 14 application
│   ├── src/
│   │   ├── app/      # App router pages
│   │   ├── Component/ # React components
│   │   └── context/  # React context
│   └── public/       # Static assets
│
└── backend/          # Node.js/Express API
    ├── models/       # MongoDB models
    ├── routes/       # API routes
    ├── middleware/   # Auth middleware
    └── seed/         # Database seeding
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or MongoDB Atlas)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install

# Configure .env file with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/zepto

# Seed database
npm run seed

# Start server
npm start
```

Backend runs on: `http://localhost:5000`

## 📁 Categories

1. **All** - Browse all products
2. **Cafe** - Coffee, Tea & Snacks
3. **Home** - Home & Kitchen Essentials
4. **Toys** - Toys & Games
5. **Fresh** - Fruits & Vegetables
6. **Electronics** - Electronic Gadgets
7. **Mobiles** - Phones & Accessories
8. **Beauty** - Beauty & Personal Care
9. **Fashion** - Fashion & Apparel
10. **Gourmet** - Premium Foods

## 🔧 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Lucide React (replaced with custom SVGs)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Password Security**: bcryptjs
- **Validation**: express-validator

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:slug` - Get products by category

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug

### Cart (Protected)
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add to cart
- `PUT /api/cart/update/:productId` - Update quantity
- `DELETE /api/cart/remove/:productId` - Remove item
- `DELETE /api/cart/clear` - Clear cart

### Orders (Protected)
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

## 🌍 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zepto
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

## 📦 Deployment

### Vercel (Frontend)
1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

### Backend Options
- Railway
- Render
- Heroku
- DigitalOcean

## 👨‍💻 Author

**Aditya**

## 📄 License

ISC License

---

<div align="center">
  <p>Built with ❤️ for quick commerce</p>
  <p>⚡ Delivery in 10 minutes or less!</p>
</div>
