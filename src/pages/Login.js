import React from 'react';
import {auth,provider} from "../firebase-config";
import { signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom';

function Login({setAuth}) {
  let navigate=useNavigate();
  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        localStorage.setItem("isAuth",true);
        setAuth(true);
        navigate("/");
    });
  };
  return (
    <div className='loginpage'>
      <p>Sign In With Google To Continue</p>
      <button className='login-button' onClick={signInWithGoogle}>SignIn With Google</button>
    </div>
  );
}

export default Login;