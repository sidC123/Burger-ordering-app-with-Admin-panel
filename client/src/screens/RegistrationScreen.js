import React, { useState } from 'react';
import { Form, Button, Row, Col, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAction } from '../actions/userActions';
import ErrorComponent from '../components/ErrorComponent';
import Loader from '../components/LoaderComponent';
import SuccessComponent from '../components/SuccessComponent';
import { userRegisterReducer } from '../reducers/userReducer';

const RegistrationScreen = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const registerState = useSelector(state=> state.userRegisterReducer)
  const {error, loading, success} = registerState
  const dispatch = useDispatch();

  const submitFun = () => {
    if (password !== confirmPassword) {
      alert('Password do not match')
    }
    else {
      const user = {
        name,
        email,
        contact,
        address,
        password
      }

      console.log(user)
      dispatch(userRegisterAction(user))
      
    }
  }

  return (
    <Row className='fluid-container justify-content-center mt-md-5 mt-sm-3 m-5'>
      <Col sm={6} md={8} className='justify-content-center shadow-lg p-4 mb-4 bg-body rounded '>
        
        {loading && (<Loader/>)}
        {success && (<SuccessComponent success="User registered successfully."/>)}
        {error && <ErrorComponent error="Email is used already."/>}

        <h3 className='mb-4' style={{color: "royalBlue"}}> Registration Form <i style={{color: "orangered"}} class="fa-solid fa-user-plus"></i> </h3>
        <Form>
          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextName">
            <Col sm={10}>
              <Form.Control
                value={name}
                type="text"
                className='shadow-sm'
                placeholder="Name"
                onChange={(e) => { setName(e.target.value) }}
                required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextEmail">
            <Col sm={10}>
              <Form.Control
                value={email}
                className='shadow-sm'
                type="text"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value) }}
                required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextContact">
            <Col sm={10}>
              <Form.Control
                value={contact}
                className='shadow-sm'
                type="text"
                placeholder="Contact"
                onChange={(e) => { setContact(e.target.value) }}
                required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextAddress">
            <Col sm={10}>
              <Form.Control
                value={address}
                className='shadow-sm'
                type="text"
                placeholder="Address"
                onChange={(e) => { setAddress(e.target.value) }}
                required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextPasword">
            <Col sm={10}>
              <Form.Control
                value={password}
                className='shadow-sm'
                type="text"
                placeholder="Password"
                onChange={(e) => { setPassword(e.target.value) }}
                required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextConfirmPassword">
            <Col sm={10}>
              <Form.Control
                value={confirmPassword}
                className='shadow-sm'
                type="text"
                placeholder="confirm Password"
                onChange={(e) => { setConfirmPassword(e.target.value) }}
                required />
            </Col>
          </Form.Group>

          <Button
            className='btn mb-2'
            // type="submit"
            onClick={submitFun}>
            Register
          </Button>

          <a style={{ fontSize: "15px", color: "blue", display: 'block', textDecoration: 'none' }} href='/login'> Already a user? Click here to Login </a>

        </Form>
      </Col>

    </Row>
  )
}

export default RegistrationScreen