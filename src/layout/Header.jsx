import { useState } from "react";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useBasket } from "../context/BasketContext";
import LoginButton from "../components/auth/LoginButton";
import LoginModal from "../components/auth/LoginModal";

export default function Header() {
  const location = useLocation();
  const { basket } = useBasket();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const totalPrice = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalCount = basket.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="flex justify-between items-center pb-[40px] border-b border-solid border-[#f6f6f6] mb-10">
      <Link to="/" className="flex items-center gap-4 w-fit">
        <img src={logo} alt="Logo" />
        <div>
          <h1 className="font-extrabold text-2xl tracking-tighter text-[#f5e2e2] uppercase">
            CINEMA PIZZA
          </h1>
          <p className="font-normal text-[16px] text-[#7b7b7b]">Самая киношная пицца</p>
        </div>
      </Link>

      {location.pathname !== "/cart" && (
        <div className="flex items-center gap-3">
            <LoginButton onClick={() => setIsLoginOpen(true)} />

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
          </div>
        )}

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>

  );
}