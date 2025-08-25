import React, { useState } from "react";
import "./Navbar.css";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Link } from "react-scroll";

const Nabar = ({ home, about, portfolio, clients, btn, logo }) => {
  const [showMenu, setShowMenu] = useState(false);
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
          className="navMenuItems"
        >
          {home}
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navMenuItems"
        >
          {about}
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navMenuItems"
        >
          {portfolio}
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="navMenuItems"
        >
          {clients}
        </Link>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <ContactPageTwoToneIcon className="contactIcon" /> {btn}
      </button>

      <div className="navMenuIcon" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <CloseTwoToneIcon /> : <MenuTwoToneIcon />}
      </div>

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navMenuItems"
          onClick={() => setShowMenu(false)}
        >
          {home}
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navMenuItems"
          onClick={() => setShowMenu(false)}
        >
          {about}
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navMenuItems"
          onClick={() => setShowMenu(false)}
        >
          {portfolio}
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navMenuItems"
          onClick={() => setShowMenu(false)}
        >
          {clients}
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navMenuItems"
          onClick={() => setShowMenu(false)}
        >
          {btn}
        </Link>
      </div>
    </nav>
  );
};
export default Nabar;
