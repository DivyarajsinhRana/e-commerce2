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

const detailProduct_req=()=>{
    return {
        type:"detailProduct_req",
    }
}
const detailProduct = (product)=>{
    return {
        type :"detailProduct",
        payload:product
    }
}
const  detailProduct_Fail =(error)=>{
    return {
        type: "detailProduct_Fail",
        payload: error
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
const fetchDetail=(url)=>{
    return (dispatch)=> {
        dispatch(detailProduct_req());
        axios.get(url).then((res)=>{
            const product=res.data;
            console.log("producct detail",product);
            dispatch(detailProduct(product))
        }).catch((e)=>{
            dispatch(detailProduct_Fail(e.message))
        })
    }
}

export  {fetchProduct,fetchDetail}

