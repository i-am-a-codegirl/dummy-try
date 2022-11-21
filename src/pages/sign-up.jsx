import Navabar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "../components/signupReducer";
import { useState } from "react";
import { postUserSignUp } from "../api";

export const SignUp = ({ props }) => {
const [signUpInfo, signUpInfoDispatch] = useSignUp();
const [error,setError] = useState("");
const navigate = useNavigate();

async function onSignUpHandler(){

    try {
       
       await postUserSignUp(signUpInfo);
       setError("");
       navigate("/");
        
    } catch (error) {
      setError(error.response.data.message)   
    }

   
}


  return (
    <div>
      <Navabar />
      <button type="button" className="btn btn-fab">
        <i className="fa fa-bars"> </i>
      </button>

      <div className="login-box">
        <h1 className="bestseller-heading">SIGN UP</h1>

        <label for="">Email</label>
        <input
          style={{ marginLeft: "1.2rem" }}
          type="text"
          value={signUpInfo.email}
          className="user-input"
          onChange={(e)=>{ signUpInfoDispatch({type:"EMAIL", payload:e.target.value})}}
        />

        <label for="">Password</label>
        <input
          style={{ marginLeft: "1.2rem" }}
          type="password"
          value={signUpInfo.password}
          className="user-input"
          onChange={(e)=>{ signUpInfoDispatch({type:"pwd", payload:e.target.value})}}
        />

        <div style={{ marginLeft: "1.2rem" }} className="agreement-policy">
          <input className="check-box-input" type="checkbox" />
          <p>I agree to the terms & policy</p>
        </div>

        <button className="login-btn" onClick={onSignUpHandler}>Sign Up</button>

        <div className="create-account">
          <Link to="/login">already have an account? Login</Link>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};
