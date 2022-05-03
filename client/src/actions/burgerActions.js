import axios from "axios";
import { GET_BURGERS_REQUEST, GET_BURGERS_FAILED, GET_BURGERS_SUCCESS, ADD_BURGER_REQUEST, ADD_BURGER_SUCCESS, ADD_BURGER_FAILED, GET_BURGERS_BY_ID_REQUEST, GET_BURGERS_BY_ID_SUCCESS, GET_BURGERS_BY_ID_FAILED, UPDATE_BURGER_REQUEST, UPDATE_BURGER_SUCCESS, UPDATE_BURGER_FAILED } from "../constants/actionTypes";

export const getAllBurgers = () => async dispatch => {

    dispatch({ type: GET_BURGERS_REQUEST });

    try {
        const response = await axios.get('/api/burgers/get-all-burgers');
        console.log(response);
        dispatch({ type: GET_BURGERS_SUCCESS, payload: response.data });
    }
    catch (error) {
        dispatch({ type: GET_BURGERS_FAILED, payload: error });
    }
}


export const getBurgerById = (burgerId) => async dispatch => {

    dispatch({ type: GET_BURGERS_BY_ID_REQUEST });

    try {
        const response = await axios.post('/api/burgers/get-burger-by-id', { burgerId });
        console.log(response);
        dispatch({ type: GET_BURGERS_BY_ID_SUCCESS, payload: response.data });
    }
    catch (error) {
        dispatch({ type: GET_BURGERS_BY_ID_FAILED, payload: error });
    }
}


export const filterBurgers = (search, category) => async dispatch => {

    var filter;
    dispatch({ type: GET_BURGERS_REQUEST })

    try {
        const response = await axios.get('/api/burgers/get-all-burgers')
        filter = response.data.filter((burger) => burger.name.toLowerCase().includes(search))

        if (category != "all") {
            filter = response.data.filter((burger) => burger.category.toLowerCase() == category)
        }

        dispatch({ type: GET_BURGERS_SUCCESS, payload: filter })
    }
    catch (error) {
        dispatch({ type: GET_BURGERS_FAILED, payload: error })
    }
}


export const addBurger = (burger) => async dispatch => {

    dispatch({ type: ADD_BURGER_REQUEST })

    try {
        const response = await axios.post("/api/burgers/add-burger", { burger });

        dispatch({ type: ADD_BURGER_SUCCESS });
    } catch (error) {
        dispatch({ type: ADD_BURGER_FAILED, payload: error })
    }
}


export const updateBurger = (updatedBurger) => async dispatch => {

    dispatch({ type: UPDATE_BURGER_REQUEST })

    try {
        const response = await axios.post("/api/burgers/update-burger", { updatedBurger });

        dispatch({ type: UPDATE_BURGER_SUCCESS });
    } catch (error) {
        dispatch({ type: UPDATE_BURGER_FAILED, payload: error })
    }
}


export const deleteBurger = (burgerId) => async dispatch => {

    console.log(burgerId);

    try {
        const response = await axios.post("/api/burgers/delete-burger", { burgerId });
        alert('Burger data deleted successfully.')
        console.log(response);
        window.location.reload()

    } catch (error) {
        alert('something went wrong')
        console.log(error);
    }
}