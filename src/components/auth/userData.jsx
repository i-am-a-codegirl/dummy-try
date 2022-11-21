import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { userDataReducer } from "./userDataReducer";

const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {
    const [userData, userDataDispatch] = useReducer(userDataReducer, {
        user: {
          _id: "",
          firstName: "",
          lastName: "",
          email: "",
          createdAt: "",
          updatedAt: "",
          cart: [],
          wishlist: [],
          id: "",
        },
        encodedToken: "",
      });

    const isAuth = () =>
    userData.encodedToken !== "" && userData.encodedToken !== undefined; //a

    return(
        <>
        <UserDataContext.Provider value = {{userData,userDataDispatch,isAuth}}>
            {children}
        </UserDataContext.Provider>
        </>
    )
}

export const useUserData = ()=> {
    return useContext(UserDataContext);
}