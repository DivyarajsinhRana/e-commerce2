import { useState,useEffect } from "react";
import axios from "axios"
const useProduct=(url)=>{
 const [user, setUser] = useState(null)
useEffect(()=>{
    axios.get(url).then((res)=>setUser(res.data)).catch((error)=>setUser(error.message))
},[url])
return [user]
}
export default useProduct;