import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCameraRetro,
  faCode,
  faRocket,
  faFilm,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import "./Differents.css";
import Rocket from "../../image/rocket.png";
function Differents() {
  // PreLoading Component
  const [isLoading, setStateLoading] = useState(true);
  // var isSetIsLoading = () => {
  //   setStateLoading(false);
  // };
  // setTimeout(isSetIsLoading, 1500);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateLoading(false); // Set lai isLoading sau 2s
    }, 1500);
    return () => clearTimeout(timer);
  }, [isLoading]);

  function changePreLoader(value) {
    if (value === false) {
      return "preloader opacity-0";
    } else return "preloader";
  }

  // Scroll
  var [valueScroll, setScrollValue] = useState(0);
  window.onscroll = function () {
    ScrollIndicator();
  };

  function ScrollIndicator() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    setScrollValue(scrolled);
    // document.getElementById("myBar").style.width = scrolled + "%";
  }
  return (
    <>
      {/* Loading */}
      <div className={changePreLoader(isLoading)}>
        <div className="loader">
          <img src={Rocket} alt="RocketLoading" width="70px" />
        </div>
      </div>
      {/* Scroll */}
      <div
        className="header-scroll"
        style={{ marginLeft: "0px", padding: "0px" }}
      >
        <div className="progress-container">
          <div
            className="progress-bar-scroll"
            id="myBar"
            style={{ width: valueScroll.toString() + "%" }}
          ></div>
        </div>
      </div>
      {/* Content */}
      <section className="different-section">
        <div className="row-different">
          <div className="section-title">
            <h2>Other Skills</h2>
          </div>
        </div>

        <div className="container-fluid otherSkills">
          <div className="row list-other-skill">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div>
                <p className="icon-other-item">
                  <FontAwesomeIcon
                    className="faIconItem"
                    icon={faLaptopCode}
                    size="2x"
                  />
                </p>
                <h3>Web Design</h3>
                <p>
                  Web design makes the website more attractive and eye-catching.
                  Perform UX / UI optimization work
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div>
                <p className="icon-other-item">
                  <FontAwesomeIcon icon={faCameraRetro} size="2x" />
                </p>
                <h3>Photography</h3>
                <p>
                  Photography can only reproduce reality. But as soon as it is
                  captured, that reality becomes part of the past
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div>
                <p className="icon-other-item">
                  <FontAwesomeIcon icon={faCode} size="2x" />
                </p>
                <h3>Web Developer</h3>
                <p>
                  Well-known developers all run into dilemmas until they solve
                  it
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div>
                <p className="icon-other-item">
                  <FontAwesomeIcon icon={faFilm} size="2x" />
                </p>
                <h3>Video Editing</h3>
                <p>
                  I've never been a big fan of the music-video style of editing
                  movies that crept in the last few decades
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div>
                <p className="icon-other-item">
                  <FontAwesomeIcon icon={faRocket} size="2x" />
                </p>
                <h3>SEO Optimization</h3>
                <p>
                  All top rankings have search engine optimization methods to
                  get ranked higher
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div>
                <p className="icon-other-item">
                  <FontAwesomeIcon icon={faPalette} size="2x" />
                </p>
                <h3>Logo Design</h3>
                <p>
                  Logo is not only the representative image of an organization
                  but also a message that its owner wants to send to the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Differents;
