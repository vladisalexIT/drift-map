import React, { useState } from 'react';

const typeNames = ['тонкое', 'традиционное'];
const sizeNames = ['26 см.', '30 см.', '40 см.'];

function PizzaBlock({ id, name, price, image, addItem, basket }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const basketItem = basket.find((item) => item.id === id);
  const count = basketItem ? basketItem.quantity : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      image,
      type: typeNames[activeType],
      size: sizeNames[activeSize],
    };
    addItem(item);
  };

  return (
    <li className="flex flex-col">
      <article className="flex h-full flex-col">
        <div className="mb-3 overflow-hidden rounded-md bg-white p-3 shadow-sm">
          <img
            src={image}
            alt={name}
            className="aspect-square w-full object-contain"
            loading="lazy"
          />
        </div>

        <h3 className="mb-5 text-center text-[18px] font-extrabold leading-tight">
          {name}
        </h3>

        <div className="rounded-xl bg-white p-2 shadow-sm">
          <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-[#f4f4f4] text-[11px] font-semibold text-[#7a7a7a]">
            {typeNames.map((type, idx) => (
              <button
                key={type}
                onClick={() => setActiveType(idx)}
                className={`flex h-8 items-center justify-center transition cursor-pointer ${
                  activeType === idx ? "bg-white shadow-sm text-black rounded-lg" : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-3 gap-1 text-center text-sm font-semibold">
            {sizeNames.map((size, idx) => (
              <button
                key={size}
                type="button"
                onClick={() => setActiveSize(idx)}
                className={`rounded-md px-1 py-2 transition cursor-pointer ${
                  activeSize === idx
                    ? "bg-[#1f1f1f] text-white"
                    : "bg-[#f6f2e8] text-[#8a8a8a] hover:bg-[#efe8d8]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-[18px] font-extrabold">от {price} ₽</div>
          <button
            type="button"
            onClick={onClickAdd}
            className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a] bg-white px-4 py-2 text-sm font-bold text-[#ff7a1a] cursor-pointer hover:bg-[#ff7a1a] hover:text-white transition-colors"
          >
            <span>+ Добавить</span>
            {count > 0 && (
              <i className="not-italic bg-[#ff7a1a] text-white w-5 h-5 rounded-full flex items-center justify-center text-[12px]">
                {count}
              </i>
            )}
          </button>
        </div>
      </article>
    </li>
  );
}

export default PizzaBlock;