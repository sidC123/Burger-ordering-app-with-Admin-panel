import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import SuccessComponent from '../components/SuccessComponent';
import Loader from '../components/LoaderComponent';
import ErrorComponent from '../components/ErrorComponent';
import { Row, Col } from 'react-bootstrap';

const OrdersScreen = () => {

  const dispatch = useDispatch();
  const orderstate = useSelector(state => state.getUserOrdersReducer);
  const { loading, orders, error } = orderstate;
  console.log(orders);

  useEffect(() => {
    dispatch(getUserOrders())
  }, [])

  return (
    <div>
      <h2> My Orders </h2>
      <row>
        {loading && <Loader />}
        {error && <ErrorComponent error='Something went wrong' />}
        {orders && orders.map((orders) => {
          return (
            <div className='flex-container ms-auto me-auto col-md-11 shadow-lg p-2 m-2' style={{ borderRadius: 7, backgroundColor: 'rgb(51,51,51)', color: 'white' }}>
              <div className='text-start w-100 m-1'>
                <h5><strong>Burgers</strong></h5>
                <hr style={{ height: 2 }}></hr>
                {orders.orderItems.map((item) => {
                  return (
                    <div style={{fontWeight:600 }}>
                      <p>{item.name}[{item.variant}] * {item.quantity} = {item.price}</p>
                    </div>
                  )
                })}
              </div>

              <div className='text-start w-100 m-1' >
                <h5><>Shipping Address</></h5>
                <hr style={{ height: 2 }}></hr>

                <div style={{fontWeight:600 }}>
                  <p><>City: {orders.shippingAddress.city} </></p>
                  <p><>Country: {orders.shippingAddress.country} </></p>
                  <p><>Pincode: {orders.shippingAddress.pincode} </></p>
                </div>

              </div>

              <div className='text-start w-100 m-1' >
                <h5><>Order Details </></h5>
                <hr style={{ height: 2 }}></hr>

                <div style={{fontWeight:600 }} >
                  <p><>Order amount: {orders.orderAmount} </></p>
                  <p><>Ordered on: {orders.createdAt.substring(0, 10)} </></p>
                  <p><>Trasaction ID: {orders.transactionId} </></p>
                  <p><>Order ID: {orders._id} </></p>
                </div>

              </div>
            </div>
          )
        })}
      </row>
    </div>
  )
}

export default OrdersScreen;