import React from 'react'
import style from './textbox.module.css'

export default function textbox() {
  return (
    <div className={style.wrapper}>
        <div className={style.table_wrapper}>
            <div className={style.row}><h2>Reason of Request</h2></div>
            <div className={style.row}><input type="text" /></div>
        </div>
    </div>
  )
}
