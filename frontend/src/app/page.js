import Header from "@/Component/header";
import CategoryNav from "@/Component/CategoryNav";
import QuickLinks from "@/Component/QuickLinks";
import PromoBanners from "@/Component/PromoBanners";
import BottomNav from "@/Component/BottomNav";
import TrendingProducts from "@/Component/TrendingProducts";
import Footer from "@/Component/Footer";
export default function Home() {
    return (
        <main className="min-h-screen bg-[#0b0c2a] pb-24">
            <Header />
            <CategoryNav />
            <div className="relative z-0">
                <PromoBanners />
                <TrendingProducts />
                <QuickLinks />
            </div>
            <BottomNav />
            <Footer />
        </main>
    );
}