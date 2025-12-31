import React from 'react';
import { CheckCircle2, ChevronRight, Zap } from 'lucide-react';

const PromoBanners = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">

            {/* Banner 1: New Year 2026 */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#1a1b4b] border border-blue-500/30 shadow-2xl min-h-[220px] flex flex-col items-center justify-center text-center p-6 group cursor-pointer">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,100,0.5),transparent_80%)]"></div>
                {/* Arc effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[20px] border-blue-900/20 rounded-full blur-xl"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <p className="text-blue-200 text-sm tracking-[0.2em] font-medium mb-2 uppercase drop-shadow-md">New year loading</p>
                    <h2 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] font-sans tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                        2026
                    </h2>
                </div>

                {/* Cheers Mode Badge */}
                <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-full p-[1.5px] shadow-[0_0_15px_rgba(255,100,100,0.4)]">

                    </div>
                </div>
            </div>

            {/* Banner 2: 0 Fees Strip */}
            <div className="relative overflow-hidden rounded-2xl bg-[#0b0c2a] border border-white/10 p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-900/10">
                <div className="flex items-center gap-3 relative z-10">
                    <h3 className="text-4xl font-black text-white italic tracking-tighter flex items-center">
                        ₹0 <span className="text-white/80 font-bold not-italic text-2xl ml-2">FEES</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 text-[12px] font-medium text-gray-200 relative z-10 w-full md:w-auto">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-white fill-white/20" />
                        <span>₹0 Handling Fee</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-white fill-white/20" />
                        <span>₹0 Delivery Fee*</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-white fill-white/20" />
                        <span>₹0 Rain & Surge Fee</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PromoBanners;
