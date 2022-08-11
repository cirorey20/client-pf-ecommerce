import axios from "axios";
import { URL_API } from "../../config/config";

export const GET_CATEGORIES = "GET_CATEGORIES";

export function getCategories() {
  return function (dispatch) {
    axios.get(`${URL_API}categories`).then(
      (json) => {
        return dispatch({
          type: GET_CATEGORIES,
          payload: json.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

export function createCategory(body) {
  return async function (dispatch) {
    try {
      const token = document.cookie.split("token=")[1];
      body.categorie = body.categories;
      await axios.post(
        `http://localhost:3001/api/v1/categories/createCategories`,
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

//http://localhost:3001/api/v1/categories/createCategories
