import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBasket } from "../context/BasketContext";
import cartIcon from "../assets/cart-icon.svg";

export default function StickyCart() {
    const [isVisible, setIsVisible] = useState(false);
    const { basket } = useBasket();
    const location = useLocation();

    const totalCount = basket.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 135) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (location.pathname === "/cart" || !isVisible) return null;

    return (
        <Link
            to="/cart"
            className="fixed right-80 top-6 z-[100] flex h-14 items-center gap-3 rounded-2xl bg-[#ff7a1a] px-5 text-white shadow-2xl transition-all duration-300 hover:bg-[#f06f0f] animate-in fade-in slide-in-from-top-4"
        >
            <div className="relative">
                <img src={cartIcon} alt="cart" className="w-6 h-6" />
                {totalCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#ff7a1a]">
                        {totalCount}
                    </span>
                )}
            </div>
        </Link>
    );
}