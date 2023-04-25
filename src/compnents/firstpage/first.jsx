


import promotion from "../../assets/img.jpg"
import offer from "../../assets/OIP.jpg"
import per from "../../assets/th.jpg"
import people from "../../assets/people offer.jpg"
import peoplee from "../../assets/good.png"
import ding from "../../assets/ding.jpg"
import special from "../../assets/specialoffer.jpg"
import "./first.css"



const Firstpage =()=>{
    return(
       <> 
      <div>
          
      <img src={promotion} className="promotion" alt="offer"></img>


       </div>
       <div>
        <img src={people} alt="people" className="people"/>
        <img src={peoplee} alt="peoplee" className="peoplee"/>
        <img src={ding} alt="peopleee" className="peopleee"/>
        <img src={special} alt="special" className="specialoffer"/>
        


       </div>
       <div className="about">
          <img src={offer} alt="offer" className="offer"></img>
         <img src={per} alt="per" className="per"></img>
     </div>

     <div className="background">
        <p className="us">ABOUT_US</p>
     </div>


     
 </>
    )
}

export default Firstpage;


