import { GET_BURGERS_REQUEST, GET_BURGERS_FAILED, GET_BURGERS_SUCCESS, ADD_BURGER_REQUEST, ADD_BURGER_SUCCESS, ADD_BURGER_FAILED, GET_BURGERS_BY_ID_REQUEST, GET_BURGERS_BY_ID_SUCCESS, GET_BURGERS_BY_ID_FAILED, UPDATE_BURGER_SUCCESS, UPDATE_BURGER_REQUEST, UPDATE_BURGER_FAILED } from "../constants/actionTypes";

export const getAllBurgersReducer = (state = { burgers: [] }, action) => {

    switch (action.type) {

        case GET_BURGERS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case GET_BURGERS_SUCCESS:
            return {
                loading: false,
                burgers: action.payload
            }
        case GET_BURGERS_FAILED:
            return {
                error: action.payload,
                loading: false
            }
        default: return state
    }
}


export const getBurgerByIdReducer = (state = {  }, action) => {

    switch (action.type) {

        case GET_BURGERS_BY_ID_REQUEST:
            return {
                loading: true,
                ...state
            }
        case GET_BURGERS_BY_ID_SUCCESS:
            return {
                loading: false,
                burger: action.payload
            }
        case GET_BURGERS_BY_ID_FAILED:
            return {
                error: action.payload,
                loading: false
            }
        default: return state
    }
}


export const addBurgerReducer = (state = {  }, action) => {

    switch (action.type) {

        case ADD_BURGER_REQUEST:
            return {
                loading: true,
                ...state
            }
        case ADD_BURGER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ADD_BURGER_FAILED:
            return {
                error: action.payload,
                loading: false
            }
        default: return state
    }
}


export const updateBurgerReducer = (state = {  }, action) => {

    switch (action.type) {

        case UPDATE_BURGER_REQUEST:
            return {
                updateLoading: true,
                ...state
            }
        case UPDATE_BURGER_SUCCESS:
            return {
                updateLoading: false,
                updateSuccess: true
            }
        case UPDATE_BURGER_FAILED:
            return {
                updateError: action.payload,
                updateLoading: false
            }
        default: return state
    }
}