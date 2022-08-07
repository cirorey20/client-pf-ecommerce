import axios from 'axios';
import {URL_API} from '../../config/config'

export const GET_CATEGORIES = "GET_CATEGORIES";


export function getCategories(){
    return function(dispatch){
     axios.get(`${URL_API}categories`)
         .then((json)=>{
             return dispatch({
                 type: GET_CATEGORIES,
                 payload: json.data
             })
         }, (error)=>{
             console.log(error)
         })
    }
 }