const initialState={
    loading:false,
    product:[],
    errors:""
}
const productDetailReducer=(state=initialState,action)=>{
    switch(action.type){
        case "detailProduct_req":
            return{
                ...state,
                loading:true
            }
        case "detailProduct":
            return{
                loading:false,
                product:action.payload
            }
        case "detailProduct_Fail":
        return{
            loading:false,
            product:[],
            errors:action.payload
        }
        default :return state
    }
}
export default productDetailReducer