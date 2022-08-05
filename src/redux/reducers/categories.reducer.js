const {
    GET_CATEGORIES,
} = require('../actions/categories');

const initialState = {
    categories: [],
}

export function categoryReducer(state = initialState, action) {

    if (action.type === GET_CATEGORIES) {
        return {
            ...state,
            categories: action.payload
        }
    }

    return state
}