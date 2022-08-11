import axios from "axios";
export const GET_USERS = "GET_USERS";
export const LOGIN = "LOGIN";
export const GET_LOGIN_USER = "GET_LOGIN_USER";
export const LOGOUT = "LOGOUT";

export function createUser(body) {
  return async function (dispatch) {
    try {
      await axios.post(`http://localhost:3001/api/v1/users/createUsers`, body, {
        "content-type": "application/json",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginUser(body) {
  return async (dispatch) => {
    try {
      const login = await axios.post(
        `http://localhost:3001/api/v1/users/login`,
        body,
        {
          "content-type": "application/json",
        }
      );

      document.cookie = `token=${login.data.tokenSession}; max-age=${
        60 * 30
      }; path=/; samesite=strict`;
      console.log(login.data);
      return dispatch({
        type: LOGIN,
        payload: login.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginUserGoogle(body) {
  return async (dispatch) => {
    try {
      const login = await axios.post(
        `http://localhost:3001/api/v1/users/loginGoogle`,
        body,
        {
          "content-type": "application/json",
        }
      );

      document.cookie = `token=${login.data.tokenSession}; max-age=${
        60 * 30
      }; path=/; samesite=strict`;
      console.log(login.data);
      return dispatch({
        type: LOGIN,
        payload: login.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const token = document.cookie.replace("token=", "");
      const allUsers = await axios.get(`http://localhost:3001/api/v1/users`, {
        headers: {
          authorization: token,
        },
      });
      console.log(allUsers);
      return dispatch({
        type: GET_USERS,
        payload: allUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getLoginUser = () => {
  return async (dispatch) => {
    try {
      const token = document.cookie.split('token=')[1]
      console.log('Este es el token', token)
      const verify = await axios.get(`http://localhost:3001/api/v1/users/getUserLogin`,{
        headers: {
          authorization: token,
        },
      });

      return dispatch({
        type: GET_LOGIN_USER,
        payload: verify.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};



export const logout = () => {
  return async (dispatch) => {
    try {
      document.cookie = `token=; max-age=0; path=/; samesite=strict`;
      return dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};