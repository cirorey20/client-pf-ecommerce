import { combineReducers } from 'redux';

import {productReducer} from './products.reducer';

const rootReducer = combineReducers({
  productReducer,
})

export default rootReducer