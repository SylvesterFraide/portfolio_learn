import React from "react";
import "./Navbar.css";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import { Link } from "react-scroll";

const Nabar = ({ home, about, portfolio, clients, btn, logo }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">{logo}</h2>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItems"
        >
          {home}
        </Link>{" "}
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItems"
        >
          {about}
        </Link>{" "}
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItems"
        >
          {portfolio}
        </Link>{" "}
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItems"
        >
          {clients}
        </Link>{" "}
      </div>
      {/* 
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuBtn"
      >
        {" "}
        <ContactPageTwoToneIcon className="contactIcon" /> {btn}
      </Link> */}

      <button
        className="desktopMenuBtn"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth"})
        }
      >
        <ContactPageTwoToneIcon className="contactIcon" /> {btn}
      </button>
    </nav>
  );
};
export default Nabar;
