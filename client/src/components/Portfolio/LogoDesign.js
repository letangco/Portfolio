import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Portfolio7 from '../../image/PortFolio_Logo.PNG';
import Portfolio8 from '../../image/PortFolio_Logo2.PNG';
function LogoDesign() {
  return (
    <>
      
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio7} alt="A" />
          </div>
          <div className="portfolio-info logo1">
            <h4>#Logo Design</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio8} alt="A" />
          </div>
          <div className="portfolio-info logo2">
            <h4>#Logo Design</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoDesign;
