import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../actions/userActions';
import ErrorComponent from '../components/ErrorComponent';
import Loader from '../components/LoaderComponent';

const UserList = () => {

  const getAllUsersState = useSelector(state => state.getAllUsersReducer);
  const { loading, error, users } = getAllUsersState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <>
      {loading && (<Loader />)}
      {error && (<ErrorComponent error="something went wrong" />)}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr style={{ color: "tomato", fontSize: 18 }}>
            <th>User ID</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Contact</th>
            <th>Authority</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => {
            console.log(user);
            return (
              <tr>
                <td style={{ verticalAlign: "middle" }}> {user._id} </td>

                <td style={{ verticalAlign: "middle" }}> {user.name} </td>

                <td style={{ verticalAlign: "middle" }}> {user.address} </td>

                <td style={{ verticalAlign: "middle" }}> {user.contact} </td>

                <td style={{ verticalAlign: "middle" }}>
                  {user.isAdmin ?
                    (<h5>Admin</h5>) :
                    (<h5>User</h5>)}
                </td>

              </tr>
            )
          })}
        </tbody>
      </Table>

    </>
  )
}

export default UserList;