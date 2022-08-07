import { combineReducers } from 'redux';

import {productReducer} from './products.reducer';
import {categoryReducer} from './categories.reducer';
import {cartReducer} from './cart.reducer';

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer
})

export default rootReducer