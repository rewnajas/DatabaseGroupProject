import React from 'react'
import style from './guard.module.css'
import  Profile  from '../../component/profile/profile';
import  Borrow  from '../../component/borrow/borrow';
import  Findhistory  from '../../component/history/findHistory';
import DeliverWeapon from '../../component/deliverWeapon/deliverWeapon';
import ReturnWeapon from '../../component/returnWeapon/returnWeapon';

export default function guard() {
  return (
    <div className={style.wrapper}>
      <Profile />
      <Borrow />
      <Findhistory />
      <DeliverWeapon />
      <ReturnWeapon />
      
     
    </div>
  )
}