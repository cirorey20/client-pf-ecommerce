import { combineReducers } from "redux";

import { productReducer } from "./products.reducer";
import { categoryReducer } from "./categories.reducer";
import { cartReducer } from "./cart.reducer";
import { authReducer } from "./auth.reduces";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer,
  authReducer,
});

export default rootReducer;
