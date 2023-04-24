
import React, { useState } from "react";
import Navbar from "./compnents/Navbar/navbar";
import { Outlet, Route,Routes } from "react-router-dom";
import Home from "./compnents/Home/home";
import Shop from "./compnents/shop/shop";
import Signup from "./compnents/signup/signup";
import Firstpage from "./compnents/firstpage/first";
import Cart from "./compnents/cart/cart";
import Center from "./compnents/center/center";
import  Products from "./compnents/shop/shop-card";
const App =()=>{

    const [cart,setCart]=useState([]);
    console.log(cart);

    const addToCart =(data)=>{
      console.log(data);
      setCart([...cart,{...data , quantity : 1}])
    }



  return(
    <Routes>
      <Route path="/" element={<><Navbar count={cart.length} /><Outlet /></>}>
        <Route  element={<Center />}></Route>
           <Route index element={<Firstpage />}></Route>
           <Route path="/home" element={<Home />}></Route>
           <Route path="/Shop" element={<Shop Products={Products}  addToCart={addToCart}/>}></Route>
           <Route path="/Signup" element={<Signup />}></Route>
           <Route path="/cart" element={<Cart cart={cart}/>}></Route>
       </Route>
    

    </Routes>
  )
};


export default App;
