import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
} from "../constants/actionTypes"

export const userRegisterReducer = (state = {}, action) => {

    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case USER_REGISTER_FAILED:
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }

}


export const userLoginReducer = (state = {}, action) => {

    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                success: true,
                currentUser: action.payload
            }

        case USER_LOGIN_FAILED:
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}


export const getAllUsersReducer = (state = { users: [] }, action) => {

    switch (action.type) {

        case "GET_ALL_USERS_REQUEST":
            return {
                loading: true,
                ...state
            }
        case "GET_ALL_USERS_SUCCESS":
            return {
                loading: false,
                users: action.payload
            }
        case "GET_ALL_USERS_FAILED":
            return {
                error: action.payload,
                loading: false
            }
        default: return state
    }
}