import React ,{useEffect, useState} from 'react'
import SubmitTable from '../../component/submitTable/submitTable'
import TextBox from '../../component/textbox/textbox'
import Button from '../../component/button/button'
import axios from '../../lib/axios'

export default function SubmitForm() {
  const [submit,setSubmit] = useState(false)
  const [weapon,setWeapon] = useState([])
  const [reason,setReason] = useState('')

  

  useEffect(()=>{
    console.log(reason)
    console.log(weapon)

    axios.post('http://localhost:8000/borrow',{
      weapon : weapon,
      reason : reason
    })
  },[submit])

  return (
    <>
    <SubmitTable setWeapon={weapon=>setWeapon(weapon)}/>
    <TextBox  setReason={reason=>setReason(reason)}/>
    <Button setSubmit={submit=>setSubmit(submit)}/>
    </>
  )
}
