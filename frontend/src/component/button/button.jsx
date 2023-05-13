import React from 'react'
import style from './button.module.css'

export default function button() {
  return (
    
    <div className={style.wrapper}>
        <div className={style.button_wrapper}><button>return</button></div>
        <div className={style.button_wrapper}><button>confirm</button></div>
    </div>
    
  )
}
