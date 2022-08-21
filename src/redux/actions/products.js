import axios from "axios";
import { URL_API } from "../../config/config";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const DETAILS_PRODUCT = "DETAILS_PRODUCT";
export const GET_NAME_PRODUCTS = "GET_NAME_PRODUCTS";
export const SET_PAGINA_ACTUAL = "SET_PAGINA_ACTUAL";
export const RESET_PAGE = "RESET_PAGE";
export const PRODUCTS_BY_FILTERS = "PRODUCTS_BY_FILTERS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export function getProducts(queryFilter = "") {
  return function (dispatch) {
    axios.get(`${URL_API}products${queryFilter}`).then(
      (json) => {
        return dispatch({
          type: "GET_PRODUCTS",
          payload: json.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

export function getByFilters(searchFilters) {
  return function (dispatch) {
    axios.get(`${URL_API}products${searchFilters}`).then(
      (json) => {
        return dispatch({
          type: PRODUCTS_BY_FILTERS,
          payload: json.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

export function detailProduct(id) {
  return async function (dispatch) {
    try {
      const detailById = await axios.get(`${URL_API}products/${id}`);
      //console.log(detailById.data);
      return dispatch({
        type: "DETAILS_PRODUCT",
        payload: detailById.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createProduct(body) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      body.categorie = body.categories;
      await axios.post(`${URL_API}products/createProducts`, body, {
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

export function getNameProducts(searchName) {
  return async function (dispatch) {
    try {
      const product = await axios.get(
        `${URL_API}products?searchName=${searchName}`
      );
      // console.log(product);
      return dispatch({
        type: "GET_NAME_PRODUCTS",
        payload: product.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function setPaginaActual(numPagina) {
  return {
    type: "SET_PAGINA_ACTUAL",
    payload: numPagina,
  };
}

export function resetPage() {
  return {
    type: "RESET_PAGE",
    payload: 1,
  };
}

/*export function getProductByName(payload) {
    return async function (dispatch) {
      try {
        let productName = await axios.get(`${URL_API}products?name=${payload}`);
        console.log(productName.data)
        return dispatch({
          type: "GET_PRODUCT_BY_NAME",
          payload: productName.data,
        });
      } catch (error) {
        console.log(error);
        alert("Product not found");
      }
    };
  }*/

export function updateProduct(body) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      await axios.put(`${URL_API}products/updateProduct`, body, {
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
      await axios.post(`${URL_API}products/banend/${id}`, {
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
      await axios.post(`${URL_API}products/desbaned/${id}`, {
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
