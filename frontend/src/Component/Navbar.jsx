import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 gap-8">
                    {/* Logo Section */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3">
                        <div className="relative">
                            <div className="text-4xl font-black tracking-tight bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent drop-shadow-sm">
                                zepto
                            </div>
                            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-60"></div>
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl hidden md:block">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search for 'milk', 'chips', 'chocolate'..."
                                className="w-full bg-gray-50 text-gray-900 px-12 py-3.5 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-purple-500 transition-all outline-none placeholder:text-gray-400"
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <button className="hidden md:flex items-center gap-2 hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-colors">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                                A
                            </div>
                            <span className="font-semibold text-gray-700">Account</span>
                        </button>

                        <button className="flex items-center gap-2 bg-[#ff3269] hover:bg-[#ff3269]/90 text-white px-5 py-3 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-[#ff3269]/20">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>My Cart</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Search - Visible only on small screens */}
                <div className="md:hidden py-3 pb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-gray-50 text-gray-900 px-10 py-3 rounded-lg border-none ring-1 ring-gray-200 outline-none"
                        />
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" strokeWidth="2" />
                            <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
