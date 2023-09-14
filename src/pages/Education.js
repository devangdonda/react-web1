import React from "react";
import CardLink from "../components/cards/CardLink";
import Contain from "../components/cards/Contain";
import style from "./Education.module.css";
import acting from "../images/education/acting.jpg";
import algebra from "../images/education/algebra.jpg";
import calculus from "../images/education/calculus.jpg";
import organicChemistrying from "../images/education/organicChemistry.jpg";
import reactjs from "../images/education/reactjs.jpg";
import relativity from "../images/education/relativity.jpg";
import sound from "../images/education/sound.jpg";
import TopSection from "../components/topSection/TopSection";
import education from '../images/education.jpeg';

const desc = "This course will teach you everything about";
const DUMMY_EDUCATION = [
  { src: reactjs, cardFor: "React JS", description: `${desc} React JS` },
  { src: calculus, cardFor: "Caluclus", description: `${desc} Calculus` },
  {
    src: relativity,
    cardFor: "Special Theory of Relativity",
    description: `${desc} Special Theory of Relativity`,
  },
  { src: acting, cardFor: "Acting", description: `${desc} Acting` },
  {
    src: organicChemistrying,
    cardFor: "Organic Chemistry",
    description: `${desc} Organic Chemistry`,
  },
  {
    src: sound,
    cardFor: "Sound and Wave",
    description: `${desc} Sound and Wave`,
  },
  { src: algebra, cardFor: "Algebra", description: `${desc} Algebra` },
];

const EducationPage = () => {
  return (
    <>
      <Contain>
        <TopSection image={education}/>
      </Contain>
      <Contain color={"#faebd733"}>
        <div className={style["education-content"]}>
          {DUMMY_EDUCATION.map(({ src, cardFor, description }) => (
            <CardLink src={src} cardFor={cardFor} description={description} />
          ))}
        </div>
      </Contain>
      <div>This is the education page.</div>
    </>
  );
};

export default EducationPage;
