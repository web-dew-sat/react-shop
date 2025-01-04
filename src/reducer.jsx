export const reducer = (state = {}, {type = '', payload = {}},) => {

    switch (type) {
        case 'SET_GOODS' :
            return {
                ...state,
                goods: payload || [],
                loading: false
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            };

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            }

        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }

        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.item.id);

            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                    ...payload.item,
                    quantity: 1,
                }

                newOrder = [...state.order, newItem]

            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                    } else {
                        return orderItem;
                    }
                })

            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.item.name
            }
        }

        case 'CHANGE_QUANTITY': {
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = Number(el.quantity + payload.number)

                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? Number(newQuantity) : 0,
                        }
                    } else {
                        return el
                    }
                })
            }
        }

        default :
            return state;
    }

}
