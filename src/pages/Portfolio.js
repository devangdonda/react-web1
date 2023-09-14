import React from "react";
import profilePic from "../images/profile.jpg";
import Contain from "../components/cards/Contain";
import Button from "../components/button/Button";
import resume from "../docs/DevangCICSResume.pdf";
import TopSection from "../components/topSection/TopSection";
import style from "./Portfolio.module.css";

const PortfolioPage = () => {
  return (
    <div>
      <div>
        <Contain color={"#deb85f"}>
          <TopSection image={profilePic} />
        </Contain>
        <Contain color={"#fcfc72"}>
          <div className={style["past-profile"]}>
            <ul>
              <div className={style["text-title"]}>
                This is something about me!
              </div>
              <li>
                I am Studying Computer Science and Physics(Joint Majors) at
                Memorial University of Newfoundland and will be finishing my
                Bachelor's Degree in 2025.
              </li>
              <li>
                I am also an actor. I have gained much theatre experience in St.
                John's and woked in many projects and gigs.
              </li>
              <li>
                Please visit my **Profession page for more information about my
                acting journey and also to learn about my projects in Computer
                Science/.
              </li>
            </ul>
          </div>
          <div className={style.resume}>
            <div>Here is the link to my resume, Please have a Look :</div>
            <div className={style['resume-button']}><Button text="Resume" src={resume} /></div>
          </div>
        </Contain>
      </div>
    </div>
  );
};

export default PortfolioPage;
