import { Link } from "react-router-dom"; 

const CartBottom = ({ totalCount, totalPrice }) => {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center text-[22px]">
        <div>
          <span className="text-white">Всего пицц: </span>
          <span className="font-bold">{totalCount} шт.</span>
        </div>
        <div>
          <span className="text-white">Сумма заказа: </span>
          <span className="font-bold text-[#FE5F1E]">{totalPrice} ₽</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <Link to="/" className="flex items-center justify-center gap-2 px-7 py-4 border border-[#D3D3D3] rounded-full text-[#CACACA] hover:bg-[#f4f4f4] transition duration-300 cursor-pointer">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 11L1 6L7 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-semibold text-base">Вернуться назад</span>
        </Link>

        <button className="px-10 py-4 bg-[#FE5F1E] text-white rounded-full font-bold text-base hover:bg-[#e24b0e] transition duration-300 cursor-pointer">
          Оплатить сейчас
        </button>
      </div>
    </div>
  );
};

export default CartBottom;