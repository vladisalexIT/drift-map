import pepperoni from '../../assets/pizza-data/1.jpg';
import margarita from '../../assets/pizza-data/2.jpg';
import mushroom from '../../assets/pizza-data/3.jpg';
import meatCelebration from '../../assets/pizza-data/4.jpg';
import vegeterian from '../../assets/pizza-data/5.jpg';


export default function CartItem({ name, image, count, price, size, type, addItem, decreaseItem, removeItem, item }) {
  return (
    <div className="flex items-center justify-between border-t border-[#F4F4F4] py-8 w-full h-auto max-h-[624px] mx-auto">
      <div className="flex items-center gap-4 w-[40%]">
        <img className="w-20 h-20" src={image} alt="Pizza" />
        <div>
          <h3 className="font-bold text-xl leading-none mb-[3px]">{name}</h3>
          <p className="text-[#8D8D8D] text-lg">{type}, {size}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full border-2 border-[#FE5F1E] text-[#FE5F1E] flex items-center justify-center font-bold cursor-pointer" onClick={() => decreaseItem(item.id)}>-</button>
        <span className="font-bold text-xl">{count}</span>
        <button className="w-8 h-8 rounded-full border-2 border-[#FE5F1E] text-[#FE5F1E] flex items-center justify-center font-bold cursor-pointer" onClick={() => addItem(item)}>+</button>
      </div>

      <div className="font-bold text-xl w-[80px] text-right">
        {price} ₽
      </div>

      <button onClick={() => removeItem(item.id)} className="w-8 h-8 border-2 border-[#D7D7D7] rounded-full text-[#D7D7D7] flex items-center justify-center cursor-pointer">
        ✕
      </button>
    </div>
  )
}