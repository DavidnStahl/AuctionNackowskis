import React, {createContext,useState} from 'react';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const [loginName, setLoginName] = useState();
    const [loginError, setLoginError] = useState();
    
    const setSessionUser = (name) =>{
        if(name.length > 1){
            sessionStorage.setItem("user",name)
            setLocalStorageUser(name);
            setLoginName(name);
        }else{
          setLoginError("minimum characters is 2")
        }    
    }
    const setLocalStorageUser = (name) => {
        console.log(name)
        let users = JSON.parse(localStorage.getItem("users"))
        console.log(users)
        if(users !== null){
            let checkIfUserExistInLocalStorage = users.filter(user => user === name)
            console.log(checkIfUserExistInLocalStorage)
            if(checkIfUserExistInLocalStorage.length === 0){
                console.log("not in storage");
                users.push(name);
                localStorage.setItem("users",JSON.stringify(users))
            }else {
                console.log("was in storage")
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