import { Link } from "react-router";
import cartIcon from "../assets/cart-icon.svg";

export default function CartButton({ totalPrice, totalCount }) {
    return (
        <Link
            to="/cart"
            className="inline-flex items-center gap-3 rounded-full bg-[#ff7a1a] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#f06f0f]"
        >
            <span>{totalPrice}</span>
            <span className="h-5 w-px bg-white/30" />
            <span className="inline-flex items-center gap-2">
                <span className="text-base">
                    <img src={cartIcon} alt="cart-icon" />
                </span>
                <span>{totalCount}</span>
            </span>
        </Link>
    )
}
