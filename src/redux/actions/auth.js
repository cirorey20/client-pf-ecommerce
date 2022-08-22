import axios from "axios";
import Swal from "sweetalert2";
import { URL_API } from "../../config/config";
export const GET_USERS = "GET_USERS";
export const LOGIN = "LOGIN";
export const GET_LOGIN_USER = "GET_LOGIN_USER";
export const LOGOUT = "LOGOUT";
export const GET_NAME_USERS = "GET_NAME_USERS";
export const USERS_BY_FILTERS = "USERS_BY_FILTERS";
export const PROFILE_UPDATE = "PROFILE_UPDATE";

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
      // console.log("YO",login.data.user.rol);
      localStorage.setItem("rol", login.data.user.rol);
      return dispatch({
        type: LOGIN,
        payload: login.data,
      });
    } catch (error) {
      if (error.response.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Oppps",
          text: "Usuario baneado, comuniquese con el administrador",
        });
      } else if (error.response.status === 401) {
        Swal.fire({
          icon: "info",
          title: "Oppps",
          text: "Cuenta no autenticada, hemos enviado un link de verificacion a tu correo",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oppps",
          text: "Credenciales invalidas",
        });
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
      console.log(login.data.user.rol);
      localStorage.setItem("rol", login.data.user.rol);
      return dispatch({
        type: LOGIN,
        payload: login.data,
      });
    } catch (error) {
      if (error.response.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Oppps",
          text: "Usuario baneado, comuniquese con el administrador",
        });
      } else if (error.response.status === 401) {
        Swal.fire({
          icon: "info",
          title: "Oppps",
          text: "Cuenta no autenticada, hemos enviado un link de verificacion a tu correo",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oppps",
          text: "Credenciales invalidas",
        });
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
      if (!token) return;
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

export function sendAuthenticate(idUser = "", code = "") {
  console.log(idUser, code);
  return async function (dispatch) {
    // const token = document.cookie.split("token=")[1];
    try {
      await axios.post(`${URL_API}/users/authenticateAccount`, {
        idUser,
        code,
      });
    } catch (error) {
      if (error.response.status === 406) {
        Swal.fire({
          icon: "info",
          title: "Oppps",
          text: "El usuario se encuentra autenticado",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oppps",
          text: "Ocurrio un error al intentar autenticar",
        });
      }
    }
  };
}

export function updateUser(body) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.put(
        `${URL_API}users/updateUser/${body.id}/${body.AddressId}`,
        body,
        {
          "content-type": "application/json",
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export const profileUpdate = (newProfile) => {
  return async (dispatch) => {
    try {
      const token = document.cookie.split("token=")[1];
      console.log(token);
      const verify = await axios.put(
        `${URL_API}users/updateUser/${newProfile.id}`,
        newProfile
      );
      console.log(verify);
    } catch (error) {
      console.log(error);
    }
  };
};
