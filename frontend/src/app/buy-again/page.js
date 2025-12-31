"use client";
import React from 'react';
import Header from "@/Component/header";
import BottomNav from "@/Component/BottomNav";
import { RotateCcw, ShoppingCart } from 'lucide-react';

const BuyAgainPage = () => {
    return (
        <main className="min-h-screen bg-[#0b0c2a] pb-24">
            <Header />
            <div className="max-w-[1600px] mx-auto px-4 py-8">
                <div className="flex items-center gap-3 mb-8">
                    <RotateCcw className="w-8 h-8 text-[#ff3269]" />
                    <h2 className="text-2xl font-bold text-white">Buy Again</h2>
                </div>
                
                <div className="bg-[#121230] border border-white/10 rounded-3xl p-12 text-center text-gray-400">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingCart className="w-10 h-10 opacity-20" />
                    </div>
                    <p className="text-lg font-medium mb-2">No items to show yet</p>
                    <p className="text-sm opacity-60">Products you purchase frequently will appear here.</p>
                </div>
            </div>
            <BottomNav />
        </main>
    );
};

export default BuyAgainPage;
