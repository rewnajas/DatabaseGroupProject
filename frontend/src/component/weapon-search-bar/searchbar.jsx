import React, { useEffect, useState } from "react";
import style from "./searchbar.module.css";
import useSuggestBar from "../../customHooks/useSuggestBar";

export default function Searchbar(props) {
  const [searchString, setSearchString] = useState("");
  const [resultlist] = useSuggestBar(
    searchString,
    "http://localhost:8000/user/search"
  );

  const handleClick = (val) => {
    props.setWeapon([val]);
    setSearchString('');
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h1>Create Request</h1>
        <div className={style.line}>
          <hr />
        </div>
      </div>

      <div className={style.input_wrapper}>
        <div className={style.list_wrapper}>
          <input
            value={searchString}
            type="text"
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Weapon Name"
            className={style.input}
          />
          {resultlist.map((val) => {
            return (
              <div onClick={() => handleClick(val)} className={style.list}>
                {val.weapon_name}
              </div>
            );
          })}
        </div>
        <div className={style.button}>
          <button>
            <h3>Search</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
