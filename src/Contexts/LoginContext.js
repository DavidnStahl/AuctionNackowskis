import React, {createContext,useState} from 'react';
import {useHistory} from 'react-router'

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const [loginName, setLoginName] = useState();
    const [loginError, setLoginError] = useState();
    const history = useHistory();
    
    const setSessionUser = (name) =>{
        if(name.length > 1){
            sessionStorage.setItem("user",name)
            setLocalStorageUser(name);
            setLoginName(name);
            history.push('/')
            
        }else{
          setLoginError("minimum characters is 2")
        }    
    }
    const setLocalStorageUser = (name) => {
        let users = JSON.parse(localStorage.getItem("users"))
        if(users !== null){
            let checkIfUserExistInLocalStorage = users.filter(user => user === name)
            console.log(checkIfUserExistInLocalStorage)
            if(checkIfUserExistInLocalStorage.length === 0){
                users.push(name);
                localStorage.setItem("users",JSON.stringify(users))
            }else {
            }
        }else {
            let arr = [name]
            localStorage.setItem("users",JSON.stringify(arr))
        }       
    }
     return (
          <LoginContext.Provider value={[loginName, setLoginName,setSessionUser,loginError, setLoginError]}>
            {props.children}
          </LoginContext.Provider>
  )   
}
export default LoginContextProvider