import {createContext, useReducer} from 'react';
import {reducer} from "./reducer";

export const ShopContext = createContext(undefined, undefined);

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
    quantity: 0
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: {item: item}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }

    value.changeQuantity = (itemId, n) => {
        dispatch({type: 'CHANGE_QUANTITY', payload: {id: itemId, number: n}})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}
