import React from "react";
import style from "./request.module.css";
import WeaponList from "../../component/weapon-list/weaponList";
import RequestList from "../../component/weapon-request-list/requestList";
export default function request() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1>Create Request</h1>
        <div className={style.line}>
          <hr />
        </div>
        </div>

        <div className={style.input_wrapper}>
          <input type="text" placeholder="Weapon Name" className={style.input} /> <br />
          <div className={style.button}>
            <button>
              <h3>Search</h3>
            </button>
          </div>
        </div>
        <WeaponList/>
        <RequestList/>
      
    </div>
  );
}
