import { useEffect, useState } from "react";
import "../cart/cart.css"



const Cart = ({cart}) =>{

    const [CART, setCART] = useState([]);

    useEffect(()=>{
        setCART(cart)
    },[cart])
    return(
        <div>
       {
          CART?.map((cartItem,cartIndex,)=>{

            return(
             <div className="cartsum">
              <img src={cartItem.image} alt="img" width={180}/>
              
            <span className="cartshow">{cartItem. category}</span>
            
            <button className="click"
            onClick={()=>{
                const _CART =CART.map((item,index)=>{
                return cartIndex === index ? {...item, quantity : item.quantity > 1 ? item.quantity - 1 : 1} : item
            })
            setCART(_CART)
        }}
        >-</button>
         
            <span className="quan">{cartItem.quantity}</span>
            <button className="click"
              onClick={()=>{
                const _CART =CART.map((item,index)=>{
                    return cartIndex === index ? {...item,quantity : item.quantity + 1 } : item
                })
                setCART(_CART) 
              }}
            
            >+</button>
            <span className="rupee">Rs= {cartItem.price}</span>

            <button className="delete" onClick={(cartItem)=>{
              //let item1 =cartItem;
              console.log(cartItem);
              const dummyCart = CART;
              const _CART = dummyCart.filter((item,index)=>{
                return cartIndex !== index
              })
               setCART(_CART)  
            }}
            
           >Remove</button>


        </div>
         )
     })
  }
    <p className="total">TOTAL= <span className="green">

    {
       CART.map(item => item.price * item.quantity).reduce((total,value)=>total + value,0)
    }
    </span>
    </p>
    
   </div>
    )
};

export default Cart;