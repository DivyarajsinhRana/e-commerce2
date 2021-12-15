
import React from 'react'
import Cart from './Cart'
import Filter from './Filter'

const Drawer = () => {
    return (
        <>
        <div>
              <Filter/>
        </div>
        <div className='mt-5'>
              <Cart/>
        </div>
        </>
    )
}

export default Drawer
