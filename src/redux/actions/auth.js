import axios from "axios";
import { URL_API } from "../../config/config";
export const GET_USERS = "GET_USERS";
export const LOGIN = "LOGIN";
export const GET_LOGIN_USER = "GET_LOGIN_USER";
export const LOGOUT = "LOGOUT";
export const GET_NAME_USERS = "GET_NAME_USERS";
export const USERS_BY_FILTERS = "USERS_BY_FILTERS";

export function createUser(body) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.post(`${URL_API}users/createUsers`, body, {
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

export function createAdmin(body) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.post(`${URL_API}users/createAdmin`, body, {
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
export function promoteUser(id) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.post(`${URL_API}users/promote/${id}`, {
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
export function banendUser(id) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.post(`${URL_API}users/banend/${id}`, {
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
export function desBanendUser(id) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.post(`${URL_API}users/desbaned/${id}`, {
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
      const login = await axios.post(`${URL_API}users/login`, body, {
        "content-type": "application/json",
      });

      document.cookie = `token=${login.data.tokenSession}; max-age=${
        60 * 30
      }; path=/; samesite=strict`;
      console.log(login.data);
      return dispatch({
        type: LOGIN,
        payload: login.data,
      });
    } catch (error) {
      if (error.response.status === 403) {
        alert("Estas baneado");
      } else {
        alert("No exite usuario");
      }
    }
  };
}

export function loginUserGoogle(body) {
  return async (dispatch) => {
    try {
      const login = await axios.post(`${URL_API}users/loginGoogle`, body, {
        "content-type": "application/json",
      });

      document.cookie = `token=${login.data.tokenSession}; max-age=${
        60 * 30
      }; path=/; samesite=strict`;
      console.log(login.data);
      return dispatch({
        type: LOGIN,
        payload: login.data,
      });
    } catch (error) {
      if (error.response.status === 403) {
        alert("Estas baneado");
      }
    }
  };
}

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const token = document.cookie.split("token=")[1];
      const allUsers = await axios.get(`${URL_API}users`, {
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
      const token = document.cookie.split("token=")[1];
      //console.log("Este es el token", token);
      const verify = await axios.get(`${URL_API}users/getUserLogin`, {
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

export function getNameUser(searchName) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      console.log(searchName);
      const product = await axios.get(
        `${URL_API}users?searchName=${searchName}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(product);
      return dispatch({
        type: "GET_NAME_USERS",
        payload: product.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getByFiltersUsers(name) {
  return function (dispatch) {
    const token = document.cookie.split("token=")[1];
    axios
      .get(`${URL_API}users?name=${name}`, {
        headers: {
          authorization: token,
        },
      })
      .then(
        (json) => {
          return dispatch({
            type: USERS_BY_FILTERS,
            payload: json.data,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };
}
