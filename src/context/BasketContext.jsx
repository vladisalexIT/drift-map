import { createContext, useContext, useEffect, useReducer } from "react";

const BasketContext = createContext(null);

const initialState = {
    itemsBasket: JSON.parse(localStorage.getItem("basket")) || [],
};

function basketReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existingItem = state.itemsBasket.find((item) => item.id === action.payload.id);

            if (existingItem) {
                return {
                    ...state,
                    itemsBasket: state.itemsBasket.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                ...state,
                itemsBasket: [...state.itemsBasket, { ...action.payload, quantity: 1 }],
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