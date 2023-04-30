import React from "react";
import style from "./navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar(props) {
  return (
    <div className={style.nav}>
      <div className={style.left}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.armanent}>
          <h1>ARMDNENT DEPOT</h1>
        </div>
      </div>

      <div className={style.right}>
        <div className={style.title}>
          <p>{props.title}</p>
        </div>
        <div className={style.hamberger}>hamberger</div>
      </div>

      
    </div>
  );
}
