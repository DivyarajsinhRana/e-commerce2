import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { RemoveCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/countaction'
import '../Styles/cart.css'
import { removeproduct } from '../Redux/cartaction';
import { useNavigate } from 'react-router';
import { addedtocart } from '../Redux/cartaction'
import { Modal } from '@material-ui/core';
const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addedProducttoCart = useSelector(state => state.addcart);
    console.log(addedProducttoCart)
    // const amount=addedProducttoCart.map(cart=>cart.price);
    // const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // const total=amount.reduce(reducer);
    // console.log(total)
    const cartItem = useSelector(state => state.cart)
    const handleClick = (id) => {
        dispatch(removeFromCart());
        dispatch(removeproduct(id))
    }
    return (
        <>
            <Modal>
            <h2>Cart</h2>
            <p>you have {cartItem} product in your cart </p>
            {
                addedProducttoCart.map((product, id) => {
                    return (
                        <div key={id}>{
                            (
                                <div>
                                    <img src={product.image} className="image mx-5" alt="" />
                                    <div>
                                        <h4>{product.title}</h4>
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
                    navigate("/checkout")
                }}>
                    Checkout</button>
            </div>
            {/* <div><p>Total amount:${total}</p></div> */}
            </Modal>
        </>
    )
}
export default Cart
