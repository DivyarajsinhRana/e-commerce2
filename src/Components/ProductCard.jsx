import React from 'react'
import {useNavigate } from 'react-router'
import '../Styles/productcard.css'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/countaction'

const ProductCard = (props) => {
    
    const dispatch = useDispatch();
    return (
        <>
        <section>

            <div className="card cardStyle"  >
                <div>
                <img className="card-img-top" src={props.src} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <div>
                    <h5 className="card-title">{props.title}</h5>
                    </div>
                    <div>
                    <h5 className="card-text">{props.category}</h5>
                    </div>
                    <div>
                    <h5 className="card-text"> $ {props.price}</h5>
                    </div>
                    <div>
                    {/* <Button variant='outlined' >Add to cart</Button>
                     <Button variant='outlined' >Add to wishlist</Button> */}
                        <div className='d-flex'>
                        <button className="btn btn-secondary mx-1" >Add to cart</button>
                        <button className="btn btn-secondary mx-1" >Add to wishlist</button>
                            </div>              
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}

export default ProductCard
