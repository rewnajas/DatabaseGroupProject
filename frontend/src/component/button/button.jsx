import React from 'react'
import style from './button.module.css'
import { useNavigate } from 'react-router-dom'

export default function Button() {
  const navigate = useNavigate()

  const handleConfirmClick = () => {
    alert('your request have been record')
    navigate('/homepage')
  }

  return (
    <div className={style.wrapper}>
      <div className={style.button_wrapper}>
        <button onClick={() => navigate('/homepage/request')}>
          return
        </button>
      </div>
      <div className={style.button_wrapper}>
        <button onClick={handleConfirmClick}>confirm</button>
      </div>
    </div>
  )
}
