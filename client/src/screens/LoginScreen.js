import React from "react";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../actions/userActions";
import Loader from "../components/LoaderComponent";
import ErrorComponent from "../components/ErrorComponent";

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginState = useSelector(state => state.userLoginReducer);
    const { error, loading } = loginState;

    useEffect(() => {

        if (localStorage.getItem("currentUser")) {
            window.location.href = "/"
        }

    }, [])


    function login() {
        const user = { email, password }
        dispatch(userLoginAction(user))
    }

    return (
        <div>
            <div className="row justify-content-center  mt-5">

                <div className="col-md-5 mt-5 shadow p-2 mb-5 bg-white rounded bg-dark">

                    {loading && (<Loader/>)}
                    {error && (<ErrorComponent error="Invalid Credentials" />)}

                    <h2 className="m-4">LOGIN</h2>

                    <Form className="text-center">
                        <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextEmail">
                            <Col sm="12">
                                <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm="12">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                            </Col>
                        </Form.Group>

                        <Button className="btn mb-2" onClick={login}>Login</Button>

                            <a style={{ fontSize: "15px", color: "blue", display: 'block', textDecoration: 'none' }} href='/register'> Click Here To Register </a>

                    </Form>
                </div>

            </div>
        </div>
    )
}

export default LoginScreen;