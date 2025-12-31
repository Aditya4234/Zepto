"use client";
import React from 'react';
import { X, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
    const { isCartOpen, closeCart } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
                onClick={closeCart}
            ></div>

            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col">

                {/* Header */}
                <div className="p-4 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="w-6 h-6 text-[#36005c]" />
                        <h2 className="text-xl font-bold text-[#36005c]">Your Cart (2)</h2>
                    </div>
                    <button
                        onClick={closeCart}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                {/* Body (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Mock Item 1 */}
                    <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-2xl border border-gray-200">
                            🥑
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-sm">Organic Avocados</h3>
                            <p className="text-xs text-gray-500 mb-2">500g</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-[#36005c]">₹120</span>
                                <div className="flex items-center gap-3 bg-[#ff3269]/10 rounded-lg px-2 py-1">
                                    <button className="text-[#ff3269]"><Minus className="w-4 h-4" /></button>
                                    <span className="font-bold text-[#ff3269] text-sm">1</span>
                                    <button className="text-[#ff3269]"><Plus className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mock Item 2 */}
                    <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-2xl border border-gray-200">
                            🍞
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-sm">Whole Wheat Bread</h3>
                            <p className="text-xs text-gray-500 mb-2">400g</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-[#36005c]">₹55</span>
                                <div className="flex items-center gap-3 bg-[#ff3269]/10 rounded-lg px-2 py-1">
                                    <button className="text-[#ff3269]"><Minus className="w-4 h-4" /></button>
                                    <span className="font-bold text-[#ff3269] text-sm">1</span>
                                    <button className="text-[#ff3269]"><Plus className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-medium text-gray-600">Total</span>
                        <span className="font-bold text-xl text-[#36005c]">₹175</span>
                    </div>
                    <button className="w-full bg-[#ff3269] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#e62e5f] active:scale-95 transition-all shadow-lg shadow-[#ff3269]/20">
                        Proceed to Checkout
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
