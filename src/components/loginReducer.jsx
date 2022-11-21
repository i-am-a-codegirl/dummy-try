import { useReducer} from "react";

export function useLogin(){
    const [loginInfo, loginInfoDispatch] = useReducer(login,{   
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    rememberMe: false});

    function login(state, {type,payload}){
        switch(type){
            case "EMAIL":
                return {...state,email:payload};
            case "pwd":
                return{...state, password:payload};
            case "remember":
                return{...state,rememberMe:!state.rememberMe};
        }
        
    }

    return [loginInfo, loginInfoDispatch];

}