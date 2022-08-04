const {
    GET_PRODUCTS,
    DETAILS_PRODUCT
} = require('../actions/products');

const initialState = {
    products: [],
    productDetail: [],
}

export function productReducer(state = initialState, action) {

    if (action.type === GET_PRODUCTS) {
        return {
            ...state,
            products: action.payload
        }
    }

    if ( action.type === DETAILS_PRODUCT ) {
        return {
            ...state,
            productDetail: action.payload
        }
    }

    return state
}