import React from "react";
import "./Portfolio.css";
import project1 from "../../assets/Project1.webp";
import project2 from "../../assets/Project2.jpg";
import project3 from "../../assets/Project3.jpeg";
import project4 from "../../assets/Project4.avif";
import project5 from "../../assets/Project5.avif";
import project6 from "../../assets/Project6.webp";
import project7 from "../../assets/Project7.jpg";
import project from "../../assets/Project8.avif";

export const Portfolio = ({ worksTitle, workDesc }) => {
  return (
    <section id="works">
      <h2 className="worksTitle">{worksTitle}</h2>
      <span className="workDesc">{workDesc}</span>
      <div className="worksImgs">
        <img src={project1} alt="project 1" className="worksImg" />
        <img src={project2} alt="project 2" className="worksImg" />
        <img src={project3} alt="project 3" className="worksImg" />
        <img src={project4} alt="project 4" className="worksImg" />
        <img src={project5} alt="project 5" className="worksImg" />
        <img src={project6} alt="project 6" className="worksImg" />
        {/* <img src={project7} alt="project 7" className="worksImg" />
         <img src={project8} alt="project 8" className="worksImg" /> */}
      </div>

      <button className="worksBtn">see more...</button>
    </section>
  );
};
