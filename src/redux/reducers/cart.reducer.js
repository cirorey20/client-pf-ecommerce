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

        console.log("Estado de cart", state.cart)

        if ( stateCart.length > 0 ) {
            for( let i = 0; i < stateCart.length; i++ ) {
                if( stateCart[i].id === currentProduct.id ) {
                    stateCart[i].quantity++;
                    return {cart: stateCart}
                }
            }
            return {
                cart: [...stateCart, currentProduct]
    
            }
        } else {

            return {
                cart: [...stateCart, currentProduct]
    
            }
        }

    }

    return state
}