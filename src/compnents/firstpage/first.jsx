


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

     <div className="footer">
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/press">Press</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/shipping">Shipping Information</a></li>
          <li><a href="/returns">Returns & Exchanges</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Connect</h3>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
          <li>
            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </li>
        </ul>
      </div>
    </div>
 </>
    )
}

export default Firstpage;


