
import React from 'react'
import style from './homepage.module.css'
import  Profile  from '../../component/profile/profile';
import  Borrow  from '../../component/borrow/borrow';
import  Findhistory  from '../../component/history/findHistory';

export default function homepage() {
  
  return (
    <div className={style.wrapper}>
      <Profile />
      <Borrow/>
      <Findhistory/>
    </div>
    
      
    
   
    
      
 
 
);
}