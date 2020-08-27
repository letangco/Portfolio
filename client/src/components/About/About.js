import React, { useState, useEffect } from "react";
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
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
function About(props) {
  // Loading
  const [isLoading, setStateLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateLoading(false); // Set lai isLoading sau 2s
    }, 1000);
    return () => clearTimeout(timer);
  }, [isLoading]);
  function changePreLoader(value) {
    if (value === false) {
      return "preloader opacity-0";
    } else return "preloader";
  }
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
  // Change Color Button
  function changeColorTitle(value) {
    switch (value) {
      case "#ec1839":
        return "section-title color-change-title-red";
      case "#2196f3":
        return "section-title color-change-title-blue";
      case "#fa5b0f":
        return "section-title color-change-title-orange";
      case "#ffb400":
        return "section-title color-change-title-yellow";
      case "#72b626":
        return "section-title color-change-title-green";
      default:
        break;
    }
  }
  // Change Color Text Theme
  function changeColorTextTheme(value, colorDark, colorLight) {
    if (value === "dark") {
      return { color: colorDark };
    }
    else return { color: colorLight };
  }
  // Change Background Box Theme
  function changeBackgroundTheme(value, bgDark, bgLight) {
    if (value === "dark")
      return {
        backgroundColor: bgDark,
        border: "1px solid #393939"
      }
    else {
      return {
        backgroundColor: bgLight,
        border: "1px solid #e8dfec"
      }
    }
  }
// Change Title Education
   function changeColorTextThemeEducation(value,colorDark, colorLight)
   {
     if (value ==="dark")
     {
       return {
         color: colorDark,
        padding: "15px 30px",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600"
       }
     }else {
      return {
        color: colorLight,
       padding: "15px 30px",
       fontFamily: "'Poppins', sans-serif",
       fontWeight: "600"
      }
     }
   }
