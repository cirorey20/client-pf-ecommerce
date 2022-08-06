const {
    GET_PRODUCTS,
    DETAILS_PRODUCT,
    GET_PRODUCT_BY_NAME,
    PRODUCTS_BY_FILTERS,
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

    if (action.type === PRODUCTS_BY_FILTERS) {
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

    if ( action.type === GET_PRODUCT_BY_NAME ) {
        return {
            ...state,
            products: action.payload
        }
    }

    return state
}