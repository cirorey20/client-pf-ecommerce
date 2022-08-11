const { GET_USERS, LOGIN, GET_LOGIN_USER, LOGOUT } = require("../actions/auth");

const initialState = {
  users: [],
  userLogin: {},
};

export function authReducer(state = initialState, action) {
  if (action.type === GET_USERS) {
    return {
      ...state,
      users: action.payload,
    };
  }
  if (action.type === LOGIN) {
    return {
      ...state,
      userLogin: action.payload,
    };
  }
  if(action.type === GET_LOGIN_USER) {
    return {
      ...state,
      userLogin: action.payload
    }
  }
  if(action.type === LOGOUT){
    return {
      ...state,
      userLogin: {}
    }
  }

  return state;
}
