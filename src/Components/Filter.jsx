
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../Redux/fetchProductAction'
import productReducer from '../Redux/productReducer'
import ProductCard from './ProductCard'
import "../Styles/productcard.css"
import { useNavigate } from 'react-router'
import { baseURL } from '../API'
const Filter = (props) => {
    // const items = useSelector(state => state.productlist.product);
    // const item = useSelector(state => state.productlist);
    // const navigate=useNavigate();
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchProduct(baseURL))
    // }, [])
    return (
        <>
        <div className='d-flex justify-content-between mt-3'>
            <div className='text-center'>
                <h3>{props.length} products</h3>
            </div>
                    <div className='filter-category'>
                        <select className="form-select" aria-label="Default select example" value={props.category} onChange={props.filterProduct}>
                            <option value="Filter by category">Filter by category</option>
                            <option value="Men's clothing">Men's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                            <option value="Women's clothing">Women's clothing</option>
                        </select>
                    </div>
                    <div className='filter-price mx-2'>
                        <select className="form-select" aria-label="Default select example" value={props.sort} onChange={props.sortProduct}>
                            <option value="Filter by price">Filter by price</option>
                            <option value="High to low">High to low</option>
                            <option value="Low to high">Low to high</option>
                        </select>
                    </div>
        </div>
         {/* <div>
             {
                item.loading ?
                    (<h2>Loading products from api</h2>) :
                    item.errors ?
                        (<h2>{item.errors}</h2>) :
                        (
                            <div className='row gx-5'>{
                                item.product.map(
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
            }
        </div> */}
        </>
    )
}

export default Filter
