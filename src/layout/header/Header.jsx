import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBasket } from "../../context/BasketContext";
import useBasketTotals from "../../hooks/useBasketTotals";
import Logo from "../../components/Logo"
import HeaderActions from "./HeaderActions";
import LoginModal from "../../components/auth/LoginModal";

export default function Header() {
  const location = useLocation();
  const { basket } = useBasket();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { totalPrice, totalCount } = useBasketTotals(basket);

  return (
    <div className="flex justify-between items-center pb-[40px] border-b border-solid border-[#f6f6f6] mb-10">
      <Logo />

      {location.pathname !== "/cart" && (
        <HeaderActions totalPrice={totalPrice} totalCount={totalCount} onLoginClick={() => setIsLoginOpen(true)}/>
        )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}
      />
    </div>

  );
}