import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBurgers } from '../actions/burgerActions';
import { getAllOrders } from '../actions/orderActions';
import ErrorComponent from '../components/ErrorComponent';
import Loader from '../components/LoaderComponent';
import { deliverOrder } from '../actions/orderActions';

export default function OrdersList() {

  const getAllOrdersState = useSelector(state => state.getAllOrdersReducer);
  const { loading, error, orders } = getAllOrdersState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])

  return (
    <>
      {loading && (<Loader />)}
      {error && (<ErrorComponent error="something went wrong" />)}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr style={{ color: "tomato", fontSize: 18 }}>
            <th>Order ID</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map((order) => {
            return (
              <tr>
                <td style={{ verticalAlign: "middle" }}> {order._id} </td>

                <td style={{ verticalAlign: "middle" }}> {order.email} </td>

                <td style={{ verticalAlign: "middle" }}> {order.userId} </td>

                <td style={{ verticalAlign: "middle" }}> {order.orderAmount} </td>

                <td style={{ verticalAlign: "middle" }}> {order.createdAt.substring(0, 10)} </td>

                <td style={{ verticalAlign: "middle" }}>
                  {order.isDelivered ?
                    (<h5>Delivered</h5>) :
                    (<Button className="btn"
                      onClick={() => dispatch(deliverOrder(order._id))}>
                      Deliver
                    </Button>)}
                </td>
              </tr>
            )
          })}
        </tbody>

      </Table>

    </>
  )
}
