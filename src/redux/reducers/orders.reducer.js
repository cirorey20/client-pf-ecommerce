const { GET_ORDERS, DETAILS_ORDER, USER_ORDERS,GET_STATES, SET_STATE } = require("../actions/orders");

const initialState = {
  orders: [],
  orderDetail: {},
  ordersUser: [],
  states: []
};


export function ordersReducer(state = initialState, action) {
  if (action.type === GET_ORDERS) {
    return {
      ...state,
      orders: [...action.payload],
    };
  }
  if(action.type === DETAILS_ORDER) {
        return {
            ...state,
            orderDetail: action.payload
        };
    }
  if (action.type === USER_ORDERS) {
    return {
      ...state,
      ordersUser: action.payload,
    };
  }
  if(action.type === GET_STATES){
        return {
            ...state,
            states: action.payload
        };
    }
  return state;
}
