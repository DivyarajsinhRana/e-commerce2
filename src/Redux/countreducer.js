const cartItemReducer=(state=0,action)=>{
    switch(action.type){
        case "add to cart":
                return state+1
        case "remove from cart":
                return state-1
        default: return state
    }
}
export {cartItemReducer}