import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Portfolio9 from '../../image/PortFolio_Video1.PNG';
import Portfolio10 from '../../image/PortFolio_Video2.PNG';
import Portfolio11 from '../../image/PortFolio_Video3.PNG';
function VideoEditing() {
  return (
    <>
      
      
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

export default VideoEditing;
