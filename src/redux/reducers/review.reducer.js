const {
    GET_REVIEWS,
    // DETAILS_PRODUCT,
    // GET_NAME_PRODUCTS,
    // GET_PRODUCT_DETAIL,
    // SET_PAGINA_ACTUAL,
    // RESET_PAGE,
    // GET_PRODUCT_BY_NAME,
    // PRODUCTS_BY_FILTERS,

} = require('../actions/review');

const initialState = {
    reviews: [],
    // copyReviews: [],
    // productDetail: [],
    // paginaActual: 1
}

export function reviewReducer(state = initialState, action) {
    
    if (action.type === GET_REVIEWS) {
        var notas = action.payload
        return {
            ...state,
            reviews: action.payload,
    //         copyReviews: action.payload
        }
    }
     return state
}