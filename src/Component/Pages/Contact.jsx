import React from "react";
import "./Contact.css";
import sha from "../../assets/Sha.jpeg";
import microsoft from "../../assets/Microsoft.avif";
import adobe from "../../assets/Adobe.webp";
import facebook from "../../assets/fb.png";

export const Contact = () => {
  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include:
        </p>

        <div className="clientImgs">
          <img src={sha} alt="sha" className="clientImg" />
          <img src={microsoft} alt="microsoft" className="clientImg" />
          <img src={adobe} alt="adobe" className="clientImg" />
          <img src={facebook} alt="facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
      </div>
    </section>
  );
};
