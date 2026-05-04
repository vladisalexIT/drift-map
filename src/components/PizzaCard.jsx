import { useState } from "react";
import PizzaOptions from "./PizzaOptions";
import PizzaFooter from "./PizzaFooter";

const typeNames = ["тонкое", "традиционное"];
const sizeNames = ["26 см.", "30 см.", "40 см."];

export default function PizzaCard({ id, name, price, image, addItem, basket }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const basketItem = basket.find((item) => item.id === id);
  const count = basketItem ? basketItem.quantity : 0;

  const onClickAdd = () => {
    addItem({
      id,
      name,
      price,
      image,
      type: typeNames[activeType],
      size: sizeNames[activeSize],
    });
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

        <PizzaOptions
          activeType={activeType}
          activeSize={activeSize}
          setActiveType={setActiveType}
          setActiveSize={setActiveSize}
        />

        <PizzaFooter price={price} count={count} onClickAdd={onClickAdd} />
      </article>
    </li>
  );
}