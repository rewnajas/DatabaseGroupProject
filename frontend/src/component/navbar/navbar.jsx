import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './navbar.module.css';
import './hamburger.css'

function Navbar() {
  

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  
  const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
    }
    else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
}

  return (
    <>
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        <Link to="/" className={style.navbar_logo}>
          <img
            src={logo}
            alt="logo"
            style={{ width: '50px', height: 'auto' }}
          />
        </Link>
        <Link to="/" className={style.navbar_armanent}>
          ARMANENT DEPOT
        </Link>
        <Link to="/profile" className={style.navbar_guard}>
          GUARD
        </Link>
        <div >
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
            <Link to="/" className="navbar_slide">
              HOME
            </Link>
            <Link to="/profile" className="navbar_slide">
             PROFILE
           </Link>
           <Link to="/log out" className="navbar_slide">
              LOG OUT
            </Link>
            </div>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Navbar;
