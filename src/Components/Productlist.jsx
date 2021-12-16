import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../Redux/fetchProductAction'
import productReducer from '../Redux/productReducer'
import ProductCard from './ProductCard'
import "../Styles/productcard.css"
import { useNavigate } from 'react-router'
import { baseURL } from '../API'

const Productlist = (props) => {
    const navigate=useNavigate();
    const dispatch = useDispatch()
    const items = useSelector(state => state.productlist)
    // useEffect(() => {
    //     dispatch(fetchProduct(baseURL))
    // }, [])
    return (
        <div>
            {/* {
                items.loading ?
                    (<h2>Loading products from api</h2>) :
                    items.errors ?
                        (<h2>{items.errors}</h2>) :
                        (
                            <div className='row gx-5'>{
                                props.item.map(
                                    (user, id) =>
                                    (
                                        <div className="col-3" key={id}  onClick={() => {
                                            navigate(`/productdetails/${user.id}`);
                                        }}>  
                                            <ProductCard  src={user.image} title={user.title} category={user.category} price={user.price}
                                            />
                                        </div>
                                        
                                    )
                                )
                            }</div>
                        )

            } */}
           
           

        </div>
    )
}

export default Productlist
