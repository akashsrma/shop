import Logo from "../../assets/R.png"
// import Logo from "../../assets/kkk.jpg"
import logoo from "../../assets/edit.png"
import "./navbar.css"
import { Link } from "react-router-dom"


// import promotion from "../../assets/promotion.webp"
// import offer from "../../assets/OIP.jpg"
// import per from "../../assets/th.jpg"




const Navbar =(props)=>{
    return(
        <>
        <nav className="navbar">
              <div className="logo">
               <img src={Logo} alt="logo" className="logo"></img>
              </div>
              <div>
                 <Link to={"/"} className="bar"><p className="eagle">EAGLE  <span className="productscolor"> PRODUCTS</span> </p></Link>
              </div>
              <div className="navbarpage"> 
              <div className="three">
              <Link to={"/home"} className="home bar">HOME</Link>
              <Link to={"/shop"} className="shop bar">SHOP</Link>
              <Link to={"/signup"} className="signup bar">SIGNUP</Link>
             
              </div>

              <div>



              <Link to={"./cart"} className="cart">
                <div className="clor">
                <img src={logoo}alt="pict" className="logoo" />
                <sup className="count">{props.count}</sup>


                </div>      
                </Link> 
              </div>
            
              
              </div>

              
      </nav>
      {/* <div>
          
          <img src={promotion} className="promotion" alt="offer"></img>
    
    
           </div>
           <div className="about">
              <img src={offer} alt="offer" className="offer"></img>
             <img src={per} alt="per" className="per"></img>
         </div> */}


             

      </>
    )
}

export default Navbar;