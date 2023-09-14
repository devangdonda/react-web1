import React from "react";
import style from "./CardLink.module.css";
import { NavLink } from "react-router-dom";

const CardLink = (props) => {
  return (
      <div className={style.card}>
        <div className={style["card-container"]}>
          <NavLink to="" className={style["card-link"]}>
            <div className={style["image-container"]}>
              <img src={props.src} alt="" />
            </div>
            <div className={style["text-container"]}>
              <div className={style["card-logo"]}>
                
                <i className="fa-regular fa-thumbs-up fa-2x" />
                
                <p className={style['card-for']}>{props.cardFor}</p>
                </div>
              <div className={style["card-description"]}>{props.description}</div>
            </div>
          </NavLink>
        </div>
      </div>
  );
};

export default CardLink;
