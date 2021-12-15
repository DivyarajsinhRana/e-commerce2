const initialstate=[{
    id:null,
    title:null,
    image:null,
    category:null,
    price:null
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
                state=[...state,state.splice(action.payload,1)]
                return state
            }
        default:return state
    }
}
export default cartaddreducer