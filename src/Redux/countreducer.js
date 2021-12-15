const cartItemReducer=(state=1,action)=>{
    switch(action.type){
        case "add to cart":
                return state+1
        case "remove from cart":
                return state-1
        case "reset":
            return (state=0)
        default: return state
    }
}
export {cartItemReducer}