import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchProduct } from "./Redux/fetchProductAction";
import productReducer from "./Redux/productReducer";
import { baseURL } from "./API";
import rootreducer from "./Redux/combinereducer";
const store=createStore(rootreducer,applyMiddleware(thunk));
const id=1
console.log(store.getState());

// store.subscribe(()=>console.log(store.getState()))
// // store.dispatch(fetchProduct());
// store.dispatch(fetchProduct(`${baseURL}/${id}`))

export default store