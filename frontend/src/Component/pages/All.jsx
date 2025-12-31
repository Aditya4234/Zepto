import React from 'react';
import ProductCard from '../ProductCard';

const All = () => {
    return (
        <div className="w-full animate-fade-in">
            {/* Hero Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-[#36005c] to-[#6a00b0] flex items-center px-10 shadow-lg">
                <div className="relative z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Everything You Need</h1>
                    <p className="text-purple-100 text-lg opacity-90">Delivered in 10 minutes or less.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <ProductCard
                        key={item}
                        title={`Premium Generic Product Item ${item}`}
                        price={100 + item * 20}
                        originalPrice={150 + item * 20}
                        weight={`${100 * item}g`}
                        time={`${5 + item} mins`}
                    />
                ))}
            </div>
        </div>
    );
};

export default All;
