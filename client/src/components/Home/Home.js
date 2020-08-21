import React from "react";
import Avatar from "../../image/Circle_LTC_AVT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../ScrollButton/ScrollToTop.js";

function Home() {
  return (
    <>
      <div className="container">
        <div className="intro">
          <img src={Avatar} alt="Image_avatar" className="shadow-dark" />
          <h1>Le Tang Co</h1>
          <p>I'm a Web Development</p>
          <div className="social-links">
            <a href="facebook">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="facebook">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="facebook">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="facebook">
              <FontAwesomeIcon icon={faBlog} />
            </a>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
export default Home;
