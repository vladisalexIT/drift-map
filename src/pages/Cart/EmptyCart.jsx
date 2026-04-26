import emptyCart from '../../assets/empty-cart.png';

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full py-10">
      <h2 className="flex items-center gap-3 text-[32px] font-extrabold text-black">
        Корзина пустая <span className="text-[36px]">☹️</span>
      </h2>

      <p className="mt-4 text-[20px] text-[#777] leading-[1.5] max-w-[600px]">
        Вероятнее всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>

      <img
        src={emptyCart}
        alt="Empty cart"
        className="mt-10 w-[300px] h-auto object-contain"
      />

      <button type='button' className="mt-10 px-8 py-4 rounded-full bg-[#282828] text-white text-[16px] font-bold cursor-pointer">
        Вернуться назад
      </button>
    </div>
    
  )
}
