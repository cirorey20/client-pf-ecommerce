const { GET_USERS, LOGIN } = require("../actions/auth");

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

  return state;
}
