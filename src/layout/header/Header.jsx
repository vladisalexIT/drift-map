import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBasket } from "../../context/BasketContext";
import Logo from "../../components/Logo"
import HeaderActions from "./HeaderActions";
import LoginButton from "../../components/auth/LoginButton";
import LoginModal from "../../components/auth/LoginModal";

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
      <Logo />

      {location.pathname !== "/cart" && (
        <HeaderActions totalPrice={totalPrice} totalCount={totalCount} onLoginClick={() => setIsLoginOpen(true)}/>
        )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}
      />
    </div>

  );
}