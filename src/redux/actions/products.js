import axios from 'axios';
import {URL_API} from '../../config/config'

export const GET_PRODUCTS = "GET_PRODUCTS";

export function getProducts(){
    return function(dispatch){
     axios.get(`${URL_API}products`)
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