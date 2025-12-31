import React from 'react';
import ProductCard from '../ProductCard';

const Fashion = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Trendy Fashion</h1>
                    <p className="text-purple-50 text-lg opacity-90">Style that speaks for itself.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "Cotton T-Shirt", price: 599, originalPrice: 999, weight: "Size M", image: "👕" },
                    { title: "Denim Jeans", price: 1299, originalPrice: 1799, weight: "32 Waist", image: "👖" },
                    { title: "Summer Dress", price: 849, originalPrice: 1499, weight: "Size L", image: "👗" },
                    { title: "Leather Jacket", price: 2999, originalPrice: 4999, weight: "Size XL", image: "🧥" },
                    { title: "Running Shoes", price: 1899, originalPrice: 2999, weight: "Size 9", image: "👟" },
                    { title: "Handbag", price: 1499, originalPrice: 2499, weight: "1 pc", image: "👜" },
                    { title: "Sunglasses", price: 799, originalPrice: 1299, weight: "1 pc", image: "🕶️" },
                    { title: "Wrist Watch", price: 2499, originalPrice: 3999, weight: "1 pc", image: "⌚" },
                ].map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        weight={product.weight}
                        time="45 mins"
                        image={<span className="text-5xl">{product.image}</span>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Fashion;
