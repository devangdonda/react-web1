import React from "react";
import style from "./TopSection.module.css";

const TopSection = (props) => {
  return (
    <div className={style["top-container"]}>
      <div className={style.present}>
        <div className={style["heading-text"]}>Present</div>
        <ul className={style["description-text"]}>
          <li className={style["text-item"]}>
            I am currently working on implementing React to an
            advanced level in an upcoming Mega-Project.
          </li>
        </ul>
      </div>
      <div className={style["top-image-container"]}>
        <img src={props.image} className={style["top-image"]} />
      </div>
      <div className={style.future}>
        <div className={style["heading-text"]}>Future</div>
        <ul className={style["description-text"]}>
          <li className={style["text-item"]}>
            I will be wrapping up my Workout Project and wrap up with react.
          </li>
          <li className={style["text-item"]}>
            I may learn <b>Framer Motion</b> Library use it in my
            website and upcoming project.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopSection;
