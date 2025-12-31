import React from 'react';
import ProductCard from '../ProductCard';

const Electronics = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-blue-600 to-indigo-900 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Tech Essentials</h1>
                    <p className="text-blue-50 text-lg opacity-90">Gadgets, accessories and more.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "Wireless Earbuds", price: 1999, originalPrice: 3499, weight: "1 pair", image: "🎧" },
                    { title: "Bluetooth Speaker", price: 2499, originalPrice: 3999, weight: "1 pc", image: "🔊" },
                    { title: "Smart Watch", price: 4999, originalPrice: 7999, weight: "1 pc", image: "⌚" },
                    { title: "Power Bank 20000mAh", price: 1299, originalPrice: 2299, weight: "1 pc", image: "🔋" },
                    { title: "USB-C Cable", price: 299, originalPrice: 599, weight: "1.5m", image: "🔌" },
                    { title: "Laptop Stand", price: 899, originalPrice: 1499, weight: "1 pc", image: "💻" },
                    { title: "Webcam HD", price: 2999, originalPrice: 4499, weight: "1 pc", image: "📹" },
                    { title: "Gaming Mouse", price: 1599, originalPrice: 2499, weight: "1 pc", image: "🖱️" },
                ].map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        weight={product.weight}
                        time="25 mins"
                        image={<span className="text-5xl">{product.image}</span>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Electronics;
