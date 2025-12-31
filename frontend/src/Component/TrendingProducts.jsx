"use client";
import React from 'react';
import { Flame, Plus, Star } from 'lucide-react';

const products = [
    { id: 1, name: "Amul Butter", price: "₹56", weight: "100g", emoji: "🧈", rating: 4.8 },
    { id: 2, name: "Lays Chips", price: "₹20", weight: "50g", emoji: "🥔", rating: 4.5 },
    { id: 3, name: "Coke Zero", price: "₹40", weight: "300ml", emoji: "🥤", rating: 4.7 },
    { id: 4, name: "Farm Eggs", price: "₹90", weight: "6 pcs", emoji: "🥚", rating: 4.9 },
    { id: 5, name: "Fresh Milk", price: "₹34", weight: "500ml", emoji: "🥛", rating: 4.8 },
    { id: 6, name: "Banana", price: "₹45", weight: "1 Dozen", emoji: "🍌", rating: 4.6 },
    { id: 7, name: "Patato", price: "₹20", weight: "1 Dozen", emoji: "🥔", rating: 4.6 },
    { id: 8, name: "Onion", price: "₹20", weight: "1 Dozen", emoji: "🧅", rating: 4.6 },
    { id: 9, name: "Tomato", price: "₹20", weight: "1 Dozen", emoji: "🍅", rating: 4.6 },
    { id: 10, name: "Carrot", price: "₹20", weight: "1 Dozen", emoji: "🥕", rating: 4.6 },
    { id: 11, name: "Spinach", price: "₹20", weight: "1 Dozen", emoji: "🥬", rating: 4.6 },
    { id: 12, name: "Cabbage", price: "₹20", weight: "1 Dozen", emoji: "🥬", rating: 4.6 },
    { id: 13, name: "Cauliflower", price: "₹20", weight: "1 Dozen", emoji: "🥬", rating: 4.6 },
    { id: 14, name: "Broccoli", price: "₹20", weight: "1 Dozen", emoji: "🥬", rating: 4.6 },
    { id: 15, name: "Lemon", price: "₹20", weight: "1 Dozen", emoji: "🥬", rating: 4.6 },
    { id: 16, name: "Lime", price: "₹20", weight: "1 Dozen", emoji: "🥬", rating: 4.6 },

];

const TrendingProducts = () => {
    return (
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-4">
            <div className="flex items-center gap-2 mb-6">
                <Flame className="w-6 h-6 text-orange-500 fill-orange-500 animate-pulse" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Trending Near You</h2>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
                {products.map((product) => (
                    <div key={product.id} className="min-w-[160px] w-[160px] bg-white rounded-2xl p-3 flex flex-col justify-between snap-start hover:scale-95 transition-transform duration-200 cursor-pointer">
                        <div className="w-full aspect-square bg-gray-50 rounded-xl mb-3 flex items-center justify-center text-4xl relative">
                            {product.emoji}
                            <div className="absolute bottom-1 right-1 bg-white px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                <span className="text-[10px] font-bold">{product.rating}</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-800 text-sm truncate">{product.name}</h3>
                            <p className="text-xs text-gray-500 mb-2">{product.weight}</p>

                            <div className="flex items-center justify-between">
                                <span className="font-bold text-[#36005c]">{product.price}</span>
                                <button className="w-8 h-8 rounded-lg border border-[#ff3269] text-[#ff3269] flex items-center justify-center hover:bg-[#ff3269] hover:text-white transition-colors">
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingProducts;
