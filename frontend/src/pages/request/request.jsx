import React from "react";
import Searchbar from "../../component/weapon-search-bar/searchbar";
import WeaponList from "../../component/weapon-list/weaponList";
import RequestList from "../../component/weapon-request-list/requestList";

export default function request() {
  return (
    <>
      <Searchbar />
      <WeaponList />
      <RequestList />
    </>
  );
}
