import React,{ Children, createContext, useState } from "react";
 import products from '../data/products';
export const ProductContext=createContext()
 
const HandlerContext=({children})=>{
    const[allProducts,setAllProducts]=useState(products)
    const[userCart,setUserCart]=useState([])
    const[isShowToast,setIsShowToast]=useState(false)
    const[isShowCart,setIsShowCart]=useState(false)

return(
  <ProductContext.Provider  value={{
    allProducts,
    userCart,
    setUserCart,
    isShowToast,
    setIsShowToast,
    isShowCart,
    setIsShowCart
  }}>
    {children}
 
  </ProductContext.Provider >
)
}
export default HandlerContext