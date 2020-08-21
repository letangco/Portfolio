import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Portfolio1 from '../../image/PortFolio_Covi.PNG';
import Portfolio2 from '../../image/PortFolio_English.PNG';
import Portfolio3 from '../../image/PortFolio_Portfolio.PNG';
function DevDesign() {
  return (
    <>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio1} alt="A" />
          </div>
          <div className="portfolio-info web-covid">
            <h4>#Web Design</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio2} alt="A" />
          </div>
          <div className="portfolio-info english-test">
            <h4>#Web Design</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio3} alt="A" />
          </div>
          <div className="portfolio-info web-portfolio">
            <h4>#Web Design</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default DevDesign;
