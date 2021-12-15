import '../Styles/home.css'
import React from 'react'
import Drawer from './Drawer'
import Productlist from './Productlist'
// import { selectedItem } from './Productdetail'
const Home = () => {
    // console.log(selectedItem)
    return (
        <>
        <div className="container-fluid">
        <div className='mt-4 d-grid productGrid'>
            <div className="row ">
                <div className="col1 col-3">
                    <Drawer/>
                </div>
                <div className="col1 col-9">
                    <Productlist/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home
