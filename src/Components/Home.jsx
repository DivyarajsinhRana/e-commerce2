import '../Styles/home.css'
import React, { useState, useEffect } from 'react'
import Drawer from './Drawer'
import Productlist from './Productlist'
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
    useEffect(() => {
        dispatch(fetchProduct(baseURL))
    },[])
    const items = useSelector(state => state.productlist);
    
    // const products=useSelector(state=>state.productlist.product);
    const [data, setData] = useState(items.product);
    // let data=items.product;
    // console.log(data);
    // const [data,setData]=useState(data);
    // console.log(item);
    const [sort, setSort] = useState();
    const category1 = data.filter(item => item.category === "men's clothing");
    const category2 = data.filter(item => item.category === "jewelery");
    const category3 = data.filter(item => item.category === "electronics");
    const category4 = data.filter(item => item.category === "women's clothing");
    // const [category,setCategory]=useState(data);
    // console.log(category1)
    // console.log(category2)
    // console.log(category3)
    // console.log(category4)
    console.log(items)
    const count = items.product.length;
    console.log(count)
    const filterProduct = (e) => {
        console.log(e.target.value)
        switch(e.target.value){
                case "men's clothing":
                    setData(category1);
                    
                   
                    console.log("category1");
                    // setCategory(category1);
                    break;
                case "jewelery":
                    setData(category2);
                    // setCategory(category2);
                    
                    console.log("category2")
                    break;
                case "electronics":
                    setData(category3);
                    // setCategory(category3);
                    
                    console.log("category3")
                    break;
                case "Women's clothing":
                    setData(category4);
                    // setCategory(category4);
                    
                    console.log("category4")
                    break;
                default: 

                // setData(items.product)
                // setCategory(data)
               
                console.log("default")
                break;
        }
        //        setData(items.product)
        // if (e.target.value) {
        //     setData(category1);
        // }
        // else {
        //     setData(items.product)
        // }
    }
    const sortProduct = (e) => {
        console.log(e.target.value)
    }
    return (
        <>
              <div className="container-fluid">
                <div className='mt-4 d-grid productGrid'>
                    <div className="row ">
                        <div className="col1 col-3">
                            <Drawer />
                        </div>
                        <div className="col1 col-9">
                            <div>
                                <Filter length={count} /*category={category}*/ sort={sort} filterProduct={filterProduct} sortProduct={sortProduct} />
                                {/* <Productlist item={data}/> */}
                                {
                                    items.loading ?
                                        (<h2>Loading products from api</h2>) :
                                        items.errors ?
                                            (<h2>{items.errors}</h2>) :
                                            (
                                                <div className='row gx-5'>{
                                                    items.product.map(
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
