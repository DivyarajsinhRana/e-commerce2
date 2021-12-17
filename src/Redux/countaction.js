const addToCart=()=>{
    return({
        type:"add to cart",
    }
    )
}
const removeFromCart=()=>{
    return({
        type:"remove from cart"
    })
}

export {addToCart,removeFromCart}