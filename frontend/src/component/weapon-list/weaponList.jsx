import React from "react";
import style from "./weaponList.module.css";

export default function weaponList() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1>Available weapon</h1>
      </div>

      <div className={style.table_wrapper}>
        <div className={style.row}>
          <div className={style.name}>
            <h3>Weapon name</h3>
          </div>
          <div className={style.type}><h3>Weapon type</h3></div>
          <div className={style.armory}><h3>Armory name</h3></div>
          <div className={style.available}><h3>Available</h3></div>
          <div className={style.count}><h3>Amount</h3></div>
          <div></div>
          
        </div>

        <div className={style.row}>
          <div className={style.name}>
            <h3>fn five-seven</h3>
          </div>
          <div className={style.type}><p>semi-automatic pistol</p></div>
          <div className={style.armory}><p>armory</p></div>
          <div className={style.available}><p>655</p></div>
          <div className={style.count}><p></p></div>
          <div className={style.button}>
            <button>
              <h3>add to list</h3>
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}
