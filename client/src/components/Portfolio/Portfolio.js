import React, { useState, useEffect,lazy, Suspense } from "react";
import Rocket from "../../image/rocket.png";
// import { useTranslation } from "react-i18next";
import "./Portfolio.css";
// import ModelPortfolio from './Modal/ModelPortfolio';

// import Lazy All Component
const All = lazy(()=> import("./All"));
const DevDesign =lazy(()=>import("./DevDesign"));
const Photography =lazy(()=>import("./Photography"));
const VideoEditing =lazy(()=>import("./VideoEditing"));
const LogoDesign =lazy(()=>import("./LogoDesign"));

function Portfolio() {
  // Translation
  // const { t } = useTranslation();
  // Pre loading Component
  const [isLoading, setStateLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateLoading(false); // Set lai isLoading sau 2s
    }, 2500);
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
        return (<Suspense fallback={<>Loading All</>}><All/></Suspense>);
      case "webDesign":
        return (<Suspense fallback={<>Loading Web Design</>}><DevDesign/></Suspense>);
      case "photography":
        return (<Suspense fallback={<>Loading Photography</>}><Photography/></Suspense>);
      case "videoEditing":
        return (<Suspense fallback={<>Loading Video Editing</>}><VideoEditing/></Suspense>);
      case "logoDesign":
        return (<Suspense fallback={<>Loading LogoDesign</>}><LogoDesign/></Suspense>);
      default:
        break;
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
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row-about content-portfolio">
          <div className="portfolio-filter padd-15">
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("all");
              }}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("webDesign");
              }}
            >
              Web Design
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("photography");
              }}
            >
              Photography
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("videoEditing");
              }}
            >
              Video Editing
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectPortfolio("logoDesign");
              }}
            >
              Logo Design
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
