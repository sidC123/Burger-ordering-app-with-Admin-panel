import React, { useEffect } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import AddBurger from '../screens/AddBurger';
import BurgerList from '../screens/BurgerList';
import EditScreen from '../screens/EditScreen';
import OrdersList from '../screens/OrdersList';
import UserList from '../screens/UserList';


const AdminScreen = () => {

    const userState = useSelector(state => state.userLoginReducer)
    const { currentUser } = userState;

    // const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = "/"
        }
    })

    return (

        <>
            <h1 style={{ fontFamily: 'Acme' }}> Admin panel</h1>

            <Container>

                <Tabs defaultActiveKey="BurgersList" id="uncontrolled-tab-example" className="mb-3 justify-content-center"
                style={{ backgroundColor: "#212121", fontSize: "22px", margin: "10px", fontFamily: "Acme", paddingTop:'10px', borderRadius:10 }}>
                    <Tab eventKey="UserList" title="User list">
                        <UserList />
                    </Tab>
                    <Tab eventKey="BurgersList" title="Burgers list">
                        <BurgerList />
                    </Tab>
                    <Tab eventKey="AddBurgers" title="Add new burger">
                        <AddBurger />
                    </Tab>
                    <Tab eventKey="OrdersList" title="Orders list">
                        <OrdersList />
                    </Tab>
                    {/* <Tab eventKey="UpdateBurger" title="Update Burger">
                        <EditScreen />
                    </Tab> */}
                </Tabs>

                {/* <Tabs >
                    <TabList style={{ backgroundColor: "#212121", color: "white", fontSize: "22px", margin: "10px", fontFamily: "Acme", paddingTop:'10px', borderRadius:10 }} >
                        <Tab style={{ padding: "10px", marginRight:"15px" }}>Users list</Tab>
                        <Tab style={{ padding: "10px", marginRight:"15px" }}>Burgers list</Tab>
                        <Tab style={{ padding: "10px", marginRight:"15px" }}>Add burgers</Tab>
                        <Tab style={{ padding: "10px", marginRight:"15px" }}>Orders list</Tab>
                    </TabList>

                    <TabPanel>
                        <UserList />
                    </TabPanel>
                    <TabPanel>
                        <BurgerList />
                    </TabPanel>
                    <TabPanel>
                        <AddBurger />
                    </TabPanel>
                    <TabPanel>
                        <OrdersList />
                    </TabPanel>
                </Tabs> */}




                {/* <Routes>
                    <Route path='/admin/users-list' exact element={UserList} />
                    <Route path='/admin/burger-list' exact element={BurgerList} />
                    <Route path='/admin/add-burger' exact element={AddBurger} />
                    <Route path='/admin/orders-list' exact element={OrdersList} />
                </Routes> */}

            </Container>


        </>

    )
}

export default AdminScreen

// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { BrowserRouter, Link, Routes, Route, useRoutes } from "react-router-dom";
// import { Switch } from "react-router";

// import AddPizza from "./AddPizza";
// import Orders from "./Orders";
// import PizzaList from "./PizzaList";
// import UserList from "./UserList";

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const AdminScreen = () => {

//     const userstate = useSelector(state => state.LoginUserReducer)
//     // const dispatch = useDispatch()

//     const { currentUser } = userstate;

//     useEffect(() => {

//         if (!currentUser.isAdmin) {
//             window.location.href = "/";
//         }

//     })


//     return (
//         <div className="container">

//             <div className=" row justify-content-center">
//                 <div>

//                     <h2 style={{ padding: "10px", fontFamily: "serif" }}>Admin Pannel</h2>

//                     <Tabs >
//                         <TabList style={{ backgroundColor: "blue", color: "white", fontSize: "18px", margin: "10px", fontFamily: "sans" }}>
//                             <Tab style={{ padding: "10px", margin: "0px 20px" }}>User List</Tab>
//                             <Tab style={{ padding: "10px", margin: "0px 20px" }}>Pizza List</Tab>
//                             <Tab style={{ padding: "10px", margin: "0px 20px" }}>Add Pizzas List</Tab>
//                             <Tab style={{ padding: "10px", margin: "0px 20px" }}>Orders List</Tab>

//                         </TabList>

//                         <TabPanel>
//                             <UserList />
//                         </TabPanel>
//                         <TabPanel>
//                             <PizzaList />
//                         </TabPanel>
//                         <TabPanel>
//                             <AddPizza />
//                         </TabPanel>
//                         <TabPanel>
//                             <Orders />
//                         </TabPanel>
//                     </Tabs>




//                     {/*
//                     <ul className="admin-panel-nav">

//                         <li><a href='/admin/User-List'>Users List</a> </li>

//                         <li><Link to={'admin/User-List'}>Users List</Link> </li>
//                         <li><Link to='/pizzalist'>Pizzas List</Link></li>
//                         <li><Link to='/addpizza'>Add Pizzas List</Link></li>
//                         <li><Link to='/orderlist'>Orders List</Link></li>

//                     </ul>



//                     <Routes>
//                         <Route element={<AdminScreen />}>

//                             <Route exact path='/admin' element={<UserList />} />

//                             <Route path='/admin/User-List' element={<UserList />} exact />
//                             <Route path='/pizzalist' element={<PizzaList />} exact />
//                             <Route path='/addpizza' element={<AddPizza />} exact />
//                             <Route path='/orderlist' element={<Orders />} exact />

//                         </Route>
//                     </Routes>

//  */}


//                 </div>


//             </div>

//         </div >
//     )



// }


// export default AdminScreen