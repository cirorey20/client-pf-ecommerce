import axios from 'axios';
import {URL_API} from '../../config/config'

export const GET_PRODUCTS = "GET_PRODUCTS";
export const DETAILS_PRODUCT = "DETAILS_PRODUCT";

export function getProducts(searchQuery){
    return function(dispatch){
     axios.get(`${URL_API}products/${searchQuery}`)
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

 