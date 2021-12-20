import { Search } from '@material-ui/icons'
import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/countaction'
import '../Styles/App.css'
import { removeproduct } from '../Redux/cartaction';
import { Drawer} from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';
const Navbar = () => {
    const cartitem = useSelector(state => state.cart)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addedProducttoCart = useSelector(state => state.addcart);
    console.log(addedProducttoCart)
    const cartItem = useSelector(state => state.cart)       
    const handleClick = (id) => {
        dispatch(removeFromCart());
        dispatch(removeproduct(id))
    }
    const cartlength=addedProducttoCart.length
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
                            <button className="btn btn-info" onClick={/*navigate('/cart')*/ handleOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" /><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" /></svg>
                                <span class="badge badge-dark text-dark">{cartitem}</span>
                            </button>
                            <Drawer open={open} onClose={handleClose} anchor="right" className="cartDrawer" variant='temporary'>
                                <div className='bg-white text-dark mx-5'>
                                <h2>Cart</h2>
                                <p>you have {cartItem} product in your cart </p>
                                <div>
                                {
                                    addedProducttoCart.map((product, id) => {
                                        return (
                                            <div key={id}>{
                                                (
                                                    <div>
                                                        <img src={product.image} className="image mx-5" alt="" />
                                                        <div>
                                                            <h4>{product.title}</h4>
                                                            <p><strong>${product.price}</strong></p>
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-danger" onClick={() => handleClick(product.id)}><RemoveCircle />Remove from cart</button>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                            </div>
                                        )
                                    })
                                }
                                </div>
                                {
                                    cartlength === 0 ? null : (
                                <div>
                                    <button className="btn btn-success mt-3" onClick={() => {
                                        navigate("/checkout")
                                    }}>
                                        Checkout</button>
                                </div>
                                    )
                                }
                                </div>
                            </Drawer>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
