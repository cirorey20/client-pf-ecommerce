const {
    GET_PRODUCTS
} = require('../actions/products');

const initialState = {
    products: [],
}

export function productReducer(state = initialState, action) {

    if (action.type === GET_PRODUCTS) {
        return {
            ...state,
            products: action.payload
        }
    }

    return state
}