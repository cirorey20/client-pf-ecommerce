import axios from "axios";
import { URL_API } from "../../config/config";

export const GET_ORDERS = "GET_ORDERS";
export const DETAILS_ORDER = "DETAILS_ORDER";
export const GET_STATES = "GET_STATES";
export const SET_STATE = "SET_STATE";

export function getOrders(querySearch = "") {
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

export function getStates() {
  return async function (dispatch) {
    try {
      const states = await axios.get(`${URL_API}orders/states`);
      return dispatch({
        type: GET_STATES,
        payload: states.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setState(id, state, email, name, last_name) {
  return async function (dispatch) {
    try {
      console.log(email);
      await axios.post(
        `${URL_API}orders/setState`,
        {
          id,
          state,
          email,
          name,
          last_name,
        },
        {
          "content-type": "application/json",
          // headers: {
          //   authorization: token,
          // },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}
