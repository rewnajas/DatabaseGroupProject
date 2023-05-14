import React from "react";
import style from "./admin.module.css";
import Profile from '../../component/profile/profile'
import Borrow from '../../component/borrow/borrow'
import FindHistory from '../../component/history/findHistory'
import CheckRequest from '../../component/checkRequest/checkRequest'

export default function admin() {
  return (
    <div className={style.wrapper}>
      <Profile />
      <Borrow />
      <FindHistory />
      <CheckRequest />
    </div>
  );
}
