import React from 'react';
import ProductCard from '../ProductCard';

const Mobile = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Smartphone Mania</h1>
                    <p className="text-indigo-50 text-lg opacity-90">Latest flagships and budget beasts.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "iPhone 15 Pro", price: 129990, originalPrice: 134990, weight: "256 GB", image: "📱" },
                    { title: "Samsung S24 Ultra", price: 124999, originalPrice: 129999, weight: "512 GB", image: "🤳" },
                    { title: "OnePlus 12", price: 64999, originalPrice: 69999, weight: "256 GB", image: "📱" },
                    { title: "Google Pixel 8", price: 75999, originalPrice: 79999, weight: "128 GB", image: "📱" },
                    { title: "Redmi Note 13", price: 17999, originalPrice: 20999, weight: "128 GB", image: "📱" },
                    { title: "Nothing Phone 2", price: 39999, originalPrice: 44999, weight: "256 GB", image: "📱" },
                    { title: "Fast Charger 65W", price: 1499, originalPrice: 1999, weight: "1 pc", image: "🔌" },
                    { title: "Tempered Glass", price: 199, originalPrice: 499, weight: "1 pc", image: "💎" },
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

export default Mobile;
