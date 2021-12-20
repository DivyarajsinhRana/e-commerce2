import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import { DeleteOutlined} from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { useSelector } from "react-redux";

const ProductCheckout = () => {
    const navigate=useNavigate();
    const newProduct = useSelector(state => state.addcart)
    const amount=newProduct.map(cart=>cart.price);
    console.log(amount);
    console.log(amount.length);
   const [producttotal,setProducttotal]=useState(0)
    console.log(newProduct);
     const reducer = (previousValue, currentValue) => previousValue + currentValue;
     const total=()=>{
         if(amount.length===0){
             setProducttotal(0);
        }
        else{
            const ptotal=amount.reduce(reducer);
            setProducttotal(ptotal)
        }
     }
    useEffect(()=>{
        total();
    },[])
    return (
        <div>
                 <div className=" container  mt-5">
            <table class="table table-responsive">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newProduct.map((product, id) => {
                            return(
                                <tr key={id}>
                                <td>{id+1}</td>
                                <td><h5>{product.title}</h5></td>
                                <td><img style={{height:"10%",width:"15%"}} src={product.image}/></td>
                                <td><h5>{product.category}</h5></td>
                                <td><h5>${product.price}</h5></td>
                                <td>
                                    <Button className="bg-danger">
                                        <DeleteOutlined  />
                                    </Button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
                <div className="d-flex justify-content-center"> 
                <button className="btn btn-primary" onClick={()=>navigate('/')}>Back</button>
                <button className="btn btn-success mx-2" onClick={()=>navigate('/order')}>Procced to buy</button>
                <p className=''>amount:{producttotal}</p>
                </div>
        </div>
    )
}

export default ProductCheckout

