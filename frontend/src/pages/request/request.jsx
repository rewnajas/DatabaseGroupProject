import React, { useState } from "react";
import Searchbar from "../../component/weapon-search-bar/searchbar";
import WeaponList from "../../component/weapon-list/weaponList";
import RequestList from "../../component/weapon-request-list/requestList";
import Button from "../../component/next-button/button";
export default function Request() {
  const [weaponList, setWeaponList] = useState([]);
  const [wishList, setWishList] = useState([]);

  return (
    <>
      <Searchbar
        setWeapon={(list) =>
          setWeaponList((prevList) => [...prevList, ...list])
        }
      />
      <WeaponList
        wishList={wishList}
        setWishList={(wishList) => setWishList(wishList)}
        weaponInfo={weaponList}
        setWeaponInfo={setWeaponList}
      />
      <RequestList wishList={wishList} />
      {wishList.length > 0 && <Button />}
    </>
  );
}
