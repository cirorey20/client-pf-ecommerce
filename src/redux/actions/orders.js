import axios from "axios";
import { URL_API } from "../../config/config";

export const GET_ORDERS = "GET_ORDERS";
export const DETAILS_ORDER = "DETAILS_ORDER";
export const USER_ORDERS = "USER_ORDERS";
export const GET_STATES = "GET_STATES";
export const SET_STATE = "SET_STATE";

export function getOrders(querySearch = '') {
  return async function (dispatch) {
    try {
      const orders = await axios.get(`${URL_API}orders/${querySearch}`);

      return dispatch({
        type: GET_ORDERS,
        payload: orders.data,
      });

    } catch (error) {
      console.log(error);
    }
  };
}

export function detailOrder(id) {
  return async function (dispatch) {
    try {
      const orderById = await axios.get(`${URL_API}orders/${id}`);
      return dispatch({
        type: DETAILS_ORDER,
        payload: orderById.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOrdersByUser(id) {
  return async function (dispatch) {
    try {
      const ordersByUser = await axios.get(`${URL_API}orders/user/${id}`);
      return dispatch({
        type: USER_ORDERS,
        payload: ordersByUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
      console.log(error)
    }
  }
}


export function getStates() {
  return async function (dispatch) {
    try {
      const states = await axios.get(`${URL_API}orders/states`);
      return dispatch({
        type: GET_STATES,
        payload: states.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function setState(id, state) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL_API}orders/setState`, {
        id,
        state
      },
        {
          "content-type": "application/json",
          // headers: {
          //   authorization: token,
          // },
        });
    } catch (error) {
      console.log(error);
    }
  }
}
