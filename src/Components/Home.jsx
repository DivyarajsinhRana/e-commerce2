import '../Styles/home.css'
import React, { useState,useEffect} from 'react'
import Drawer from './Drawer'
import Productlist from './Productlist'
import Filter from './Filter'
import { fetchProduct } from '../Redux/fetchProductAction'
import { baseURL } from '../API'

import { useSelector,useDispatch } from 'react-redux'
const Home = () => {
   
    const dispatch = useDispatch()
      useEffect(() => {
        dispatch(fetchProduct(baseURL))
        
    }, [])
    const items = useSelector(state => state.productlist);
    // const [data, setData] = useState(items);
    const availableCategory=items.product.map(product=>product.category);
    console.log(availableCategory);
    const set =new Set(availableCategory);
    console.log(set);
    const finalCategory=[...set];
    console.log(finalCategory);
    console.log(items)
    const count = items.product.length;
    // console.log(count)
    const [state, setstate] = useState({
        products:items.product,
        length:count,
        category:"",
        sort:""
    })
    const filterProduct=(e)=>{
        console.log(e.target.value)
        // console.log(data);   
    //    switch(e.target.value){
    //        case "Men's clothing": 
    //        setData(items.product.category==="Men's clothing")
    //         case "jewelery":
    //             setData(items.product.category==="jewelery")
    //         case "electronics":  
    //          setData(items.product.category==="electronics")
    //         case "Women's clothing":
    //             setData(items.product.category==="Women's clothing")
    //             default: return data
    //    }
        // if(e.target.value){
        //     setstate({
        //         category:e.target.value,
        //         products:items.product
        //     })
        // }
        // else{
        //     setstate({
        //         category:e.target.value,
        //         products:items.product.filter(item=>item.finalCategory.indexOf(e.target.value)>=0)
        //     })
        // }
    }
    const sortProduct=(e)=>{
     console.log(e.target.value)
    }
    // alert(state.length)
    return (
        <>
        <div className="container-fluid">
        <div className='mt-4 d-grid productGrid'>
            <div className="row ">
                <div className="col1 col-3">
                    <Drawer/>
                </div>
                <div className="col1 col-9">
                    <div>
                        <Filter length={count} category={state.category} sort={state.sort} filterProduct={filterProduct} sortProduct={sortProduct} />
                    <Productlist item={items}/>
                    </div>
                    {/* <div className='mt-2'>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home
