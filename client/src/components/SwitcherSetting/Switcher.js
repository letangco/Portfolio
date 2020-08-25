import React, { useState, useEffect,useRef } from "react";
import "./Switcher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Language from "../Language/Language";
function useOutsideAlerter(ref,setSetting) {
  useEffect(() => {
      // Xử lý khi click outside
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              // alert("You clicked outside of me!");
              setSetting(false);
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}
function Switcher(props) {
  // Open Button Setting
  const [classBtnSetting, setSetting] = useState(false);
  function setStateBtnSetting() {
    setSetting(!classBtnSetting);
  }
  function Open_CloseSetting(value) {
    if (value === false) return "style-switcher closeSwitcherSetting";
    else return "style-switcher openSwitcherSetting";
  }
  // Button Change Color Button
  const [btnColor, setColor] = useState("ec1839");
  function setBtnColor (value)
  {
    setColor(value);
    props.parentCallback(value);
  }
  // outside Click
  const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,setSetting);
  return (
    <div className={Open_CloseSetting(classBtnSetting)} ref={wrapperRef}>
      <div className="toggle-style-switcher" onClick={setStateBtnSetting}>
        <i className="fa fa-cog fa-spin"></i>
      </div>
      <h5>Style Switcher</h5>
      <ul>
        <li>
          <p style={{ backgroundColor: "#ec1839" }} onClick={()=>{setBtnColor("#ec1839")}}>
            {""}
          </p>
        </li>
        <li>
          <p style={{ backgroundColor: "#2196f3" }} onClick={()=>{setBtnColor("#2196f3")}}>
            {""}
          </p>
        </li>
        <li>
          <p style={{ backgroundColor: "#fa5b0f" }} onClick={()=>{setBtnColor("#fa5b0f")}}>
            {""}
          </p>
        </li>
        <li>
          <p style={{ backgroundColor: "#ffb400" }} onClick={()=>{setBtnColor("#ffb400")}}>
            {""}
          </p>
        </li>
        <li>
          <p style={{ backgroundColor: "#72b626" }} onClick={()=>{setBtnColor("#72b626")}}>
            {""}
          </p>
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
