import React from "react";
import style from './Button.module.css';

const Button = (props) => {
  const handleClick = () => {
    window.open(props.src, "_blank");
  };

  return (
    <div class={style.box}>
      <div onClick={handleClick} className={`${style.btn} ${style['btn-three']}`}>
        {props.text}
      </div>
    </div>
  );
};

export default Button;
