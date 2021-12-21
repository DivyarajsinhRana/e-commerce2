import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { cartItemReducer } from "./countreducer";
import cartaddreducer from "./cartreducer";
import productDetailReducer from "./productDetailReducer";
const rootreducer=combineReducers({
    productlist:productReducer,
    cart:cartItemReducer,
    addcart:cartaddreducer,
    productDetail:productDetailReducer
})
export default  rootreducer