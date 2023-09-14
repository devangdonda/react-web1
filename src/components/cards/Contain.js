import React from "react";
import classes from './Contain.module.css';

const Contain = (props) => {
  return <div className={classes.contain} style={{backgroundColor: props.color}}>{props.children}</div>;
};

export default Contain;
