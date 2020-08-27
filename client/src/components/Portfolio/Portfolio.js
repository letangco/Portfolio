import React, { useState, useEffect, lazy, Suspense } from "react";
import Rocket from "../../image/rocket.png";
import { useTranslation } from "react-i18next";
import "./Portfolio.css";
// import ModelPortfolio from './Modal/ModelPortfolio';

// import Lazy All Component
const All = lazy(() => import("./All"));
const DevDesign = lazy(() => import("./DevDesign"));
const Photography = lazy(() => import("./Photography"));
const VideoEditing = lazy(() => import("./VideoEditing"));
const LogoDesign = lazy(() => import("./LogoDesign"));

function Portfolio(props) {
  // Translation
  const { t } = useTranslation();
  // Pre loading Component
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
  //   Scroll Page

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
  // Active li
  var [activeSelectPorfolio, setSelectPortfolio] = useState("all");
  function renderSeclect(value) {
    switch (value) {
      case "all":
        return (<Suspense fallback={<>Loading All</>}><All /></Suspense>);
      case "webDesign":
        return (<Suspense fallback={<>Loading Web Design</>}><DevDesign /></Suspense>);
      case "photography":
        return (<Suspense fallback={<>Loading Photography</>}><Photography /></Suspense>);
      case "videoEditing":
        return (<Suspense fallback={<>Loading Video Editing</>}><VideoEditing /></Suspense>);
      case "logoDesign":
        return (<Suspense fallback={<>Loading LogoDesign</>}><LogoDesign /></Suspense>);
      default:
        break;
    }
  }
  // Change Title Color
  function changeColorTitle(value) {
    switch (value) {
      case "#ec1839":
        return "section-title padd-15 color-change-title-red";
      case "#2196f3":
        return "section-title padd-15 color-change-title-blue";
      case "#fa5b0f":
        return "section-title padd-15 color-change-title-orange";
      case "#ffb400":
        return "section-title padd-15 color-change-title-yellow";
      case "#72b626":
        return "section-title padd-15 color-change-title-green";
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
      {/* <ModelPortfolio /> */}
      <section className="portfolio section-portfolio">
        <div className="row-about">
          <div className={changeColorTitle(props.btnColor)}>
            <h2 style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")} >{t('portfolio.portfolio')}</h2>
          </div>
        </div>
        <div className="row-about content-portfolio">
          <div className="portfolio-filter padd-15">
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("all");

              }}
              style={activeSelectPorfolio === "all" ? (props.theme==="dark"? { borderBottom: "3px solid" + props.btnColor, color:"#e9e9e9"}:
               {borderBottom: "3px solid" + props.btnColor, color:"#504e70"}) :(props.theme==="dark"? { borderBottom: "none", color:"#e9e9e9"}:
               {borderBottom: "none", color:"#504e70"})}
            >
              {/* All */}
              {t('portfolio.all')}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("webDesign");
              }}
              style={activeSelectPorfolio === "webDesign" ? (props.theme==="dark"? { borderBottom: "3px solid" + props.btnColor, color:"#e9e9e9"}:
               {borderBottom: "3px solid" + props.btnColor, color:"#504e70"}) :(props.theme==="dark"? { borderBottom: "none", color:"#e9e9e9"}:
               {borderBottom: "none", color:"#504e70"})}
            >
              {/* Web Design */}
              {t('portfolio.webDesign')}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("photography");
              }}
              style={activeSelectPorfolio === "photography" ? (props.theme==="dark"? { borderBottom: "3px solid" + props.btnColor, color:"#e9e9e9"}:
              {borderBottom: "3px solid" + props.btnColor, color:"#504e70"}) :(props.theme==="dark"? { borderBottom: "none", color:"#e9e9e9"}:
              {borderBottom: "none", color:"#504e70"})}
            >
              {t('portfolio.Photography')}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("videoEditing");
              }}
              style={activeSelectPorfolio === "videoEditing" ? (props.theme==="dark"? { borderBottom: "3px solid" + props.btnColor, color:"#e9e9e9"}:
              {borderBottom: "3px solid" + props.btnColor, color:"#504e70"}) :(props.theme==="dark"? { borderBottom: "none", color:"#e9e9e9"}:
              {borderBottom: "none", color:"#504e70"})}
            >
              {t('portfolio.videoEditing')}
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("logoDesign");
              }}
              style={activeSelectPorfolio === "logoDesign" ? (props.theme==="dark"? { borderBottom: "3px solid" + props.btnColor, color:"#e9e9e9"}:
               {borderBottom: "3px solid" + props.btnColor, color:"#504e70"}) :(props.theme==="dark"? { borderBottom: "none", color:"#e9e9e9"}:
               {borderBottom: "none", color:"#504e70"})}
            >
              {t('portfolio.logoDesign')}
            </button>
          </div>

          <div className="row list-item-portfolio padd-15">
            {renderSeclect(activeSelectPorfolio)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
