import axios from "axios";

//api daldena agr khi bhi age koi url aajata h so we just have to update the base url
const BASEURL = "";

export function postUserLogin({ email, password }) {
    return axios.post(BASEURL + "/api/auth/login", {
      email,
      password,
    });
  }
  ///cart wala , profile

  export function postUserSignUp({email,password}){
    
return axios.post(BASEURL + "/api/auth/signup", {email, password})
  }
  
