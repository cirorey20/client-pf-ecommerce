const {
    GET_PRODUCTS,
    DETAILS_PRODUCT,
    GET_NAME_PRODUCTS,
    GET_PRODUCT_DETAIL,
    SET_PAGINA_ACTUAL,
    RESET_PAGE,
    GET_PRODUCT_BY_NAME,
    PRODUCTS_BY_FILTERS,

} = require('../actions/products');

const initialState = {
    products: [],
    copyProducts: [],
    productDetail: [],
    currentPage: 1
}

export function productReducer(state = initialState, action) {

    if (action.type === GET_PRODUCTS) {
        return {
            ...state,
            products: action.payload,
            copyProducts: action.payload
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


     if ( action.type === GET_NAME_PRODUCTS)
    return{
        ...state,
        products: action.payload
    }

    if( action.type === GET_PRODUCT_DETAIL)
    return{
        ...state,
        products:action.payload
    }

    if( action.type === SET_PAGINA_ACTUAL)
    return{
        ...state,
        currentPage: action.payload
    }

    if( action.type === RESET_PAGE)
    return{
        ...state,
        currentPage: action.payload
    }     

    if ( action.type === GET_PRODUCT_BY_NAME ) {
        return {
            ...state,
            products: action.payload
        }

    }

    return state
}