
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../signup/signup.css"


const Login = ()=>{
  const provider = new GoogleAuthProvider();
const auth = getAuth();

const handleSubmit =()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;


    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
  });
}

return(
    <div className="signupgoogle">

       <button className="sign" 
       onClick={handleSubmit}
       >Sign with Google</button>
       <button className="signn">Sign Out</button>
    </div>
  )
}

export default Login;