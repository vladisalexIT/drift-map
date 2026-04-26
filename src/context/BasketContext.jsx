import { createContext, useContext, useEffect, useReducer } from "react";

const BasketContext = createContext(null)
const initialState = {
    itemsBasket: JSON.parse(localStorage.getItem('basket')) || [],
}

function basketReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const exist = state.itemsBasket.some((item) => item.id === action.payload.id)

            if (exist) {
                return state
            }

            return {
                ...state,
                itemsBasket: [...state.itemsBasket, action.payload]
            }
        }

        case 'CLEAR_BASKET': {
            return {
                ...state,
                itemsBasket: []
            }
        }

        default:
            return state
    }
}

export function BasketProvider({ children }) {
    const [state, dispatch] = useReducer(basketReducer, initialState)
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(state.itemsBasket))
    }, [state.itemsBasket])

    function addItem(item) {
        console.log("Добавляем товар:", item);
        dispatch({ type: 'ADD_ITEM', payload: item })
    }

    function clearBasket() {
        dispatch({ type: 'CLEAR_BASKET' })
    }

    return (
        <BasketContext.Provider value={{ basket: state.itemsBasket, addItem, clearBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export function useBasket() {
    const context = useContext(BasketContext)

    if (!context) {
        throw new Error('useBasket must be used within BasketProvider')
    }

    return context
}