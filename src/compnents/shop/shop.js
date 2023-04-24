
// import { Products } from"./component-card";
 
// import {Products} from "../shop/shop-card"
import "./shop.css"



const Card =({Products,addToCart}) =>{
    return(
        <div className="main">
        {Products.map((productItem)=>{
        return(
            <>
{
<div className="card">

    <div className="card-image">
        <img className="valueimage" src={productItem.image} alt={productItem.category}></img>
       <button className="btn-card"
        onClick={()=>  addToCart(productItem)}
       
       >Add To Cart</button>
       
    </div>
    <div className="card-content">
       <p className="title-name">{productItem.title}</p>
       <p className="category-name">{productItem.category}</p>
       <large>price:{productItem.price}</large>
       <br></br>
       <small>Rate:{productItem.rating}⭐</small>
    </div>
    
   
</div>



}
            
            </>
        );
    })}
    </div>
    )
};
export default Card;       
        
       


