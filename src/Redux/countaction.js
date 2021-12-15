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
const reset=()=>{
    return({
        type:"reset"
    })
}
export {addToCart,removeFromCart,reset}