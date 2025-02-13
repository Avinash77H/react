import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const ContextProvider = ({children})=>{
  const[isAuth,setIsAuth] = useState(false);
  const[authData,setAuthData] = useState([]);
  const[currentUser,setCurrentUser] = useState({});
  return(
    <AuthContext.Provider value={{isAuth,setIsAuth,authData,setAuthData,currentUser,setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default ContextProvider;

export const useAuth = () => useContext(AuthContext);

