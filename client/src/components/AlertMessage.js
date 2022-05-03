import React from 'react';
import { Alert, Image, Nav } from 'react-bootstrap';
import emptyCartImg from "../images/empty-cart.jpg";

const AlertMessage = () => {
    return (
        <>
            <Alert variant="light">
                <h2>Sorry! Your cart is empty</h2>
                <Image fluid src={emptyCartImg} />
                <Nav.Link href='/'> Click here to choose some deliciously fat burgers </Nav.Link>
            </Alert>
        </>
    )
}

export default AlertMessage;