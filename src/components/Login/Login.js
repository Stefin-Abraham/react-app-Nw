import React from "react";
import "./Login.css";
import { useState } from "react";
import { firebase, auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [mynumber, setnumber] = useState("");
  let fnum = `+91${mynumber}`;
  console.log("fnum", fnum);
  const [otp, setotp] = useState("");
  const [final, setfinal] = useState("");

  /*
  
  */
  const signin = () => {
    if (fnum === "" || fnum.length < 10) return;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(fnum, verify)
      .then((result) => {
        setfinal(result);
        alert(`Otp sent to your phone ${fnum}`);
      })
      .catch((err) => {
        window.location.reload();
      });
  };

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        navigate("/Myticket");
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <div className="LoginWrapper">
      <div className="login_Container">
        <p className="ticker">Ticker</p>
        <div className=""></div>
        <label className="login_txt" htmlFor="">
          Phone
        </label>
        <input
          value={mynumber}
          onChange={(e) => {
            setnumber(e.target.value);
          }}
          placeholder="phone number"
          className="login_input"
          type="text"
          name=""
          id=""
        />
        <label className="login_txt" htmlFor="">
          OTP
        </label>
        <input
          placeholder={"Enter your OTP"}
          onChange={(e) => {
            setotp(e.target.value);
          }}
          className="login_input"
          type="text"
          name=""
          id=""
        />
        <button className="login_btn" onClick={signin}>
          Get OTP
        </button>
        <button onClick={ValidateOtp} className="login_btn">
          Login
        </button>
      </div>

      <center>
        <div style={{ marginTop: "50px" }} id="recaptcha-container"></div>
      </center>
    </div>
  );
}

export default Login;
