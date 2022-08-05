import { combineReducers } from 'redux';

import {productReducer} from './products.reducer';
import {categoryReducer} from './categories.reducer';

const rootReducer = combineReducers({
  productReducer,
  categoryReducer
})

export default rootReducer