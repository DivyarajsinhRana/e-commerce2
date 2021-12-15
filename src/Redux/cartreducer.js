const initialstate=[{
    id:0,
    title:null,
    image:null,
    category:null,
    price:0
}]
const cartaddreducer=(state=initialstate,action)=>{
    switch(action.type){
        case "addedtocart":
            {
                state=[...state,action.payload]
                return state
            }
        case "removeproduct":
            {  
                const filterProduct = state.filter(product=>product.id!==action.payload ? product:null    
                    && product )
                    state=filterProduct;
                    return state       
                // state=[state.splice(action.payload,1)]
                // return state
            }
        default:return state
    }
}
export default cartaddreducer