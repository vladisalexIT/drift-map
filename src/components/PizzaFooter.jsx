export default function PizzaFooter({ price, count, onClickAdd }) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <div className="text-[18px] font-extrabold">от {price} ₽</div>
      <button
        type="button"
        onClick={onClickAdd}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#ff7a1a] bg-white px-4 py-2 text-sm font-bold text-[#ff7a1a] transition-colors hover:bg-[#ff7a1a] hover:text-white"
      >
        <span>+ Добавить</span>
        {count > 0 && (
          <i className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff7a1a] text-[12px] not-italic text-white">
            {count}
          </i>
        )}
      </button>
    </div>
  );
}