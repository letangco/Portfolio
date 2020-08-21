import React, { useState } from "react";
import "./Switcher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Language from "../Language/Language";
function Switcher() {
  const [classBtnSetting, setSetting] = useState(false);
  function setStateBtnSetting() {
    setSetting(!classBtnSetting);
  }
  function Open_CloseSetting(value) {
    if (value === false) return "style-switcher closeSwitcherSetting";
    else return "style-switcher openSwitcherSetting";
  }
  return (
    <div className={Open_CloseSetting(classBtnSetting)}>
      <div className="toggle-style-switcher" onClick={setStateBtnSetting}>
        <i className="fa fa-cog fa-spin"></i>
      </div>
      <h5>Style Switcher</h5>
      <ul>
        <li>
          <a href="a" title="pink" style={{ backgroundColor: "#ec1839" }}>
            {""}
          </a>
        </li>
        <li>
          <a href="a" title="blue" style={{ backgroundColor: "#2196f3" }}>
            {""}
          </a>
        </li>
        <li>
          <a href="a" title="orange" style={{ backgroundColor: "#fa5b0f" }}>
            {""}
          </a>
        </li>
        <li>
          <a href="a" title="yellow" style={{ backgroundColor: "#ffb400" }}>
            {""}
          </a>
        </li>
        <li>
          <a href="a" title="green" style={{ backgroundColor: "#72b626" }}>
            {""}
          </a>
        </li>
      </ul>
      <h5>Theme</h5>
      <div className="ThemeSwitch">
        <input type="checkbox" className="checkboxTheme" id="chk" />
        <label className="labelTheme" htmlFor="chk">
          <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faSun} />
          <div className="ball"></div>
        </label>
      </div>
      <h5>Language</h5>
      <Language />
    </div>
  );
}
export default Switcher;
