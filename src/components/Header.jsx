import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg"
import { Link, useLocation } from "react-router-dom"; 

export default function Header() {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center pb-[40px] border-b border-solid border-[#f6f6f6] mb-10">
      <Link to="/" className="flex items-center gap-4 w-fit">
        <img src={logo} alt="Logo" />
        <div>
          <h1 className="font-extrabold text-2xl tracking-tighter text-[#181818] uppercase">
            REACT PIZZA
          </h1>
          <p className="font-normal text-[16px] text-[#7b7b7b]">Самая реактивная пицца</p>
        </div>
      </Link>

      {location.pathname !== "/cart" && (
        <Link
          to="/cart"
          className="inline-flex items-center gap-3 rounded-full bg-[#ff7a1a] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#f06f0f]"
        >
          <span>520 ₽</span>
          <span className="h-5 w-px bg-white/30" />
          <span className="inline-flex items-center gap-2">
            <span className="text-base"><img src={cartIcon} alt="cart-icon" /></span>
            <span>3</span>
          </span>
        </Link>
      )}
    </div>
  );
}