import { useState  } from "react";
import "./Auth.css";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber,signOut } from "firebase/auth";

const Auth = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [user,setUser] = useState(null);
console.log(auth.currentUser)

const sentOtp = async() => {
try{
  let recaptchaVerifier = await new RecaptchaVerifier("recaptcha",{},auth)
   let confirmation = await signInWithPhoneNumber(auth,phone,recaptchaVerifier);
   console.log(confirmation);
   setUser(confirmation);
}catch(err){
    console.log(err)
}   
}

const verifyOtp = async() => {
   await user.confirm(otp)

}

const logOut  = async() => {
    await signOut(auth)
 
}

  return(
    <div className="auth_login">
        <input type="num" placeholder="enter phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <button onClick={sentOtp}>Send Otp</button>
             
             <div id="recaptcha"></div>

        <input
           type="text"
           placeholder="enter otp"
           value={otp}
           onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={verifyOtp}>Confirm Otp</button>
        <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default Auth;