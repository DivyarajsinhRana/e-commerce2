import React from 'react'
import "../Styles/App.css"
const Filter = (props) => {
    return (
        <>
        <div className='d-flex justify-content-between mt-3'>
            <div className='text-center'>
                <h3>{props.length} products</h3>
            </div>
                    <div className='filter-category'>
                        <select className="form-select" aria-label="Default select example" value={props.category} onChange={props.filterProduct}>
                            <option value="Filter by category">Filter by category</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                            <option value="women's clothing">women's clothing</option>
                        </select>
                    </div>
                    <div className='filter-price mx-2'>
                        <select className="form-select" aria-label="Default select example" value={props.sort} onChange={props.sortProduct}>
                            <option value="Filter by price">Filter by price</option>
                            <option value="High to low">High to low</option>
                            <option value="Low to high">Low to high</option>
                        </select>
                    </div>
        </div>
        </>
    )
}

export default Filter
