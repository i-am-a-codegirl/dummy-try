import Navabar from "../components/Navbar";
import Footer from "../components/Footer";
import {postUserLogin} from "../api"; //a
import {useLogin} from "../components/loginReducer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserData } from "../components/auth/userData";


export const Login = () => {

const [loginInfo,loginInfoDispatch] = useLogin(); //a



const [error,setError] = useState("");
const navigate = useNavigate();
const {userData, userDataDispatch} = useUserData();

async function onClickLoginHandler(){

  try {
    let response = await postUserLogin(loginInfo);
    setError("");
   
    
    userDataDispatch({type:"LOGIN",payload: response.data});

    navigate("/");

  } catch (error) {
    setError(error.response.data.message);
  }
}


  return (
    <div>
      <Navabar />
      <button type="button" className="btn btn-fab">
        <i className="fa fa-bars"> </i>
      </button>

      <div className="login-box">
        <h1 className="bestseller-heading">LOGIN</h1>

        <label for="" 
      >
          Email</label>

        <input type="text"  

        value={loginInfo.email} 
        onChange={(e)=>{
          loginInfoDispatch({type:"EMAIL",payload:e.target.value})
       
       }}  className="user-input" />

        <label for="">Password</label>

        <input type="password"   
        value={loginInfo.password} 
        onChange={(e)=>{
          loginInfoDispatch({type:"pwd",payload:e.target.value})
        }}  className="user-input" />

        <div className="agreement-policy">
          <input className="check-box-input" type="checkbox" />
          <p>Remember me</p>
        </div>

        <button className="login-btn" onClick={onClickLoginHandler}>Login</button>

        <div className="create-account">
        <Link to="/signup">Create account </Link>{" "}

        </div>
      </div>
      <Footer />
    </div>
  );
};
