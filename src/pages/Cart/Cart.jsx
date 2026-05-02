import Header from "../../layout/Header";
import CartHeader from "./CartHeader";
import CartBottom from "./CartBottom";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import { useBasket } from "../../context/BasketContext";
import SpaceBackground from "../../components/SpaceBackground";

export default function Cart() {
  const { basket, addItem, decreaseItem, removeItem, clearBasket } = useBasket();

  const totalPrice = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalCount = basket.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 text-white">
      <SpaceBackground />

      <div className="relative z-10 w-full max-w-[1340px] min-h-[90vh] py-[42px] px-[30px] sm:px-[67px] 
                      bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] 
                      shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">

        <div className="dark-header-wrapper">
          <Header />
        </div>

        {basket.length > 0 ? (
          <div className="mt-[50px] max-w-[900px] w-full mx-auto flex-1 flex flex-col">
            <div className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-indigo-500/5 to-fuchsia-500/5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_42%)] opacity-80" />

              <div className="relative">
                <CartHeader clearBasket={clearBasket} />

                <div className="flex-1 flex flex-col items-center mt-4">
                  <CartList items={basket} addItem={addItem} decreaseItem={decreaseItem} removeItem={removeItem} />
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <CartBottom totalCount={totalCount} totalPrice={totalPrice} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="opacity-80 hover:opacity-100 transition-opacity">
              <EmptyCart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}