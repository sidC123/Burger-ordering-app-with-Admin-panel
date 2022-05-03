import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import OrdersScreen from './screens/OrdersScreen';
import AdminScreen from './components/AdminScreen';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import EditScreen from './screens/EditScreen';


function App() {

  return (
    <div className="App">

      <NavbarComponent></NavbarComponent>

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
          <Route path='/cart' exact element={<CartScreen />} />
          <Route path='/login' exact element={<LoginScreen />} />
          <Route path='/register' exact element={<RegistrationScreen />} />
          <Route path='/orders' exact element={<OrdersScreen />} />
          <Route path='/admin' element={<AdminScreen />} />
          <Route path='/admin/update-burger/:burgerId' element={<EditScreen />} />
          </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
