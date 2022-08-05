const {
    ADD_CART
} = require('../actions/cart');

const initialState = {
    cart: [],
}

export function cartReducer(state = initialState, action) {

    if (action.type === ADD_CART) {
        // console.log("action", state.cart);
        let stateCart = state.cart;
        let currentProduct = action.payload

        return {
            cart: [...stateCart, currentProduct]

        }
    }

    return state
}