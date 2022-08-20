const {
  GET_USERS,
  LOGIN,
  GET_LOGIN_USER,
  LOGOUT,
  GET_NAME_USERS,
  USERS_BY_FILTERS,
  PROFILE_UPDATE,
} = require("../actions/auth");

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
  if (action.type === GET_LOGIN_USER) {
    return {
      ...state,
      userLogin: action.payload,
    };
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      userLogin: {},
    };
  }
  if (action.type === GET_NAME_USERS)
    return {
      ...state,
      users: action.payload,
    };
  if (action.type === USERS_BY_FILTERS)
    return {
      ...state,
      users: action.payload,
    };

  return state;
}
