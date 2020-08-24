import React from "react";
import Avatar from "../../image/Circle_LTC_AVT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../ScrollButton/ScrollToTop.js";
import { NavLink } from "react-router-dom";
import PreLoading from '../PreLoading/PreLoading';
function Home(props) {
  // console.log(props.btnColor);
  return (
    <>
      <PreLoading />
      <div className="container">
        <div className="intro">
          <img src={Avatar} alt="Image_avatar" className="shadow-dark" />
          <h1>Le Tang Co</h1>
          <p>I'm a Web Development</p>
          <div className="social-links">
            <a href="https://www.facebook.com/letang.co/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: props.btnColor }}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/tangco_it/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: props.btnColor }}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            {/* <a href="http://localhost:3000/contact" rel="noopener noreferrer">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a> */}
            <NavLink exact to="/contact" style={{ backgroundColor: props.btnColor }}>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </NavLink>
            <NavLink exact to="/" style={{ backgroundColor: props.btnColor }}>
              <FontAwesomeIcon icon={faBlog} />
            </NavLink>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
export default Home;
