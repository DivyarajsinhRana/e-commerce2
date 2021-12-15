import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { RemoveCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import {removeFromCart} from '../Redux/countaction'
import ProductCard from './ProductCard'
import { baseURL } from '../API';
import Cartdata from './Cartdata';
import '../Styles/cart.css'
import { removeproduct } from '../Redux/cartaction';
import { useNavigate } from 'react-router';
import { addedtocart } from '../Redux/cartaction'
const Cart = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const addedProducttoCart=useSelector(state=>state.addcart);
    const cartItem=useSelector(state=>state.cart)
    console.log(addedProducttoCart);
    return (
        <div>
            <h2>Cart</h2>
             <p>you have {cartItem} in your cart </p>
             {
                 addedProducttoCart ?  addedProducttoCart.map((product,id)=>{
                    return (
                        <div>
                            <img src={addedProducttoCart[id].image} className="image mx-5" alt="" />
                            <div>
                                <h4>{addedProducttoCart[id].title}</h4>
                                {/* <p>{addedProducttoCart[id].category}</p> */}
                                <p>price:<strong>${addedProducttoCart[id].price}</strong></p>
                            </div>
                            <div>
                            <button className="btn btn-danger" /*onClick={()=>{dispatch(removeFromCart());dispatch(removeproduct(id))}}*/><RemoveCircle/>Remove from cart</button>
                            </div>
                        </div>
                    )
                }) : null
             }   
             
             <div>
                 <button className="btn btn-success mt-3" onClick={()=>
                    {
                        dispatch(addedtocart(addedProducttoCart));
                        navigate("/checkout")}}>
                            Checkout</button>
             </div>
        </div>
    )
}

export default Cart
