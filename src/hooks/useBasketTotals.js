import { useMemo } from "react";

export default function useBasketTotals(basket) {
  return useMemo(() => {
    return {
      totalPrice: basket.reduce((sum, item) => sum + item.price * item.quantity, 0),
      totalCount: basket.reduce((sum, item) => sum + item.quantity, 0),
    };
  }, [basket]);
}