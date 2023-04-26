import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./login.module.css";

export default function Login() {
  const username = useRef()
  const password = useRef()
  const [message,setMessage] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(
      "http://localhost:8000/login",
      {
        username: username.current.value,
        password: password.current.value,
      },
      {
        withCredentials: true,
      }
    ).then((response)=>{
      if(response.status === 200) {

        if(response.data.role === 'user') {
          navigate('/homepage')
        }
        
        else if(response.data.role === 'admin'){
          navigate('/admin')
        } else {
          navigate('/guard')
        }
      }

    }).catch((err)=>{
      console.log(err)
      setMessage('Invalid username or password')
    })
  }
  return (
    <>
    <div className={style.wrapper}>

      <div className={style.header}><h1>Login</h1></div>

      <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input type="text" required ref={username} />

        <h3>Password</h3>
        <input type="password" required ref={password} />
        
        <button>Login</button>
        {message && <h3>{message}</h3>} 
      </form>
      </div>
    </div>
    </>
  );
}
