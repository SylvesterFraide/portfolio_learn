import React from "react";
import "./Navbar.css";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import { Link } from "react-router-dom";

const Nabar = ({home, about, portfolio, clients, btn, logo}) => {
  return (
    <nav className="navbar">
      <h2 className="logo">{logo}</h2>
      <div className="desktopMenu">
        <Link to='/' className="listItems">{home}</Link>{" "}
        <Link to='/about' className="listItems">{about}</Link>
        <Link to='/portfolio' className="listItems">{portfolio}</Link>{" "}
        <Link to='/clients' className="listItems">{clients}</Link>
      </div>

      <button className="desktopMenuBtn">
        {" "}
        <ContactPageTwoToneIcon className="contactIcon" /> {btn}
      </button>
    </nav>
  );
};
export default Nabar;
