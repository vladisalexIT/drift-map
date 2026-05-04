import { Link } from "react-router"
import LoginButton from "../../components/auth/LoginButton"
import CartButton from "../../components/CartButton"

export default function HeaderActions({ totalPrice, totalCount, onLoginClick }) {
    return (
        <div className="flex items-center gap-3">
            <LoginButton onClick={onLoginClick} />

            <CartButton totalPrice={totalPrice} totalCount={totalCount}/>
        </div>
    )
}
