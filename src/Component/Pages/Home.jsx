import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
// import { Clients } from "./Clients";
import { Contact } from "./Contact";


export const Home = () => {
  return (
    <div className="home">
      <Hero
        hello="hello"
        heroName="I'm"
        name="Sylvester Fraide"
        proffesion="Frontend Developer"
        description={
          <>
            I am a skilled Frontend Developer with a passion for creating
            <br />
            dynamic and responsive web applications.
          </>
        }
        hire="Hire Me"
      />

      <About
        skillTitle="What I do"
        skillsDesc="I am a skilled and passionate developer with expertise in web and mobile application development."
        h1="UI/UX Design"
        p1="Creating user-friendly interfaces and experiences."
        h2="Web Development"
        p2="Building responsive and interactive websites."
        h3="App Development"
        p3="Creating mobile applications for iOS and Android."
      />

      <Portfolio
        worksTitle="My Portfolio"
        workDesc=" I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence."
      />

      {/* <Clients /> */}
      <Contact  
        ContactPageTitle="My Clients"
        clientDesc="I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include:"
        ContactPageItem="Contact Me"
        ContactDesc="Please fill in the form below to get in touch with me.."
        sbtn="Submit"
      />
    </div>
  );
};