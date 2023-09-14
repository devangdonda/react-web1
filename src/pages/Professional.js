import React from "react";
import style from "./Professional.module.css";
import resume from "../docs/DevangDondaActingResume.pdf";
import headshot from "../images/headshot.png";
import Button from "../components/button/Button";

const ProfessionalPage = () => {
  return (
    <>
      <div className={style.profession}>
        I Know what I want to persue. It's just that This page is not yet
        developed. Goals are fixed, soon will be this page. Thank you for your
        patience.
      </div>
      <div>
        <div className={style.acting}>
          <img src={headshot} alt="" />
          <p>This is my Acting Resume and link to my demo reels:</p>
          <Button src={resume} text="Resume"></Button>
        </div>
      </div>
    </>
  );
};

export default ProfessionalPage;
