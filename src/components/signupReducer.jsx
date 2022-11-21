import { useReducer } from "react"

export const useSignUp = () => {
    const [signUpInfo, signUpInfoDispatch] = useReducer(signUp, {
        email:"",
        password:"",
        policy: false
    })


    function signUp(state,{type,payload}){

        switch(type){
            case "EMAIL":
                return {...state,email:payload};
            case "pwd":
                return{...state, password:payload};
            case "policy":
                return{...state,policy:!state.policy};
        }

    }
  
    return [signUpInfo,signUpInfoDispatch];

}