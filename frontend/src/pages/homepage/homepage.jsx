//i here rew
import React, { useEffect } from 'react'
import Navbar from '../../component/navbar/navbar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

export default function Homepage() {

  useEffect(()=>{
    axios.get('http://localhost:8000/userTest',{
      withCredentials: true
    })
    .then(()=>{
      console.log('finish')
    })
  })
  return (
    <>
     <h1>Homepage</h1>
    </>
  )
}
