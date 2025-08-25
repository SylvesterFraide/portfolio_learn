import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./Contact.css";
import sha from "../../assets/Sha.jpeg";
import microsoft from "../../assets/Microsoft.avif";
import adobe from "../../assets/Adobe.webp";
import facebook from "../../assets/fb.png";
import fb1 from "../../assets/fb1.png";
import ig from "../../assets/ig.png";
import x from "../../assets/x.avif";
import youtube from "../../assets/yuotube.webp";
import emailjs from "@emailjs/browser";

export const Contact = ({
  ContactPageTitle,
  clientDesc,
  ContactPageItem,
  ContactDesc,
  sbtn,
}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2o4ooxc", "template_gh0b4ng", form.current, {
        publicKey: "py2-2W01HIkVHOPRJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="clientsPageTitle">{ContactPageTitle}</h1>
        <p className="clientsDesc">{clientDesc}</p>
        <div className="clientImgs">
          <img src={sha} alt="sha" className="clientImg" />
          <img src={microsoft} alt="microsoft" className="clientImg" />
          <img src={adobe} alt="adobe" className="clientImg" />
          <img src={facebook} alt="facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageItem">{ContactPageItem}</h1>
        <span className="contactDesc">{ContactDesc}</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="input" placeholder="Your Name" name="user_name" />
          <input type="email" className="input" placeholder="Your Email" name="user_email" />
          <textarea
            className="input"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="sbtn">
            {sbtn}
          </button>

          <div className="links">
            <Link to="https://www.facebook.com/sylvester.fraide">
              <img src={fb1} alt="fb" className="link" />
            </Link>
            <Link to="#">
              <img src={ig} alt="ig" className="link" />
            </Link>
            <Link to="https://x.com/SylvesterF254">
              <img src={x} alt="x" className="link" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCSdRY9i89SMzxG0ACmbHQ6A">
              <img src={youtube} alt="youtube" className="link" />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
