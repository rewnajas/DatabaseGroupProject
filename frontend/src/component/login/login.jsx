import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState('')
  const navigate = useNavigate()

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(
      "http://localhost:8000/login",
      {
        username: username,
        password: password,
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
        <input type="text" required onChange={handleUsername} />

        <h3>Password</h3>
        <input type="password" required onChange={handlePassword} />
        
        <button>Login</button>
        {message && <h3>{message}</h3>} 
      </form>
      </div>
    </div>
    </>
  );
}
