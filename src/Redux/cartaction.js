const addedtocart=(product)=>{
    return({
        type:"addedtocart",
        payload:product
    })
}
const removeproduct=(id)=>{
    return({
        type:"removeproduct",
        payload:id
    })
}
export {addedtocart,removeproduct}