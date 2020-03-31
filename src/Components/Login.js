import React,{useRef,useContext,useEffect} from 'react'
import './Login.css'
import {LoginContext} from '../Contexts/LoginContext';

const Login = React.memo(() => {
    const [loginName, setLoginName,setSessionUser,loginError, setLoginError] = useContext(LoginContext);
    const name = useRef()
    
    useEffect(() => {
    
    },[loginError,setSessionUser])

    useEffect(() => {
        setLoginError("")
    },[])

    return (
        <div className="container text-center">
            <div className="wrapper fadeInDown">
            <div id="formContent">

            <div className="fadeIn first">
            <img src="https://www.freeiconspng.com/uploads/login-button-png-5.png" id="icon" alt="User Icon" />
            </div>
            <span className="text-danger">{loginError}</span>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="Write your name" ref={name} />
                <br/>
                <button className="fadeIn fourth btn btn-primary" onClick={() => {setSessionUser(name.current.value)}}>Log in</button>
                <br/>
            </div>
          </div>
        </div>
    )
})

export default Login




