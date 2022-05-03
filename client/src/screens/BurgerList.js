import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import ErrorComponent from '../components/ErrorComponent';
import Loader from '../components/LoaderComponent';
import SuccessComponent from '../components/SuccessComponent';
import { getAllBurgers } from '../actions/burgerActions';
import { deleteBurger } from '../actions/burgerActions';


const BurgerList = () => {

  const dispatch = useDispatch();
  const burgerState = useSelector(state => state.getAllBurgersReducer);
  const { error, loading, burgers } = burgerState;

  useEffect(() => {
    dispatch(getAllBurgers());
  }, [dispatch])

  return (
    <>
      {loading && (<Loader />)}
      {error && (<ErrorComponent error="something went wrong" />)}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr style={{ color: "tomato", fontSize: 18 }}>
            <th>Burger Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {burgers.map((burger) => {
            console.log(burger._id);
            return (
              <tr>
                <td style={{ verticalAlign: "middle" }}> {burger.name} </td>

                <td style={{ verticalAlign: "middle" }}>
                  <p style={{ margin: 1 }}>Small: ₹ {burger.prices[0]['small']} /-</p>
                  <p style={{ margin: 1 }}>Large: ₹ {burger.prices[0]['large']} /-</p>
                </td>

                <td style={{ color: burger.category === "Non-veg" ? "tomato" : "mediumseagreen", verticalAlign: "middle" }}>  {burger.category} </td>

                <td style={{ verticalAlign: "middle", justifyContent: "center" }}>
                  <button className='admin-delete-btn m-1' onClick={()=>{dispatch(deleteBurger(burger._id))}}>
                    <i className="fa-solid fa-trash-can trashCan"></i>
                  </button>

                  <button className='admin-delete-btn m-1'>
                    <NavLink to={`/admin/update-burger/${burger._id}`} ><i style={{ color: "black" }} class="fa-solid fa-pen-to-square"></i></NavLink>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
        
      </Table>

    </>
  )
}

export default BurgerList