import '../Styles/home.css'
import React, { useState } from 'react'
import Drawer from './Drawer'
import Productlist from './Productlist'
import Filter from './Filter'
import { useSelector } from 'react-redux'
const Home = () => {
    const items = useSelector(state => state.productlist.product);
    const count = items.length;
    const [state, setstate] = useState({
        products:items,
        length:count,
        category:"",
        sort:""
    })
    const filterProduct=(e)=>{
        console.log(e.target.value)   
        if(e.target.value){
            setstate({
                category:e.target.value,
                products:items
            })
        }
        else{
            setstate({
                category:e.target.value,
                products:items.filter(item=>item.category.indexOf(e.target.value)>=0)
            })
        }
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
                        <Filter length={state.length} category={state.category} sort={state.sort} filterProduct={filterProduct} sortProduct={sortProduct} />
                    <Productlist/>
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
