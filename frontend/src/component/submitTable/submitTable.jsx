import React from "react";
import style from "./submitTable.module.css";
import { useLocation } from 'react-router-dom';

export default function SubmitTable() {
    const location = useLocation();
  const myState = location.state;
  console.log(myState)
  return (
    <div className={style.wrapper}>
      <div className={style.table_wrapper}>
        <div className={style.row}>
          <div className={style.name}>
            <h2>Weapon ID</h2>
          </div>
          <div className={style.type}>
            <h2>Weapon name</h2>
          </div>
          <div className={style.armory}>
            <h2>weapon type</h2>
          </div>
          <div className={style.available}>
            <h2>armory name</h2>
          </div>
          <div className={style.count}>
            <h2>borrow date</h2>
          </div>
          <div className={style.count}>
            <h2>return date</h2>
          </div>
        </div>

        <div className={style.row}>
          <div>
            <p>661</p>
          </div>
          <div>
            <p>อาร์พีจี-7</p>
          </div>
          <div>
            <p>อาร์พีจี</p>
          </div>
          <div>
            <p>คลังกรมสรรพาวุธทหารบก</p>
          </div>
          <div>
            <p>5/13/2021</p>
          </div>
          <div>
            <p>5/13/2021</p>
          </div>
          
        </div>
        <hr className={style.hr} />

        <div className={style.row}>
          <div>
            <p>661</p>
          </div>
          <div>
            <p>อาร์พีจี-7</p>
          </div>
          <div>
            <p>อาร์พีจี</p>
          </div>
          <div>
            <p>คลังกรมสรรพาวุธทหารบก</p>
          </div>
          <div>
            <p>5/13/2021</p>
          </div>
          <div>
            <p>5/13/2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
