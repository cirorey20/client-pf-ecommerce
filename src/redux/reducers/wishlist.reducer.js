const { TOGGLE_WISHLIST } = require("../actions/wishlist");

const favorites = JSON.parse(localStorage.getItem("favorites"));
const initialState = localStorage.favorites?.length > 0 ? favorites : [];

export function wishlistReducer(state = initialState, action) {
  const { type, payload } = action;
  const isFavorite = state.some((fav) => fav?.id === payload?.id);

  if (type === TOGGLE_WISHLIST) {
    if (isFavorite) {
      const newFavorite = state.filter((fav) => fav.id !== payload.id);
      localStorage.setItem("favorites", JSON.stringify(newFavorite));
      return newFavorite;
    } else {
      localStorage.setItem("favorites", JSON.stringify([...state, payload]));
      return [...state, payload];
    }
  }
  return state;
}
