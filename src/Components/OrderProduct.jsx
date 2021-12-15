import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import '../Styles/order.css'
const OrderProduct = () => {
    const order=useSelector(state=>state.addcart)
    const navigate=useNavigate()
    console.log(order)
    return (
        <div className='container mt-3'>
            <div>
                <h2>Name:Rana Divyarajsinh chandrasinh</h2>
                
                <address>A-405,Raj appartment,<br/>Rajendrapark,<br/>odhav,<br/>ahmedabad,pin-382415</address>
            
            </div>
            {
                order ? (
                    <div className='d-flex flex-column'>
                        {order.map((order,id)=>{
                            return(
                                <div>
                                    <div>
                                    <h1>
                                        {order.title}
                                    </h1>
                                    </div>
                                    <div>
                                    <img src={order.image} className='img'/>
                                    </div>
                                    <div>
                                        <h3><strong>${order.price}</strong></h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ):null
            }
            <div className='d-flex justify-content-center mb-3'>
                <button className='btn btn-success'>Proceed to pay</button>
                <button className='btn btn-danger mx-2' onClick={()=>navigate('/')}>Cancle</button>
            </div>
        </div>
    )
}

export default OrderProduct
