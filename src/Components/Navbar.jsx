import { Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartitem = useSelector(state => state.cart)
    const navigate=useNavigate();
    return (
        <>
            <div className='mainNav'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className='nav-right d-flex'>
                        <Link className="navbar-brand" to="/">DCZON</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                    </div> 
                    </div>
                    <div className="nav-center d-flex justify-content-between align-items-center">
                    <input type="text" placeholder="search by category" />
                          <Search />
                    </div>
                    <div className='nav-end d-flex justify-content-between align-items-center '>
                        <button className="btn btn-info" onClick={()=>navigate('/cart')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
                    <span class="badge badge-dark text-dark">{cartitem}</span>
                        </button>
                    </div>
                </div>

            </nav>
            </div>
        </>
    )
}

export default Navbar
