export const ADD_CART = "ADD_CART";

export function addProductToCart(product){
    return function(dispatch){
        return dispatch({
            type: ADD_CART,
            payload: product
        })
    }
 }