import '../Styles/home.css'
import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import { fetchProduct } from '../Redux/fetchProductAction'
import { baseURL } from '../API'
import ProductCard from './ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import "../Styles/productcard.css"

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [filterproducts, setfilterProducts] = useState([])
    useEffect(() => {
        dispatch(fetchProduct(baseURL))
    }, [])
    const state = useSelector(state => state.productlist);
    useEffect(() => {
        setProducts(items);
        setfilterProducts(items);
    }, [state])
    const items = state.product;
    const [category, setCategory] = useState('');
    const count = filterproducts.length;
    const filterProduct = (e) => {
        switch (e.target.value) {
            case "Filter by category":
                setfilterProducts(filterproducts)
                setCategory(filterproducts)
                console.log(e.target.value)
            case "men's clothing":
                setfilterProducts(products.filter(item => item.category === "men's clothing"));
                console.log("category1");
                console.log(e.target.value)

                break;
            case "jewelery":
                setfilterProducts(products.filter(item => item.category === "jewelery"));

                console.log(e.target.value)

                break;
            case "electronics":
                setfilterProducts(products.filter(item => item.category === "electronics"));

                console.log("category3")
                console.log(e.target.value)
                break;
            case "women's clothing":
                setfilterProducts(products.filter(item => item.category === "women's clothing"));

                console.log(e.target.value)
                console.log("category4")
                break;
            default:
                setfilterProducts(filterproducts)
                setCategory(filterproducts)
                console.log(e.target.value)
                console.log("default")
        }
    }
    const [sort, setSort] = useState();
    const sortProduct = (e) => {
        console.log(e.target.value)
    }
    return (
        <>
            <div className="container-fluid">
                <div className='mt-4 d-grid productGrid'>
                    <div className="row ">
                        <div className="col1 col-12">
                            <div>
                                <Filter length={count} category={category} sort={sort} filterProduct={filterProduct} sortProduct={sortProduct} />
                                {
                                    state.loading ?
                                        (
                                            <div className='d-flex justify-content-center align-item-center'>
                                                <span className='spinner-border' />
                                                <span className='mx-2'>Loading products from api</span>
                                            </div>
                                        ) :
                                        state.errors ?
                                            (<h2>{state.errors}</h2>) :
                                            (
                                                <div className='row gx-5 mt-3'>{
                                                    filterproducts.map(
                                                        (user, id) =>
                                                        (
                                                            <div className="col-3 cardStyle" key={id} onClick={() => {
                                                                navigate(`/productdetails/${user.id}`);
                                                            }}>
                                                                <ProductCard src={user.image} title={user.title} category={user.category} price={user.price}
                                                                />
                                                            </div>
                                                        )
                                                    )
                                                }</div>
                                            )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
