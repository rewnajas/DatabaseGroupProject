import React from "react";
import style from "../weapon-list/weaponList.module.css";

export default function requestList(props) {
  
  const uniqueWeaponInfo = props.wishList.reduce((accumulator, current) => {
    const isDuplicate = accumulator.some(
      (item) => item.weapon_name === current.weapon_name
    );
    if (!isDuplicate) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  console.log(uniqueWeaponInfo);
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1>request list</h1>
      </div>

      {uniqueWeaponInfo.map((val) => {
        return (
          <div className={style.table_wrapper}>
            <div className={style.row}>
              <div className={style.name}>
                <h2>Weapon name</h2>
              </div>
              <div className={style.type}>
                <h2>Weapon type</h2>
              </div>
              <div className={style.armory}>
                <h2>Armory name</h2>
              </div>
              <div className={style.available}>
                <h2>amount</h2>
              </div>
              <div className={style.count}>
                <h2>borrow date</h2>
              </div>
              <div>
                <h2>return date</h2>
              </div>
            </div>

            <div className={style.row}>
              <div className={style.name}>
                <h3>{val.weapon_name}</h3>
              </div>
              <div className={style.type}>
                <p>{val.weapon_type}</p>
              </div>
              <div className={style.armory}>
                <p>{val.armory_name}</p>
              </div>
              <div className={style.available}>
                <p>{val.amount}</p>
              </div>
              <div className={style.count}>
                <div className={style.amout_wrapper}>
                  <input type="date" className={style.input_date} />
                </div>
              </div>
              <div className={style.button}>
                <input type="date" className={style.input_date} />
              </div>
            </div>
            <hr className={style.hr} />
          </div>
        );
      })}
    </div>
  );
}
