import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { userLogoutAction } from '../actions/userActions';

const NavbarComponent = () => {

    const cartState = useSelector(state => state.cartReducer);
    const userState = useSelector(state => state.userLoginReducer)
    const { currentUser } = userState;
    console.log(currentUser);

    const dispatch = useDispatch()

    return (
        <>
            <div>
                <Navbar bg="light" expand="md" className='shadow p-md-2 p-sm-2 mb-4 bg-body rounded ms-2 me-2' >
                    <Navbar.Brand href="/" className='ms-2 ms-sm-1'> <i className="fa-solid fa-burger"></i> FatBurgers </Navbar.Brand>
                    <Navbar.Toggle className='me-2 sm-me-1' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <ul className="navbar-nav nav-logo" >

                                {currentUser ?
                                    <Nav >
                                        <NavDropdown
                                            id="nav-dropdown-dark-example"
                                            title={currentUser.name}
                                            menuVariant="dark"
                                        >
                                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                                            <NavDropdown.Item href="#" onClick={() => { dispatch(userLogoutAction()) }}><li>LogOut</li></NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav> :

                                    <Button
                                        className='p-2 ms-2 mt-2 mb-2'
                                        style={{ border: "none", fontSize: "20px" }}
                                        href="/login"
                                        variant="success">
                                        Login
                                    </Button>
                                }
                                <Button
                                    style={{ border: "none", fontSize: "20px" }}
                                    href="/cart"
                                    className='p-2 m-2'
                                    variant="success">
                                    <i className="fa-solid fa-cart-arrow-down"></i>  {cartState.cartItems.length}
                                </Button>
                            </ul>

                            {/* <Dropdown as={ButtonGroup}>
                                <Button
                                    className='p-2 ms-2 mt-2 mb-2'
                                    style={{ border: "none", fontSize: "20px" }}
                                    href="/login"
                                    variant="success">
                                    Login
                                </Button>

                                <Dropdown.Toggle className='p-2 me-2 mt-2 mb-2' style={{ border: "none", fontSize: "20px" }} split variant="success" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Orders</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button
                                style={{ border: "none", fontSize: "20px" }}
                                href="/cart"
                                className='p-2 m-2'
                                variant="success">
                                <i className="fa-solid fa-cart-arrow-down"></i>
                                {cartState.cartItems.length}
                            </Button> */}

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            {/* <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-4 bg-body rounded">
                    <a className="navbar-brand" href="/">Burger Castle</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Login </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Cart {cartState.cartItems.length} </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <br></br> */}
        </>
    )
}

export default NavbarComponent;