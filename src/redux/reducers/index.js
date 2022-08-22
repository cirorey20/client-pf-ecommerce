import { combineReducers } from "redux";

import { productReducer } from "./products.reducer";
import { categoryReducer } from "./categories.reducer";
import { cartReducer } from "./cart.reducer";
import { authReducer } from "./auth.reduces";
import { ordersReducer } from "./orders.reducer";
import { reviewReducer } from "./review.reducer";
import { wishlistReducer } from "./wishlist.reducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer,
  authReducer,
  ordersReducer,
  reviewReducer,
  wishlistReducer,
});

export default rootReducer;
