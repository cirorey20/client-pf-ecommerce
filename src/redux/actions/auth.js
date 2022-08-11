import axios from "axios";
export const GET_USERS = "GET_USERS";
export const LOGIN = "LOGIN";

export function createUser(body) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.post(`http://localhost:3001/api/v1/users/createUsers`, body, {
        "content-type": "application/json",
        headers: {
          authorization: token,
        },
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
      const token = document.cookie.split("token=")[1];
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
