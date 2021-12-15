const initialState={
    loading:false,
    product:[],
    errors:""
}

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case "getProduct_Req":
            return{
                ...state,
                loading:true
            }
        case "getProduct_Success":
            return{
                loading:false,
                product:action.payload
            }
        case "getProduct_fail":
        return{
            loading:false,
            product:[],
            errors:action.payload
        }
        default :return state
    }
}
export default productReducer