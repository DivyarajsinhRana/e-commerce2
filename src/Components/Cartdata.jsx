import { RemoveCircle } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router'

const Cartdata = (props) => {
    const navigate=useNavigate()
    return (
        <>
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
                        <button className="btn btn-danger"><RemoveCircle/>Remove from cart</button>
                        <button className="btn btn-success mx-1" onClick={()=>{
                            alert("clicked")
                            navigate('/checkout')}}>checkout</button>
                    </div>
            </div>
        </>
    )
}

export default Cartdata
