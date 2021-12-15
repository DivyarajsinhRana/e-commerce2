import React from 'react'

const Filter = () => {
    return (
        <>
            <div className='mt-5'>
            <div>
                <select className="form-select" aria-label="Default select example">
                    <option value="0">Filter by category</option>
                    <option value="1">Men's clothing</option>
                    <option value="2">jewelery</option>
                    <option value="3">electronics</option>
                    <option value="3">Women's clothing</option>
                </select>
            </div>
            <div className='mt-5'>
                <select className="form-select" aria-label="Default select example">
                    <option value="0">Filter by price</option>
                    <option value="1">High to low</option>
                    <option value="2">Low to high</option>
                </select>
            </div>
            {/* <div className='mt-5'>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    by price (high to low)
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    by price (low to high)
                </label>
            </div>
            </div> */}
        </div>
        </>
    )
}

export default Filter
