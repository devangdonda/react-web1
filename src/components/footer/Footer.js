import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import { navlinkActions } from "../store/navlink";
import { useDispatch } from "react-redux";

const Footer = () => {
  const  dispatch = useDispatch();

  const footerLinkHandler = (num) => {
    dispatch(navlinkActions.setClicked(num));
  }

  return (
    <div className={style["footer-container"]}>
      <div className={style.brand}>
        <div className={style["footer-text"]}>Brand</div>
        <ul className={style["brand-list"]}>
          <li className={style["brand-item"]} onClick={() => {footerLinkHandler(0)}}>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li className={style["brand-item"]} onClick={() => {footerLinkHandler(1)}}>
            <Link to="education">Education</Link>
          </li>
          <li className={style["brand-item"]} onClick={() => {footerLinkHandler(2)}}>
            <Link to="profession">Profession</Link>
          </li>
          <li className={style["brand-item"]} onClick={() => {footerLinkHandler(3)}}>
            <Link to="persona">Persona</Link>
          </li>
        </ul>
      </div>
      <div className={style ["social-media"]}>
        <div className={style["footer-text"]}>Social Media</div>
        <ul className={style["social-media-list"]}>
          <li className={style["social-media-item"]}>
            <a href="https://www.facebook.com/profile.php?id=100071166443765&mibextid=ZbWKwL" target="_blank">
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
          </li>
          <li className={style["social-media-item"]}>
            <a href="https://instagram.com/devangdonda?igshid=Mzc0YWU1OWY=" target="_blank">
              <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
          </li>
          <li className={style["social-media-item"]}>
            <a href="https://www.imdb.com/name/nm13740618/?ref_=ext_shr_lnk" target="_blank">
              <i class="fab fa-imdb fa-2x"></i>
            </a>
          </li>
          <li className={style["social-media-item"]}>
            <a href="https://www.backstage.com/u/donda_devang-dk/" target="_blank">
            <i class="fa-sharp fa-solid fa-b fa-2x"></i>
            </a>
          </li>
          <li className={style["social-media-item"]}>
            <a href="###" target="_blank">
              <i class="fa-brands fa-tiktok fa-2x"></i>
            </a>
          </li>
          <li className={style["social-media-item"]}>
            <a href="###" target="_blank">
              <i class="fa-brands fa-snapchat fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={style["contact-me"]}>
        <div className={style["footer-text"]}>Contact Me</div>
        <ul className={style["contact-me-list"]}>
          <li className={style["contact-me-item"]}>
            <a href="https://www.linkedin.com/in/devang-donda" target="_blank">
              <i class="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li className={style["contact-me-item"]}>
            <a href="https://github.com/DKDonda" target="_blank">
              <i class="fa-brands fa-github fa-2x"></i>
            </a>
          </li>
          <li className={style["contact-me-item"]}>
            <a href="mailto:dkdonda@gmail.com" target="_blank">
              <i class="far fa-envelope fa-2x"></i>
            </a>
          </li>
          <li className={style["contact-me-item"]}>
            <a href="https://instagram.com/devangdonda?igshid=Mzc0YWU1OWY=" target="_blank">
              <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
