import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { RemoveCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/countaction'
import ProductCard from './ProductCard'
import { baseURL } from '../API';
import Cartdata from './Cartdata';
import '../Styles/cart.css'
import { removeproduct } from '../Redux/cartaction';
import { useNavigate } from 'react-router';
import { addedtocart } from '../Redux/cartaction'
const Cart = () => {
    // const [click,setClick]=useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addedProducttoCart = useSelector(state => state.addcart);
    console.log(addedProducttoCart)
    const amount=addedProducttoCart.map(cart=>cart.price);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const total=amount.reduce(reducer);
    console.log(total)
    const cartItem = useSelector(state => state.cart)

    // const reducer = (previousValue, currentValue) => previousValue + currentValue;

    // console.log(total)
    // console.log(addedProducttoCart);
    const handleClick = (id) => {
       
        dispatch(removeFromCart());
        dispatch(removeproduct(id))
    }
    return (
        <div>
            <h2>Cart</h2>
            <p>you have {cartItem} product in your cart </p>
            {
                addedProducttoCart.map((product, id) => {
                    return (
                        <div key={id}>{
                            (
                                <div>
                                    <img src={product.image} className="image mx-5" alt="" />
                                    {/* <h1>{product.id}</h1> */}
                                    <div>
                                        <h4>{product.title}</h4>
                                        {/* <p>{addedProducttoCart[id].category}</p> */}
                                        <p><strong>${product.price}</strong></p>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger" onClick={()=>handleClick(product.id)}><RemoveCircle />Remove from cart</button>
                                    </div>
                                </div>
                            )
                        }

                        </div>
                    )
                })
            }
    
            <div>
                <button className="btn btn-success mt-3" onClick={() => {
                    dispatch(addedtocart(addedProducttoCart));
                    navigate("/checkout")
                }}>
                    Checkout</button>
            </div>
            <div><p>Total amount:${total}</p></div>
        </div>
    )
}

export default Cart
