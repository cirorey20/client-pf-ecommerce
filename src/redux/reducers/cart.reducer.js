const {
  ADD_CART,
  DELETE_CART,
  DELETE_PRODUCT_CART,
  RESET_CART,
} = require("../actions/cart");

const localCart = JSON.parse(localStorage.getItem("product"));

const initialState = {
  cart: localStorage.product?.length > 0 ? localCart : [],
  total: localCart?.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0),
};

export function cartReducer(state = initialState, action) {
  if (action.type === RESET_CART) {
    return {
      cart: [],
      total: 0,
    };
  }

  function total() {
    // var total = 0;
    let stateCart = state.cart;

    //for (let i = 0; i < stateCart.length; i++) {
    //  total = (stateCart[i].price * stateCart[i].quantity) + total;
    // }

    let total = stateCart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    return total;
  } //end total

  if (action.type === RESET_CART) {
    return {
      cart: [],
      total: 0,
    };
  }

  if (action.type === ADD_CART) {
    let stateCart = state.cart;
    let currentProduct = action.payload;
    var totalF = state.total;

    console.log("Estado de cart", state.cart);

    if (stateCart.length > 0) {
      for (let i = 0; i < stateCart.length; i++) {
        if (stateCart[i].id === currentProduct.id) {
          stateCart[i].quantity++;
          localStorage.setItem("product", JSON.stringify(stateCart));
          return {
            cart: stateCart,
            total: (state.total +=
              currentProduct.price * currentProduct.quantity),
          };
        }
      }

      return {
        cart: [...stateCart, currentProduct],
        total: (state.total += currentProduct.price * currentProduct.quantity),
      };
    }
    return {
      cart: [...stateCart, currentProduct],
      total: (state.total += currentProduct.price * currentProduct.quantity),
    };
    // }
  }

  if (action.type === DELETE_CART) {
    let stateCart = state.cart;
    let currentProduct = action.payload;

    for (let i = 0; i < stateCart.length; i++) {
      if (stateCart[i].id === currentProduct) {
        if (stateCart[i].quantity > 1) {
          //decrementamos
          stateCart[i].quantity--;
          localStorage.setItem("product", JSON.stringify(stateCart));
          return {
            cart: [...stateCart],
            total: total(),
          };
        } else {
          //eliminamos ese producto del cart
          stateCart.splice(i, 1);
          localStorage.setItem("product", JSON.stringify(stateCart));
          return {
            cart: [...stateCart],
            total: total(),
          };
        }
      }
    }
  }

  if (action.type === DELETE_PRODUCT_CART) {
    let stateCart = state.cart;
    let currentProduct = action.payload;

    for (let i = 0; i < stateCart.length; i++) {
      if (stateCart[i].id === currentProduct) {
        stateCart.splice(i, 1);
        localStorage.setItem("product", JSON.stringify(stateCart));
        return {
          cart: [...stateCart],
          total: total(),
        };
      }
    }
  }

  return state;
}
