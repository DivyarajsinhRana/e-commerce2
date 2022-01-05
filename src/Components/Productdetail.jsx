import React, { useEffect,useState } from 'react'
import '../Styles/App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetail, fetchProduct } from '../Redux/fetchProductAction'
import { useParams} from 'react-router-dom'
import { baseURL } from '../API'
import { AddCircle, Star } from '@material-ui/icons'
import {addToCart, removeFromCart} from "../Redux/countaction"
import { addedtocart } from '../Redux/cartaction'
const Productdetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const detail = useSelector(state=>state.productDetail);
    console.log(detail);
    const detailproduct=detail.product;
    // const stock=useSelector(state=>state.cart)
    // console.log(detailproduct.rating.count);
    useEffect(() => {
        dispatch(fetchDetail(`${baseURL}/${id}`))
    }, [])
    // const [availstock,setAvailstock]=useState(stock);
    
    // console.log(availstock);
    const handleCart=()=>{
        dispatch(addToCart());
        dispatch(addedtocart(detailproduct));
        // setAvailstock((prev)=>prev-1);
    }
    return (
        <div className='mt-2 d-grid productGrid'>
            <div className='row'>
                <div className='col1 col-6'>
                    <img src={detailproduct.image} className='image1' />
                </div>
                <div className='col1 col-6'>
                    <div>
                        <h1>{detailproduct.title}</h1>
                        <p>{detailproduct.description}</p>
                        <div className='d-flex justify-content-between align-item-center'>
                            {/* <p><Star />{detailproduct.rating.rate}</p>
                            <p>Available stock:{availstock}</p> */}
                        </div>
                        <div>
                            <button className='btn btn-primary' onClick={handleCart}><AddCircle/>Add to cart</button>
                            <button className='btn btn-primary mx-3'>Add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Productdetail
