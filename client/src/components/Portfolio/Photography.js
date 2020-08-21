import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Portfolio4 from '../../image/PortFolio_Photography.PNG';
import Portfolio5 from '../../image/PortFolio_Photography1.PNG';
import Portfolio6 from '../../image/coffee-apple.jpg';
function Photography() {
  return (
    <>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio4} alt="A" />
          </div>
          <div className="portfolio-info photo1">
            <h4>#Photography</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio5} alt="A" />
          </div>
          <div className="portfolio-info photo2">
            <h4>#Photography</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio6} alt="A" />
          </div>
          <div className="portfolio-info photo3">
            <h4>#Photography</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Photography;
