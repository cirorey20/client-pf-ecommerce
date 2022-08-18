const {
    GET_ORDERS, DETAILS_ORDER

} = require('../actions/orders');

const initialState = {
    orders: [],
    orderDetail: {},
}

export function ordersReducer(state = initialState, action) {

    if (action.type === GET_ORDERS) {
        return {
            ...state,
            orders: action.payload
        };
    }
    if(action.type === DETAILS_ORDER) {
        return {
            ...state,
            orderDetail: action.payload
        };
    }

    return state
}