export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const RESET_CART = "RESET_CART";

export function addProductToCart(product) {
  return function (dispatch) {
    return dispatch({
      type: ADD_CART,
      payload: product,
    });
  };
}

export function deleteProductToCart(idProduct) {
  return function (dispatch) {
    return dispatch({
      type: DELETE_CART,
      payload: idProduct,
    });
  };
}
export function deleteProduct(idProduct) {
  return function (dispatch) {
    return dispatch({
      type: DELETE_PRODUCT_CART,
      payload: idProduct,
    });
  };
}

export function resetCart() {
  return function (dispatch) {
    return dispatch({
      type: RESET_CART,
    });
  };
}
