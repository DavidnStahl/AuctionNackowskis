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
            <br/>
            <h1>Login</h1>
            <div className="wrapper fadeInDown">
            <div id="formContent">
                <br/>
            <label className="text-white" for="login"><h4>Username:</h4></label>
            <br/>
            <span className="text-danger">{loginError}</span>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="Write your name" ref={name} />
                <br/>
                <br/>
                <button className="fadeIn fourth btn btn-primary" onClick={() => {setSessionUser(name.current.value)}}>Login</button>
                <br/>
                <br/>
            </div>
            </div>
        </div>
    )
})

export default Login





