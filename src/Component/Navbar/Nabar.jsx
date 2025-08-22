import React from "react";
import "./Navbar.css";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import { Link } from "react-router-dom";

const Nabar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">logo</h2>
      <div className="desktopMenu">
        <Link className="listItems">Home</Link>{" "}
        <Link className="listItems">About</Link>
        <Link className="listItems">Portfolio</Link>{" "}
        <Link className="listItems">Clients</Link>
      </div>

      <button className="desktopMenuBtn">
        {" "}
        <ContactPageTwoToneIcon className="contactIcon" /> Contact Me
      </button>
    </nav>
  );
};
export default Nabar;
