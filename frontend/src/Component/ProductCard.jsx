import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ title, price, originalPrice, weight, time = "8 mins", image }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-purple-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer relative">
            {/* Image Section */}
            <div className="h-40 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
                    {image || "Product Image"}
                </div>

                {/* Quick Add Button */}
                <button className="absolute bottom-3 right-3 bg-white text-[#36005c] p-2 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#36005c] hover:text-white ring-1 ring-gray-100">
                    <Plus size={18} strokeWidth={2.5} />
                </button>

                {/* Delivery Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-[#36005c] shadow-sm uppercase tracking-wider">
                    {time}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 min-h-[40px] leading-relaxed">
                    {title}
                </h3>
                <div className="text-xs text-gray-400 mb-3 font-medium">{weight}</div>

                <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 line-through decoration-gray-300">₹{originalPrice}</span>
                        <span className="font-bold text-gray-900 text-base">₹{price}</span>
                    </div>
                    <button className="text-[#ff3269] text-xs font-bold bg-pink-50 px-3 py-1.5 rounded-md hover:bg-pink-100 transition-colors uppercase tracking-wide">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
