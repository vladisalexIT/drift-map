import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function HeaderLogo() {
    return (
        <Link to="/" className="flex items-center gap-4 w-fit">
            <img src={logo} alt="Logo" />
            <div>
                <h1 className="font-extrabold text-2xl tracking-tighter text-[#f5e2e2] uppercase">
                    CINEMA PIZZA
                </h1>
                <p className="font-normal text-[16px] text-[#7b7b7b]">Самая киношная пицца</p>
            </div>
        </Link>
    );
}