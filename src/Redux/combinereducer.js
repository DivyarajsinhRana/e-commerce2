import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { cartItemReducer } from "./countreducer";
import cartaddreducer from "./cartreducer";

const rootreducer=combineReducers({
    productlist:productReducer,
    cart:cartItemReducer,
    addcart:cartaddreducer
})
export default  rootreducer