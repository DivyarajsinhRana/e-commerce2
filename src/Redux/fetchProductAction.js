import axios from "axios"
const getProduct_Req=()=>{
    return{
        type:"getProduct_Req"
    }
}
const getProduct_Success=(product)=>{
    return{
        type:"getProduct_Success",
        payload:product
    }
}
const getProduct_fail=(error)=>{
    return{
        type:"getProduct_fail",
        payload:error
    }
}
const filterProduct=(filteredProduct)=>{
    return{
        type:"filter",
        payload:filteredProduct
    }
}
const fetchProduct=(url)=>{
    return (dispatch)=>{
            dispatch(getProduct_Req());
            axios.get(url)
            .then(
                res=>{
                    const product=res.data;
                    dispatch(getProduct_Success(product))
                }
            ).catch(
                error=>{
                    const erroeMsg=error.message;
                    dispatch(getProduct_fail(erroeMsg))
                }
            )
    }
}

export  {fetchProduct}

