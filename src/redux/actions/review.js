import axios from "axios";
import { URL_API } from "../../config/config";

export const GET_REVIEWS = "GET_REVIEWS";
// export const DETAILS_PRODUCT = "DETAILS_PRODUCT";
// export const GET_NAME_PRODUCTS = "GET_NAME_PRODUCTS";
// export const SET_PAGINA_ACTUAL = "SET_PAGINA_ACTUAL";
// export const RESET_PAGE = "RESET_PAGE";
// export const PRODUCTS_BY_FILTERS = "PRODUCTS_BY_FILTERS";
// export const CREATE_PRODUCT = "CREATE_PRODUCT";
// export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
// export const UPDATE_PRODUCT = "UPDATE_PRODUCT";


export function getReview(queryFilter = "") {
  return function (dispatch) {
    axios.get(`${URL_API}reviews${queryFilter}`).then(
      (json) => {
        console.log(json)
        return dispatch({
          type: "GET_REVIEWS",
          payload: json.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
