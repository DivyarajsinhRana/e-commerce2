import React, { useEffect,useState } from 'react'
import '../Styles/home.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../Redux/fetchProductAction'
import { useParams,useNavigate } from 'react-router-dom'
import { baseURL } from '../API'
import { AddCircle, Star } from '@material-ui/icons'
import {addToCart, reset} from "../Redux/countaction"
import { addedtocart } from '../Redux/cartaction'
const Productdetail = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const { id } = useParams();
    const item = useSelector(state => state.productlist.product);
    console.log(item);
    const selectedItem = item.find((item) => item.id === parseInt(id));
    // console.log(selectedItem)
    useEffect(() => {
        dispatch(fetchProduct(baseURL))
    }, [])
    const cartItem=useSelector(state => state.addcart);
    // const [title,setTitle]=usestate()
    // const [image,setImage]=usestate()
    // const [category,setCategory]=usestate()
    // const [price,setPrice]=usestate()
    // console.log(cartItem)
    const cartedProduct={
        id:selectedItem.id,
        title:selectedItem.title,
        image:selectedItem.image,
        category:selectedItem.category,
        price:selectedItem.price
    }
   const [availstock,setAvailstock]=useState(selectedItem.rating.count);
    const handleCart=()=>{
        dispatch(addToCart());
        dispatch(addedtocart(cartedProduct));
        // navigate("/");
        setAvailstock((prev)=>prev-1);
    }
    return (
        <div className='mt-2 d-grid productGrid'>
            <div className='row'>
                <div className='col1 col-6'>
                    <img src={selectedItem.image} className='image1' />
                </div>
                <div className='col1 col-6'>
                    <div>
                        <h1>{selectedItem.title}</h1>
                        <p>{selectedItem.description}</p>
                        <div className='d-flex justify-content-between align-item-center'>
                            <p><Star />{selectedItem.rating.rate}</p>
                            <p>Available stock:{availstock}</p>
                        </div>
                        <div>
                            <button className='btn btn-primary' onClick={handleCart}><AddCircle/>Add to cart</button>
                            <button className='btn btn-primary mx-3' onClick={()=>dispatch(reset())}>Reset</button>
                            <button className='btn btn-primary mx-3'>Add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Productdetail
