import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function IsUser() {
  const [loading,setLoading] = useState(true)
  const [permission,setPermission] = useState(false)

  useEffect(()=>{
    axios.get('http://localhost:8000/isAdmin',{
      withCredentials: true
    })
    .then((response)=>{
      if(response.status === 200) {
        setPermission(true)
      }
    }).catch((err)=>console.log(err))
    .finally(()=>{
      setLoading(false)
    })

  })

  if(loading) return null
  return permission?<Outlet/>:<h1>Unautorized access</h1>
 
}

