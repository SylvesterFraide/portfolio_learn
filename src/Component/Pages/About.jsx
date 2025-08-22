import React from "react";
import "./About.css";
import web from "../../assets/web.png";
import app from "../../assets/app.png";
import UIUX from "../../assets/UIUX.png";

export const About = ({ skillTitle, skillsDesc, h1, p1, h2, p2, h3, p3 }) => {
  return (
    <section id="skills">
      <span className="skillTitle">{skillTitle}</span>
      <span className="skillsDesc">{skillsDesc}</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIUX} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>{h1}</h2>
            <p>{p1}</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>{h2}</h2>
            <p>{p2}</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={app} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>{h3}</h2>
            <p>{p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
