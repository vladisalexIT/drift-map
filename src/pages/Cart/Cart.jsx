import pepperoniImg from '../../assets/pizza-data/1.jpg';
import margaritaImg from '../../assets/pizza-data/2.jpg';
import mushroomImg from '../../assets/pizza-data/3.jpg';
import meatCelebrationImg from '../../assets/pizza-data/4.jpg';
import vegeterianImg from '../../assets/pizza-data/5.jpg';

import Header from "../../components/Header";
import CartHeader from './CartHeader';
import CartBottom from './CartBottom';
import CartList from './CartList';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const menuItems = [
    {
      id: "1",
      name: "Пепперони",
      image: pepperoniImg,
      price: 599,
      description:
        "Классическая пицца с пикантными колбасками пепперони и сыром моцарелла на тонком тесте.",
    },
    {
      id: "2",
      name: "Маргарита",
      image: margaritaImg,
      price: 450,
      description:
        "Легендарная пицца со свежими томатами, базиликом и сливочным сыром.",
    },
    {
      id: "3",
      name: "Грибная",
      image: mushroomImg,
      price: 499,
      description:
        "Нежная пицца с шампиньонами, сыром и легким сливочным соусом.",
    },
    // {
    //   id: "4",
    //   name: "Мясной Пир",
    //   image: meatCelebrationImg,
    //   price: 650,
    //   description:
    //     "Пицца для любителей мяса: ветчина, бекон, колбаски и двойной сыр.",
    // },
    // {
    //   id: "5",
    //   name: "Вегетарианская",
    //   image: vegeterianImg,
    //   price: 550,
    //   description: "Освежающая пицца с цукини, перцем, луком и оливками.",
    // },
  ];

  return (
    <div className="bg-[#FFDF8C] min-h-screen w-full overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[1340px] min-h-[980px] py-[42px] px-[67px] bg-white rounded-[10px] flex flex-col">
        <Header />

        {menuItems.length > 0 ? (
          <div className="mt-[50px] max-w-[827px] w-full mx-auto flex-1 flex flex-col">
            <CartHeader />
            <div className="flex-1 flex flex-col items-center">
              <CartList items={menuItems} />
            </div>
            <CartBottom />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <EmptyCart />
          </div>
        )}
      </div>
    </div>
  )
}