// Change Title Experience
   function changeColorTextThemeExperience(value,colorDark, colorLight)
   {
     if (value ==="dark")
     {
       return {
         color: colorDark,
        padding: "15px 30px",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600"
       }
     }else {
      return {
        color: colorLight,
       padding: "15px 30px",
       fontFamily: "'Poppins', sans-serif",
       fontWeight: "600"
      }
     }
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
        style={{ marginLeft: "0px", padding: "0px"}}
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
            <div className={changeColorTitle(props.btnColorAbout)}>
              <h2 style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>{t('about.namePage')}</h2>
            </div>
          </div>
          <div className="row-about">
            <div className="about-content">
              <div className="row-about">
                <div className="about-text padd-15">
                  <h3 style={changeColorTextTheme(props.theme, "#e9e9e9", "#302e4d")}>
                    {t('about.name')} -{" "}
                    <span style={{ color: props.btnColorAbout }}>
                      ReactJS Web Developer
                    </span>
                  </h3>
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
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
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.birthday.title')} <span>{t('detailIntro.birthday.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.age.title')} <span>{getAge()}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.email.title')} <span>letangco@gmail.com</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.phone.title')} <span>(+84) 332.858.127</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.university.title')} <span>{t('detailIntro.university.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.freelance.title')} <span>{t('detailIntro.freelance.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.city.title')} <span>Ho Chi Minh, Viet Nam</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.languages.title')} <span>{t('detailIntro.languages.value')}</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.Instagram.title')} <span>tangco_it</span>
                  </p>
                </div>
                <div className="info-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                    {t('detailIntro.Position.title')} <span>ReactJS Web Developer</span>
                  </p>
                </div>
                {/* Button Download */}
                <div className="btn-personal-about col-12">
                  <div>
                    <p style={{ backgroundColor: props.btnColorAbout }}>
                      <FontAwesomeIcon icon={faDownload} /> {t('aboutBtn.downloadCV')}
                    </p>
                    <p style={{ backgroundColor: props.btnColorAbout }}>
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
                  <div style={changeBackgroundTheme(props.theme, "#222222", "#fdf9ff")}>
                    <h1 style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>
                      2<label style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>+</label>
                    </h1>
                    <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                      <FontAwesomeIcon icon={faLaptopCode} size="2x" /> {t('achievement.box1')}
                    </p>
                  </div>
                </div>
                <div className="achievement-item col-xs-12 col-sm-6 col-md-6">
                  <div style={changeBackgroundTheme(props.theme, "#222222", "#fdf9ff")}>
                    <h1 style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>
                      3<label style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>+</label>
                    </h1>
                    <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                      <FontAwesomeIcon icon={faHands} size="2x" /> {t('achievement.box2')}
                    </p>
                  </div>
                </div>
                <div className="achievement-item col-xs-12 col-sm-6 col-md-6">
                  <div style={changeBackgroundTheme(props.theme, "#222222", "#fdf9ff")}>
                    <h1 style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>
                      0<label style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>+</label>
                    </h1>
                    <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                      <FontAwesomeIcon icon={faSmile} size="2x" /> {t('achievement.box3')}
                    </p>
                  </div>
                </div>
                <div className="achievement-item col-xs-12 col-sm-6 col-md-6">
                  <div style={changeBackgroundTheme(props.theme, "#222222", "#fdf9ff")}>
                    <h1 style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>
                      0<label style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>+</label>
                    </h1>
                    <p style={changeColorTextTheme(props.theme, "#e9e9e9", "#504e70")}>
                      <FontAwesomeIcon icon={faTrophy} size="2x" /> {t('achievement.box4')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-info col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="skill-items" style={changeBackgroundTheme(props.theme, "#222222", "#fdf9ff")}>
                <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>C/C++</p>
                <div className="containers-skill">
                  <div className="skills c-c-plus" style={{ backgroundColor: props.btnColorAbout }}>
                    <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>90%</p>
                  </div>
                </div>
                <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>C#</p>
                <div className="containers-skill">
                  <div className="skills cSharp" style={{ backgroundColor: props.btnColorAbout }}>
                    <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>85%</p>
                  </div>
                </div>
                <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>HTML</p>
                <div className="containers-skill">
                  <div className="skills html" style={{ backgroundColor: props.btnColorAbout }}>
                    <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>95%</p>
                  </div>
                </div>

                <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>CSS</p>
                <div className="containers-skill">
                  <div className="skills css" style={{ backgroundColor: props.btnColorAbout }}>
                    <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>85%</p>
                  </div>
                </div>

                <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>JavaScript</p>
                <div className="containers-skill">
                  <div className="skills js" style={{ backgroundColor: props.btnColorAbout }}>
                    <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>75%</p>
                  </div>
                </div>

                <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>PHP</p>
                <div className="containers-skill">
                  <div className="skills php" style={{ backgroundColor: props.btnColorAbout }}>
                    <p style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}>60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-about">
            {/* Education */}
            <div className="education-timeline col-xs-12 col-sm-12 col-md-12 col-lg-12" style={changeBackgroundTheme(props.theme, "#222222", "#fdf9ff")}>
              <div>
                <div className="row">
                  <h4 style={changeColorTextThemeEducation(props.theme,"#ffffff", "#302e4d")}
                  >
                    <FontAwesomeIcon icon={faGraduationCap} /> Education
                </h4>
                </div>
                <Education theme={props.theme} />
              </div>
            </div>
            {/* Experience Timeline */}
            <div className="experience-timeline col-xs-12 col-sm-12 col-md-12 col-lg-12" style={changeBackgroundTheme(props.theme, "#222222", "#fdf9ff")}>
              <div className="row">
                <h4 
                style={changeColorTextThemeExperience(props.theme,"#ffffff", "#302e4d")}
                >
                  <FontAwesomeIcon icon={faBriefcase} /> Experience
                </h4>
                <Experience theme={props.theme} />
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
