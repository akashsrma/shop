


import promotion from "../../assets/img.jpg"
import offer from "../../assets/OIP.jpg"
import per from "../../assets/th.jpg"

const Firstpage =()=>{
    return(
       <> 
      <div>
          
      <img src={promotion} className="promotion" alt="offer"></img>


       </div>
       <div className="about">
          <img src={offer} alt="offer" className="offer"></img>
         <img src={per} alt="per" className="per"></img>
     </div>
 </>
    )
}

export default Firstpage;


