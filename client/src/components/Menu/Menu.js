import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserTie,
  faBriefcase,
  faBlog,
  faComments,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import "../../style/Menu.css";
import "../../style/Skin/pink.css";
import "../../style/Preloader.css";
import About from "../About/About.js";
import Home from "../Home/Home.js";
import Differents from "../Differents/Differents";
import { useTranslation } from "react-i18next";
import Switcher from "../SwitcherSetting/Switcher";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../ContactMe/Contact";
import Form from "../MyBlog/Form";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
function Menu() {
  const { t } = useTranslation();
  const [onToggle, setStateToggle] = useState(false);
  const [isActive, setIsActive] = useState("home");

  // Đóng mở Menu
  function asideSectionToggleBtn() {
    setStateToggle(!onToggle);
  }
  function transportToggle(value) {
    if (value === true) {
      return "nav-toggle open";
    } else {
      return "nav-toggle";
    }
  }
  function transportAside(value) {
    if (value === true) return "aside open";
    else return "aside";
  }
  function transportSection(value) {
    if (value === true) return "home section open";
    else return "home section";
  }
  // Change Button
  const [btnColor, setBtnColor] = useState("#ec1839");

  function callbackFunction(colorBtn) {
    setBtnColor(colorBtn)
  }
  // Style - Logo
  function colorLogo(btnColor) {
    switch (btnColor) {
      case "#ec1839":
        return "logo red";
      case "#2196f3":
        return "logo blue";
      case "#fa5b0f":
        return "logo orange";
      case "#ffb400":
        return "logo yellow";
      case "#72b626":
        return "logo green";
      default:
        break;
    }
  }
  function HoverBtnColor(value) {
    switch (value) {
      case "#ec1839":
        return "btnRedHover";
      case "#2196f3":
        return "btnBlueHover";
      case "#fa5b0f":
        return "btnOrangeHover";
      case "#ffb400":
        return "btnYellowHover";
      case "#72b626":
        return "btnGreenHover";
      default:
        break;
    }
  }
  return (
    <Router>
      <div>
        {/* Main component */}
        <div className="main-container">
          {/* Aside */}
          <div className={transportAside(onToggle)}>
            {/* Logo */}
            <div className={colorLogo(btnColor)}>
              <a href="a">LE TANG CO</a>
            </div>
            {/* Nav Toggle btn */}
            <div
              className={transportToggle(onToggle)}
              onClick={asideSectionToggleBtn}
            >
              <span></span>
            </div>
            {/* Nav */}
            <ul className="nav-menu-div">
              <li onClick={() => { setIsActive("home") }} className={HoverBtnColor(btnColor)}>
                <NavLink to="/" style={isActive==="home"?{color:btnColor}:{color:"#302e4d"}}>
                  <FontAwesomeIcon icon={faHome} /> &nbsp;{t("menu.home")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("about") }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to="/about" style={isActive==="about"?{color:btnColor}:{color:"#302e4d"}}>
                  <FontAwesomeIcon icon={faUserTie} /> &nbsp;{" "}
                  {t("menu.aboutme")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("portfolio") }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to="/portfolio" style={isActive==="portfolio"?{color:btnColor}:{color:"#302e4d"}}>
                  <FontAwesomeIcon icon={faBriefcase} /> &nbsp;
                  {t("menu.portfolio")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("skills") }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to="/different" style={isActive==="skills"?{color:btnColor}:{color:"#302e4d"}}>
                  <FontAwesomeIcon icon={faPencilRuler} /> &nbsp;
                  {t("menu.otherSkills")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("contact") }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to='/contact' style={isActive==="contact"?{color:btnColor}:{color:"#302e4d"}}>
                  <FontAwesomeIcon icon={faComments} /> &nbsp;
                  {t("menu.contact")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("myblog") }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to='/blog' style={isActive==="myblog"?{color:btnColor}:{color:"#302e4d"}}>
                  <FontAwesomeIcon icon={faBlog} /> &nbsp; {t("menu.myblog")}
                </NavLink>
              </li>
            </ul>
            {/* CopyRight */}
            <div className="copyright-text">
              &copy; 2020 Portfolio Le Tang Co
            </div>
          </div>
          {/* Aside */}
          {/* Main content */}
          <div className="main-content">
            <section className={transportSection(onToggle)}>
              <Switch>
                <Route path="/" exact component={()=><Home btnColor={btnColor}/>} />
                <Route path="/about" exact component={()=><About btnColorAbout={btnColor}/>} />
                <Route path="/portfolio" exact component={()=><Portfolio btnColorAbout={btnColor}/>} />
                <Route path="/different" exact component={Differents} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/blog" exact component={Form} />
              </Switch>
            </section>
          </div>
          {/* Main content */}
        </div>
        {/* Switcher Setting */}
        <Switcher parentCallback={callbackFunction} />
        {/* Main component */}
      </div>
    </Router>
  );
}
export default Menu;
