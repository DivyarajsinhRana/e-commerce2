import React from 'react'
import Navbar from './Components/Navbar';
import { Routes,Route  } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import Productdetail from './Components/Productdetail';
import Cart from './Components/Cart';
import ProductCheckout from './Components/ProductCheckout';
import OrderProduct from './Components/OrderProduct';
const App = () => {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productdetails/:id" element={<Productdetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<ProductCheckout/>}/>
      <Route path='/order' element={<OrderProduct/>}/>
    </Routes>
    </>
  )
}

export default App


