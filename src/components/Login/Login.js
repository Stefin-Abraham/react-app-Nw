import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {

  return (
    <div className="LoginWrapper">
      <div className="login_Container">
        <p className="ticker">Ticker</p>
        <div className=""></div>
        <label className="login_txt" htmlFor="">Phone</label>
        <input  className="login_input" type="text" name="" id="" placeholder="Phone number" />
        <label className="login_txt"  htmlFor="">OTP</label>
        <input className="login_input" type="text" name="" id="" placeholder="OTP" />.
        <Link to="scanqr">
        <button className="login_btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;