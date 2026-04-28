import { createContext, useContext, useEffect, useReducer } from "react";

const BasketContext = createContext(null);

const initialState = {
    itemsBasket: JSON.parse(localStorage.getItem("basket")) || [],
};

function basketReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            let itemAdded = false;

            const updatedItems = state.itemsBasket.map((item) => {
                if (item.id === action.payload.id) {
                    itemAdded = true;
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            if (itemAdded) {
                return { ...state, itemsBasket: updatedItems };
            }

            return {
                ...state,
                itemsBasket: [...updatedItems, { ...action.payload, quantity: 1 }],
            };
        }

        case "DECREASE_ITEM": {
            return {
                ...state,
                itemsBasket: state.itemsBasket
                    .map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter((item) => item.quantity > 0),
            };
        }

        case "CLEAR_BASKET": {
            return {
                ...state,
                itemsBasket: [],
            };
        }

        default:
            return state;
    }
}

export function BasketProvider({ children }) {
    const [state, dispatch] = useReducer(basketReducer, initialState);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(state.itemsBasket));
    }, [state.itemsBasket]);

    function addItem(item) {
        dispatch({ type: "ADD_ITEM", payload: item });
    }

    function decreaseItem(id) {
        dispatch({ type: "DECREASE_ITEM", payload: id });
    }

    function clearBasket() {
        dispatch({ type: "CLEAR_BASKET" });
    }

    return (
        <BasketContext.Provider
            value={{
                basket: state.itemsBasket,
                addItem,
                clearBasket,
                decreaseItem,
            }}
        >
            {children}
        </BasketContext.Provider>
    );
}

export function useBasket() {
    const context = useContext(BasketContext);

    if (!context) {
        throw new Error("useBasket must be used within BasketProvider");
    }

    return context;
}