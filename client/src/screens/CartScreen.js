import React from "react"
import { Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, deleteFromCart } from "../actions/cartActions"
import AlertMessage from "../components/AlertMessage"
import CheckoutComponent from "../components/CheckoutComponent"

const CartScreen = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    const grandTotal = cartItems.reduce((x, item) => x + item.price, 0)
    const cartQty = cartItems.length

    return (
        <div className="m-2">
            <h1 className="mb-md-4 mb-sm-2"> Your Order </h1>
            {
                cartQty === 0 ? <AlertMessage /> :
                    <div className="row justify-content-center" >
                        <div className="col-md-7">
                            {
                                cartItems.map(item => {
                                    return (
                                        <div className="flex-container justify-content-around align-items-center shadow p-2 mb-2 bg-body rounded">
                                            <div className="text-start lg-md-5 ms-md-4 ms-sm-2 w-100" style={{ border: "none", height: "auto" }}>
                                                <h5 className="mb-3"> {item.name} </h5>
                                                <h5 className="mb-3"> Price: {item.quantity} * {item.prices[0][item.variant]} = {item.price}/- </h5>
                                                <h5 className="mb-3"> Quantity: <i onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.variant)) }} className="fa-regular fa-circle-minus minus-btn"></i>
                                                    <span className="ps-2 pe-2 ms-2 me-2" style={{ border: "2px black solid", borderRadius: "5px" }}>
                                                        {item.quantity}
                                                    </span>
                                                    <i onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.variant)) }} className="fa-regular fa-circle-plus plus-btn"></i>
                                                </h5>
                                                <button className="veg-non-veg-btn" style={{ color: item.category === "Non-veg" ? "red" : "green" }}>
                                                    {item.category} <span style={{ color: "coral", fontSize: "15px" }}>{item.variant}</span>
                                                </button>
                                            </div>

                                            <div className="w-100">
                                                <Image className="p-2" src={item.image} style={{ height: "210px", width: "210px" }} ></Image>
                                            </div>

                                            <div className="me-4 ms-4">
                                                <i onClick={() => { dispatch(deleteFromCart(item)) }} className="fa-solid fa-trash-can trashCan"></i>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="col-md-4 p-2 text-center">
                            <div className="shadow p-4 mb-2 bg-body rounded p-2">
                                <h2>Grand total</h2>
                                <h2> ₹ {grandTotal} /- </h2>
                                <CheckoutComponent grandTotal={grandTotal}></CheckoutComponent>
                            </div>
                        </div>

                    </div>
            }

        </div>
    )

}
export default CartScreen