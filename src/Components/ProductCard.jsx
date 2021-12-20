import React from 'react'
import '../Styles/App.css'
import { useDispatch } from 'react-redux'
const ProductCard = (props) => {
    
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div className=' mt-1 imgDiv'>
                <img className="card-img-top imagec" src={props.src} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <div className='title'>
                    <h5 className="card-title">{props.title}</h5>
                    </div>
                    <div>
                    <h5 className="card-text">{props.category}</h5>
                    </div>
                    <div>
                    <h5 className="card-text"> $ {props.price}</h5>
                    </div>
                    <div>
                   
                        <div className='d-flex flex-column'>
                        <button className="btn btn-success my-1" >Add to cart</button>
                        <button className="btn btn-info my-1" >Add to wishlist</button>
                            </div>              
                    </div>
                </div>
            </div>  
        
        </>
    )
}

export default ProductCard
