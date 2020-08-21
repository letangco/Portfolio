import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Portfolio1 from '../../image/PortFolio_Covi.PNG';
import Portfolio2 from '../../image/PortFolio_English.PNG';
import Portfolio3 from '../../image/PortFolio_Portfolio.PNG';
import Portfolio4 from '../../image/PortFolio_Photography.PNG';
import Portfolio5 from '../../image/PortFolio_Photography1.PNG';
import Portfolio6 from '../../image/coffee-apple.jpg';
import Portfolio7 from '../../image/PortFolio_Logo.PNG';
import Portfolio8 from '../../image/PortFolio_Logo2.PNG';
import Portfolio9 from '../../image/PortFolio_Video1.PNG';
import Portfolio10 from '../../image/PortFolio_Video2.PNG';
import Portfolio11 from '../../image/PortFolio_Video3.PNG';
function All() {
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
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio9} alt="A" />
          </div>
          <div className="portfolio-info videoEditing1">
            <h4>#Video Editing</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio10} alt="A" />
          </div>
          <div className="portfolio-info videoEditing2">
            <h4>#Video Editing</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15 col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={Portfolio11} alt="A" />
          </div>
          <div className="portfolio-info videoEditing3">
            <h4>#Video Editing</h4>
            <div className="iconPortfolio">
              <FontAwesomeIcon className="icon" icon={faSearch} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
