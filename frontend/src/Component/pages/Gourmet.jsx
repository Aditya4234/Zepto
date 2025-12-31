"use client";
import React from 'react';
import ProductCard from '../ProductCard';

const products = [
    { id: 1, title: "Premium Blue Cheese", price: "450", originalPrice: "550", weight: "100g", image: "🧀" },
    { id: 2, title: "Artisanal Sourdough", price: "180", originalPrice: "220", weight: "400g", image: "🥖" },
    { id: 3, title: "Imported Truffle Oil", price: "1250", originalPrice: "1500", weight: "250ml", image: "🧴" },
    { id: 4, title: "Aged Balsamic Vinegar", price: "850", originalPrice: "990", weight: "250ml", image: "🍾" },
    { id: 5, title: "Smoked Salmon", price: "650", originalPrice: "750", weight: "200g", image: "🐟" },
    { id: 6, title: "Exotic Dark Chocolate", price: "350", originalPrice: "420", weight: "80g", image: "🍫" },
];

const Gourmet = () => {
    return (
        <div className="space-y-8">
            <div className="relative h-64 rounded-3xl overflow-hidden mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="h-full bg-yellow-900/50 flex flex-col justify-center px-12 relative z-20">
                    <h1 className="text-5xl font-black text-white mb-4 italic">Gourmet Selection</h1>
                    <p className="text-white/80 text-xl font-medium max-w-lg">Fine foods and artisanal delicacies delivered to your doorstep.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Gourmet;
