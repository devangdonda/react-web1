import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/footer/Footer";
import style from "./Root.module.css";
import { useSelector } from "react-redux";

const RootPage = () => {
    const isChildRouteActive = useSelector(state => state.navlink.clicked === -1);
  return (
    <>
      <NavBar />
      {isChildRouteActive && (
        <div className={style.root}>
          <div className={style["root-title"]}>Hello Everyone</div>
          <div className="root-content">
            *** Welome to my Personal Branding Website. ***
            <br />
            <br />- I am assuming that you heard about me already and want to
            know more.
            <br />
            <br />- Please feel free to explore the website and know about me.
            <br />
            <br />- This website might still be in development process.
            <br />
            <br />- It will soon be completed. Thank you for your patience
          </div>
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
