import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typical from "react-typical";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="profile-parent">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/sylvester.fraide">
              <FacebookIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <XIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
            <a href="#">
              <YouTubeIcon />
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hi, I'm <span className="highlighted-text">Jade Caden</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                 loop={Infinity}
                 steps={[
                    'Web Developer',
                    2000,
                    'React Enthusiast',
                    2000,
                    'Open Source Contributor',
                    2000
                 ]}
                 />
              </h1>
              <span>
                  I am a passionate developer with a love for creating dynamic and responsive web applications.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="primary-btn">Hire Me</button>
            <a href="#" download="#">
              <button className="highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </div>
    </div>
  );
};