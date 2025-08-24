import React from "react";
import "./Contact.css";
import sha from "../../assets/Sha.jpeg";
import microsoft from "../../assets/Microsoft.avif";
import adobe from "../../assets/Adobe.webp";
import facebook from "../../assets/fb.png";
import fb1 from "../../assets/fb1.png";
import ig from "../../assets/ig.png";
import x from "../../assets/x.avif";
import youtube from "../../assets/yuotube.webp";

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
        <h1 className="contactPageItem">Contact Me</h1>
        <span className="contactDesc">
          Please fill in the form below to get in touch with me.
        </span>
        <form className="contactForm">
          <input type="text" className="input" placeholder="Your Name" />
          <input type="email" className="input" placeholder="Your Email" />
          <textarea
            className="input"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="sbtn">
            Submit
          </button>
          <div className="links">
            <img src={fb1} alt="fb" className="link" />
            <img src={ig} alt="ig" className="link" />
            <img src={x} alt="x" className="link" />
            <img src={youtube} alt="youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};
