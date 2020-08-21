import React, { useState ,useEffect} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Education from "./TimeLine/Education";
import Experience from "./TimeLine/Experience";
import "./TimeLine/Education.css";
import ScrollToTop from "../ScrollButton/ScrollToTop";
import Rocket from "../../image/rocket.png";
// Translate
import { useTranslation } from 'react-i18next';
import {
  faLaptopCode,
  faHands,
  faSmile,
  faTrophy,
  faDownload,
  faIdCardAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
function About() {
  // Loading
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

  // Translation
  const { t } = useTranslation();
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
  function getAge() {
    var timeNow = new Date();
    var age = timeNow.getFullYear() - 1999;
    return age;
  }
  function changePreLoader(value) {
    if (value === false) {
      return "preloader opacity-0";
    } else return "preloader";
  }
  return (
    <>
      <div className={changePreLoader(isLoading)}>
        <div className="loader">
          <img src={Rocket} alt="RocketLoading" width="70px" />
        </div>
      </div>
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
      <section className="about-section">
        <div className="container">
          <div className="row-about">
            <div className="section-title">
              <h2>{t('about.namePage')}</h2>
            </div>
          </div>
          <div className="row-about">
            <div className="about-content">
              <div className="row-about">
                <div className="about-text padd-15">
                  <h3>
                    {t('about.name')} -{" "}
                    <span style={{ color: "#ec1839" }}>
                      ReactJS Web Developer
                    </span>
                  </h3>
                  <p>
                  {t("about.intro.iam")} {getAge()} {t('about.intro.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Personal Info */}
          <div className="row-about about-content-2">
            <div className="personal-info col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row-about">
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                    {t('detailIntro.birthday.title')} <span>{t('detailIntro.birthday.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.age.title')} <span>{getAge()}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.email.title')} <span>letangco@gmail.com</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.phone.title')} <span>(+84) 332.858.127</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.university.title')} <span>{t('detailIntro.university.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.freelance.title')} <span>{t('detailIntro.freelance.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.city.title')} <span>Ho Chi Minh, Viet Nam</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.languages.title')} <span>{t('detailIntro.languages.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.Instagram.title')} <span>tangco_it</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>
                  {t('detailIntro.Position.title')} <span>ReactJS Web Developer</span>
                  </p>
                </div>
                {/* Button Download */}
                <div className="btn-personal-about col-12">
                  <div>
                    <p>
                      <FontAwesomeIcon icon={faDownload} /> {t('aboutBtn.downloadCV')}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faIdCardAlt} /> {t('aboutBtn.contact')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Achievement */}
            <div className="achievement-info col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="row">
                <div className="achievement-item col-xs-12 col-sm-6 col-md-6">
                  <div>
                    <h1>
                      2<label>+</label>
                    </h1>
                    <p>
                      <FontAwesomeIcon icon={faLaptopCode} size="2x" /> {t('achievement.box1')}
                    </p>
                  </div>
                </div>
                <div className="achievement-item col-xs-12 col-sm-6 col-md-6">
                  <div>
                    <h1>
                      3<label>+</label>
                    </h1>
                    <p>
                      <FontAwesomeIcon icon={faHands} size="2x" /> {t('achievement.box2')}
                    </p>
                  </div>
                </div>
                <div className="achievement-item col-xs-12 col-sm-6 col-md-6">
                  <div>
                    <h1>
                      0<label>+</label>
                    </h1>
                    <p>
                      <FontAwesomeIcon icon={faSmile} size="2x" /> {t('achievement.box3')}
                    </p>
                  </div>
                </div>
                <div className="achievement-item col-xs-12 col-sm-6 col-md-6">
                  <div>
                    <h1>
                      0<label>+</label>
                    </h1>
                    <p>
                      <FontAwesomeIcon icon={faTrophy} size="2x" /> {t('achievement.box4')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-info col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="skill-items">
                <p>HTML</p>
                <div className="containers-skill">
                  <div className="skills html">90%</div>
                </div>

                <p>CSS</p>
                <div className="containers-skill">
                  <div className="skills css">80%</div>
                </div>

                <p>JavaScript</p>
                <div className="containers-skill">
                  <div className="skills js">65%</div>
                </div>

                <p>PHP</p>
                <div className="containers-skill">
                  <div className="skills php">60%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-about">
            {/* Education */}
            <div className="education-timeline col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                {/* <h4>Education</h4> */}
                <Education />
              </div>
            </div>
            {/* Experience Timeline */}
            <div className="experience-timeline col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                {/* <h4>Experience</h4> */}
                <Experience />
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </section>
    </>
  );
}
export default About;
