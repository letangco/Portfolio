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
import { useTranslation } from "react-i18next";
function Differents(props) {
  // Translation
  const { t } = useTranslation();
  // PreLoading Component
  const [isLoading, setStateLoading] = useState(false);
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
  // Change Title Color
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
  // Change LineColor Box
  function changeColorLineBox(value) {
    switch (value) {
      case "#ec1839":
        return "line-red";
      case "#2196f3":
        return "line-blue";
      case "#fa5b0f":
        return "line-orange";
      case "#ffb400":
        return "line-yellow";
      case "#72b626":
        return "line-green";
      default:
        break;
    }
  }
  // Change Color Theme on Box
  const BoxTheme = {
    "dark": {
      backgroundColor: "#222222",
      border: "1px solid #393939"
    },
    "light": {
      backgroundColor: "#fdf9ff",
      border: "1px solid #e8dfec"
    }
  }
  function changeBgColorBox(value) {
    if (value === "dark")
      return BoxTheme.dark;
    else return BoxTheme.light;
  }
  // Change Text Theme on Box
  const TextTheme = {
    "heading":{
      "dark": {
        color:"#ffffff"
      },
      "light": {
        color:"#302e4d"
      }
    },
    "text":{
      "dark": {
        color:"#e9e9e9"
      },
      "light": {
        color:"#504e70"
      }
    }
  }
  function changeColorHeading(value){
    if (value === "dark")
      return TextTheme.heading.dark;
    else return TextTheme.heading.light;
  }
  function changeColorText(value){
    if (value === "dark")
      return TextTheme.text.dark;
    else return TextTheme.text.light;
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
          <div className={changeColorTitle(props.btnColor)}>
            <h2 style={props.theme === "dark" ? { color: "#ffffff" } : { color: "#302e4d" }}>{t('otherSkills.titlePage.otherSkills')}</h2>
          </div>
        </div>

        <div className="container-fluid otherSkills">
          <div className="row list-other-skill">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div style={changeBgColorBox(props.theme)}>
                <p className="icon-other-item" style={{ backgroundColor: props.btnColor }}>
                  <FontAwesomeIcon
                    className="faIconItem"
                    icon={faLaptopCode}
                    size="2x"
                  />
                </p>
                <h3 className={changeColorLineBox(props.btnColor)} style={changeColorHeading(props.theme)}>{t('otherSkills.title.webDesign')}</h3>
                <p style={changeColorText(props.theme)}>
                  {t('otherSkills.content.webDesign')}
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div style={changeBgColorBox(props.theme)}>
                <p className="icon-other-item" style={{ backgroundColor: props.btnColor }}>
                  <FontAwesomeIcon icon={faCameraRetro} size="2x" />
                </p>
                <h3 className={changeColorLineBox(props.btnColor)} style={changeColorHeading(props.theme)}>{t('otherSkills.title.photography')}</h3>
                <p style={changeColorText(props.theme)}>
                  {t('otherSkills.content.photography')}
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div style={changeBgColorBox(props.theme)}>
                <p className="icon-other-item" style={{ backgroundColor: props.btnColor }}>
                  <FontAwesomeIcon icon={faCode} size="2x" />
                </p>
                <h3 className={changeColorLineBox(props.btnColor)} style={changeColorHeading(props.theme)}>{t('otherSkills.title.webDeveloper')}</h3>
                <p style={changeColorText(props.theme)}>
                  {t('otherSkills.content.webDeveloper')}
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div style={changeBgColorBox(props.theme)}>
                <p className="icon-other-item" style={{ backgroundColor: props.btnColor }}>
                  <FontAwesomeIcon icon={faFilm} size="2x" />
                </p>
                <h3 className={changeColorLineBox(props.btnColor)} style={changeColorHeading(props.theme)}>{t('otherSkills.title.videoEditing')}</h3>
                <p style={changeColorText(props.theme)}>
                  {t('otherSkills.content.videoEditing')}
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div style={changeBgColorBox(props.theme)}>
                <p className="icon-other-item" style={{ backgroundColor: props.btnColor }}>
                  <FontAwesomeIcon icon={faRocket} size="2x" />
                </p>
                <h3 className={changeColorLineBox(props.btnColor)} style={changeColorHeading(props.theme)}>{t('otherSkills.title.SEOOptimization')}</h3>
                <p style={changeColorText(props.theme)}>
                  {t('otherSkills.content.SEOOptimization')}
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 other-item">
              <div style={changeBgColorBox(props.theme)}>
                <p className="icon-other-item" style={{ backgroundColor: props.btnColor }}>
                  <FontAwesomeIcon icon={faPalette} size="2x" />
                </p>
                <h3 className={changeColorLineBox(props.btnColor)} style={changeColorHeading(props.theme)}>{t('otherSkills.title.logoDesign')}</h3>
                <p style={changeColorText(props.theme)}>
                  {t('otherSkills.content.logoDesign')}
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
