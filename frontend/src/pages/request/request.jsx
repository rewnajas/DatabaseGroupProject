import React, { useState } from "react";
import Searchbar from "../../component/weapon-search-bar/searchbar";
import WeaponList from "../../component/weapon-list/weaponList";
import RequestList from "../../component/weapon-request-list/requestList";

export default function Request() {
  const [weaponList,setWeaponList] = useState([])
  
  return (
    <>
      <Searchbar setWeapon={list=>setWeaponList(prevList => [...prevList, ...list])}/>
      <WeaponList weaponInfo={weaponList}/>
      <RequestList />
    </>
  );
}
