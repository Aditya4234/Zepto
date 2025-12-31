import React from 'react';
import ProductCard from '../ProductCard';

const Beauty = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-pink-500 to-rose-600 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Glow & Shine</h1>
                    <p className="text-pink-50 text-lg opacity-90">Premium skincare and makeup brands.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "Matte Lipstick", price: 650, originalPrice: 850, weight: "5g", image: "💄" },
                    { title: "Sunscreen SPF 50", price: 450, originalPrice: 600, weight: "50ml", image: "🧴" },
                    { title: "Vitamin C Serum", price: 890, originalPrice: 1200, weight: "30ml", image: "🧪" },
                    { title: "Hydrating Mask", price: 150, originalPrice: 200, weight: "1 pc", image: "💆" },
                    { title: "Eyeliner Pen", price: 350, originalPrice: 500, weight: "2g", image: "🖋️" },
                    { title: "Face Wash", price: 299, originalPrice: 399, weight: "150ml", image: "🧼" },
                    { title: "Peel Off Mask", price: 199, originalPrice: 299, weight: "100g", image: "🧖‍♀️" },
                    { title: "Nail Polish", price: 120, originalPrice: 180, weight: "10ml", image: "💅" },
                ].map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        weight={product.weight}
                        time="15 mins"
                        image={<span className="text-5xl">{product.image}</span>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Beauty;
