import React from 'react';
import axios from 'axios';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
} from "../constants/actionTypes"

export const userRegisterAction = (user) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST })

    try {
        const response = await axios.post('http://localhost:5050/api/user/register', user)
        dispatch({ type: USER_REGISTER_SUCCESS })
        console.log(response)
    }
    catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error })
    }
}

export const userLoginAction = (user) => async dispatch => {

    dispatch({ type: USER_LOGIN_REQUEST })

    try {
        const response = await axios.post('http://localhost:5050/api/user/login', user)
        console.log(response);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = "/"
    }
    catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
}


export const userLogoutAction = (user) => dispatch => {

    localStorage.removeItem('currentUser')
    window.location.href = "/login"
}


export const getAllUsers = () => async (dispatch) => {

    dispatch({ type: "GET_ALL_USERS_REQUEST" });

    try {
        const response = await axios.get('/api/user/get-all-users');
        console.log(response);
        dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: response.data });
    }
    catch (error) {
        dispatch({ type: "GET_ALL_USERS_FAILED", payload: error });
    }
}