import React from "react";
import "./App.css";
import Nabar from "./Component/Navbar/Nabar";
// import { Profile } from './Components/Home/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Pages/Home";
import { About } from "./Component/Pages/About";
import { Portfolio } from "./Component/Pages/Portfolio";
import { Clients } from "./Component/Pages/Clients";
// import Navbar from './Components/Header/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Nabar
        home="Home"
        about="About"
        portfolio="Portfolio"
        clients="Clients"
        btn="Contact Me"
        logo="MyLogo"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
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
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              worksTitle="My Portfolio"
              workDesc=" I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence."
            />
          }
        />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
