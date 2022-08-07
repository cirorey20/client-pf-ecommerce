const {
    GET_PRODUCTS,
    DETAILS_PRODUCT,
    GET_NAME_PRODUCTS
} = require('../actions/products');

const initialState = {
    products: [],
    copyProducts: [],
    productDetail: [],
}

export function productReducer(state = initialState, action) {

    if (action.type === GET_PRODUCTS) {
        return {
            ...state,
            products: action.payload,
            copyProducts: action.payload
        }
    }

    if ( action.type === DETAILS_PRODUCT ) {
        return {
            ...state,
            productDetail: action.payload
        }
    }

     if ( action.type === GET_NAME_PRODUCTS)
    return{
        ...state,
        products: action.payload
    }

    return state
}