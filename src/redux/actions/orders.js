import axios from "axios";
import { URL_API } from "../../config/config";

export const GET_ORDERS = "GET_ORDERS";
export const DETAILS_ORDER = "DETAILS_ORDER";

export function getOrders(id='') {
  console.log(id)
  return function (dispatch) {
    axios.get(`${URL_API}orders/${id}`).then(
      (json) => {
        return dispatch({
          type: GET_ORDERS,
          payload: json.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
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
            console.log(error)
        }
    }
}