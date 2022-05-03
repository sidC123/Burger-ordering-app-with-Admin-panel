import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllBurgersReducer, addBurgerReducer, getBurgerByIdReducer, updateBurgerReducer} from './reducers/burgerReducer';
import { cartReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer, getAllUsersReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer } from './reducers/orderReducer';



const rootReducer = combineReducers({
    getAllBurgersReducer: getAllBurgersReducer,
    cartReducer: cartReducer,
    userRegisterReducer: userRegisterReducer,
    userLoginReducer: userLoginReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addBurgerReducer: addBurgerReducer,
    getBurgerByIdReducer: getBurgerByIdReducer,
    updateBurgerReducer: updateBurgerReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) :  null

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    userLoginReducer:{
        currentUser: currentUser
    }
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;