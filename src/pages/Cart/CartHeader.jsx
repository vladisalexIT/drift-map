import cartIcon from "../../assets/cart-black.svg";
import trashBin from "../../assets/trash-bin.svg";


export default function CartHeader({ clearBasket }) {
    return (
        <div className="flex justify-between items-center pb-[30px]">
            <div className="flex items-center gap-3">
                <img src={cartIcon} alt="cart-icon" />
                <h1 className="font-bold text-[32px] tracking-[0.01em] text-black">Корзина</h1>
            </div>

            <button
                type="button" onClick={clearBasket}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition cursor-pointer"
            >
                <img src={trashBin} alt="trash-icon" />
                <span>Очистить корзину</span>
            </button>
        </div>
    )
}
