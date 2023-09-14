import React, { useCallback, useEffect, useState } from "react";
import style from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import logo from "../../images/muszelusLogo.png";
import { useSelector, useDispatch } from "react-redux";
import {navlinkActions} from '../store/navlink';

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const clicked = useSelector((state) => state.navlink.clicked);
  const dispatch = useDispatch();

  const linkClickHandler = (num) => {
    dispatch(navlinkActions.setClicked(num));
    setIsMenuVisible(!isMenuVisible);
  };

  const showButton = useCallback(() => {
    if (window.innerWidth > 790) {
        setIsMenuVisible(false); }
  },[window.innerWidth > 790]);

  window.addEventListener('resize',showButton);
  return (
    <header className={style.navbar}>
      <div className={style["navbar-container"]}>
        {/* Item 1 */}
        <NavLink to="/" className={style["navbar-logo"]} onClick={() => {setIsMenuVisible(false); dispatch(navlinkActions.setClicked(-1));}}>
          <img src={logo} className={style.logo} />
          <div>Muszelus</div>
        </NavLink>
        {/* Item 2 */}
        <div className={style["menu-icon"]} onClick={() => linkClickHandler(-1)}>
          <i
            className={
              isMenuVisible ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"
            }
          />
        </div>
        {/* Item 3 */}
        <ul className={isMenuVisible ? `${style["navbar-items"]} ${style["active"]}` : style["navbar-items"]}>
          <li className={clicked===0 ? `${style["nav-item"]} ${style["active"]}` : style["nav-item"]} onClick={() => linkClickHandler(0)}>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li className={clicked===1 ? `${style["nav-item"]} ${style["active"]}` : style["nav-item"]} onClick={() => linkClickHandler(1)}>
            <NavLink to="education">Education</NavLink>
          </li>
          <li className={clicked===2 ? `${style["nav-item"]} ${style["active"]}` : style["nav-item"]} onClick={() => linkClickHandler(2)}>
            <NavLink to="profession">Profession</NavLink>
          </li>
          <li className={clicked===3 ? `${style["nav-item"]} ${style["active"]}` : style["nav-item"]} onClick={() => linkClickHandler(3)}>
            <NavLink to="persona">Persona</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
