// import Firstpage from "../firstpage/first";
import Image from "../../assets/OIP (1).jpg"
import Imagee from "../../assets/OIP 2.jpg"
import Imageee from "../../assets/OIP 3.jpg"
import Imageeee from "../../assets/earth.webp"
import "./home.css"

const Home = ()=>{
    return(
        <>
        <div className="main-cart">

            <div className="photo">
             <img src={Image} alt="image" className="image"></img>
             <div className="menshoes">
                <p className="colormens">MEN'S SHOES</p>
                <p>price:<span>666</span></p>
             </div>
         </div> 
         <div className="photo">
             <img src={Imagee} alt="image" className="image"></img>
             <div className="menshoess">
                <p className="colormens">LUXURY WATCH</p>
                <p>price:<span>1111</span></p>
             </div>
         </div> 
         <div className="photo">
             <img src={Imageee} alt="image" className="image"></img>
             <div className="menshoesss">
                <p className="colormens">SPORTS PLAY</p>
                <p>price:<span>Offer%</span></p>
             </div>
         </div> 
         <div className="photo">
             <img src={Imageeee} alt="image" className="image"></img>
             <div className="menshoessss">
                <p className="colormens">MEN'S SHOES</p>
                <p>price:<span>129</span></p>
             </div>
         </div> 

         
    
        </div>
        
        </>
    )
};

export default Home;