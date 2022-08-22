export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";

export const addFavorites = (favoriteProduct) => {
  return function (dispatch) {
    dispatch({
      type: "TOGGLE_WISHLIST",
      payload: favoriteProduct,
    });
  };
};
