'use client';
import React from 'react';
import { Grid, RotateCcw, Apple } from 'lucide-react';
import Link from 'next/link';

const BottomNav = () => {
    return (
        <>
            {/* Floating Elements (Just above Bottom Nav) */}
            <div className="fixed bottom-[70px] left-0 right-0 px-4 z-40 md:hidden flex flex-col gap-3">

                {/* Lays FAB */}
                <div className="absolute bottom-20 right-4 animate-bounce-slow">
                    <div className="w-14 h-14 rounded-full bg-blue-600 border-2 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                        <span className="text-xs font-black text-white italic transform -rotate-12">Lays</span>
                    </div>
                </div>

                {/* Offer Toast */}
                <div className="bg-[#1e1e24] rounded-2xl p-4 shadow-2xl border border-gray-700 flex items-center justify-between mx-1 relative overflow-hidden">
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                            <span className="text-lg">🏷️</span>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Unlock extra ₹50 OFF</p>
                            <p className="text-gray-400 text-xs">Shop for ₹1199 more</p>
                        </div>
                    </div>
                    <button className="bg-white text-[#ff3269] px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                        Offers ^
                    </button>
                    {/* Progress Bar Background */}
                    <div className="absolute bottom-0 left-0 h-1 bg-green-500 w-[20%]"></div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-3 px-6 z-50 md:hidden pb-safe">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex flex-col items-center gap-1 group">
                        <div className="w-6 h-6 flex items-center justify-center bg-pink-50 rounded-md group-hover:bg-pink-100 transition-colors">
                            <span className="font-black text-[#ff3269] text-sm font-sans">z</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#ff3269]">Home</span>
                    </Link>

                    <Link href="/categories" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Grid className="w-6 h-6 stroke-[1.5]" />
                        <span className="text-[10px] font-medium">Categories</span>
                    </Link>

                    <Link href="/buy-again" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <RotateCcw className="w-6 h-6 stroke-[1.5]" />
                        <span className="text-[10px] font-medium">Buy Again</span>
                    </Link>

                    <Link href="/category/fresh" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Apple className="w-6 h-6 stroke-[1.5]" />
                        <span className="text-[10px] font-medium">Fresh</span>
                    </Link>

                    <Link href="/category/gourmet" className="flex flex-col items-center gap-1 text-gray-400">
                        <div className="w-6 h-6 rounded-full bg-black border border-yellow-500/50 flex items-center justify-center p-0.5">
                            <span className="text-[5px] text-yellow-500 font-bold leading-none text-center">4700<br />BC</span>
                        </div>
                        <span className="text-[10px] font-medium">Gourmet</span>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default BottomNav;
