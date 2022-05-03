import axios from 'axios';
import { PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAILED, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS, GET_USER_ORDER_FAILED, GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, GET_ALL_ORDERS_FAILED } from '../constants/actionTypes';

export const placeOrderAction = (token, grandTotal) => async (dispatch, getstate) => {
    dispatch({ type: PLACE_ORDER_REQUEST })

    const currentUser = getstate().userLoginReducer.currentUser;
    const cartItems = getstate().cartReducer.cartItems;
    console.log(currentUser);

    try {
        const response = await axios.post('/api/orders/placeOrder', { token, grandTotal, currentUser, cartItems })

        dispatch({ type: PLACE_ORDER_SUCCESS })
        console.log(response);

    } catch (error) {
        dispatch({ type: PLACE_ORDER_FAILED })

        console.log(error);
    }
    
}

export const getUserOrders = () => async (dispatch, getstate) => {

    const currentUser = getstate().userLoginReducer.currentUser
    dispatch({ type: GET_USER_ORDER_REQUEST });

    try {
        const response = await axios.post('/api/orders/get-user-orders', {userId : currentUser._id});
        console.log(response);
        dispatch({ type: GET_USER_ORDER_SUCCESS, payload: response.data });
    }
    catch (error) {
        dispatch({ type: GET_USER_ORDER_FAILED, payload: error });
    }
}


export const getAllOrders = () => async (dispatch) => {

    // const currentUser = getstate().userLoginReducer.currentUser
    dispatch({ type: GET_ALL_ORDERS_REQUEST });

    try {
        const response = await axios.get('/api/orders/get-all-orders');
        console.log(response);
        dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: response.data });
    }
    catch (error) {
        dispatch({ type: GET_ALL_ORDERS_FAILED, payload: error });
    }
}

export const deliverOrder = (orderId) => async (dispatch) => {

    try {
        const response = await axios.post('/api/orders/deliver-order', {orderId});
        console.log(response);
        alert('order delivered')
        const orders = await axios.get('/api/orders/get-all-orders')

        dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: orders.data });
    }
    catch (error) {
        console.log(error);
    }
}