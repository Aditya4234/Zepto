import React from 'react';
import ProductCard from '../ProductCard';

const Toys = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-sky-400 to-cyan-600 flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Playtime Paradise</h1>
                    <p className="text-sky-50 text-lg opacity-90">Fun and learning for every age.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                    { title: "Remote Control Car", price: 899, originalPrice: 1499, weight: "Age 5+", image: "🚗" },
                    { title: "Building Blocks Set", price: 599, originalPrice: 999, weight: "Age 3+", image: "🧱" },
                    { title: "Teddy Bear", price: 499, originalPrice: 799, weight: "Age 2+", image: "🧸" },
                    { title: "Board Game", price: 799, originalPrice: 1299, weight: "Age 6+", image: "🎲" },
                    { title: "Puzzle Set", price: 349, originalPrice: 599, weight: "Age 4+", image: "🧩" },
                    { title: "Action Figure", price: 699, originalPrice: 1199, weight: "Age 5+", image: "🦸" },
                    { title: "Toy Kitchen Set", price: 1299, originalPrice: 1999, weight: "Age 3+", image: "🍳" },
                    { title: "Musical Instrument", price: 899, originalPrice: 1499, weight: "Age 4+", image: "🎸" },
                ].map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        weight={product.weight}
                        time="30 mins"
                        image={<span className="text-5xl">{product.image}</span>}
                    />
                ))}
            </div>
        </div>
    );
};

export default Toys;
