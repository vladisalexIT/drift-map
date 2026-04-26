import Header from "../../components/Header";
import CartHeader from "./CartHeader";
import CartBottom from "./CartBottom";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import { useBasket } from "../../context/BasketContext";

export default function Cart() {
  const { basket } = useBasket();

  return (
    <div className="bg-[#FFDF8C] min-h-screen w-full overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[1340px] min-h-[980px] py-[42px] px-[67px] bg-white rounded-[10px] flex flex-col">
        <Header />

        {basket.length > 0 ? (
          <div className="mt-[50px] max-w-[827px] w-full mx-auto flex-1 flex flex-col">
            <CartHeader />
            <div className="flex-1 flex flex-col items-center">
              <CartList items={basket} />
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
  );
}