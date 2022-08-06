import axios from 'axios';
import { URL_API } from '../../config/config'

export const GET_PRODUCTS = "GET_PRODUCTS";
export const DETAILS_PRODUCT = "DETAILS_PRODUCT";
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";


export function getProducts(){
    return function(dispatch){
     axios.get(`${URL_API}products/`)
         .then((json)=>{
             return dispatch({
                 type: GET_PRODUCTS,
                 payload: json.data
             })
         }, (error)=>{
             console.log(error)
         })

    }
}

export function detailProduct(id) {
    return async function (dispatch) {
        try {
            const detailById = await axios.get(`${URL_API}products/${id}`);
            console.log(detailById.data)
            return dispatch({
                type: DETAILS_PRODUCT,
                payload: detailById.data,
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function createProduct(body){
    return async function(dispatch){
        try{
            body.categorie = body.categories;
            await axios.post(`${URL_API}products/createProducts`,body,{
                'content-type': 'text/json'
            });
        } catch(error){
            console.log(error);
        }
    }
}

export function getProductByName(payload) {
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
  }
