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
import '../../style/Skin/Theme.css';
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
  function changeClassToggleMenu(value) {
    switch (value) {
      case "#ec1839":
        return "toggle-red";
      case "#2196f3":
        return "toggle-blue";
      case "#fa5b0f":
        return "toggle-orange";
      case "#ffb400":
        return "toggle-yellow";
      case "#72b626":
        return "toggle-green";
      default:
        break;
    }
  }
  // Lay gia tri theme tu Switcher
  const [theme, setTheme] = useState("light");
  const [asideTheme, setAsideTheme] = useState("#fdf9ff");
  function onHandleTheme(value) {
    // value === true ? setTheme("light") : setTheme("dark")
    if(value){
      setTheme("light");
      setAsideTheme("#fdf9ff");
    }
    else {
      setTheme("dark");
      setAsideTheme("#222222");
    }
  }
  console.log(theme,asideTheme)
  const Heading = {
    "dark":"#ffffff",
    "light":"#302e4d"
  };
  const borderBottom = {
    "dark":{
      borderBottom: "1px solid #393939",
      color: "#ffffff"
    },
    "light":{
      borderBottom: "1px solid #e8dfec",
      color: "#302e4d"
    }
  }
  return (
    <Router>
      <div>
        {/* Main component */}
        <div className="main-container">
          {/* Aside */}
          <div className={transportAside(onToggle)} style={theme==="dark"?{backgroundColor:asideTheme,borderRight:"1px solid #393939"}:{backgroundColor:asideTheme,borderRight:"1px solid #e8dfec"}}>
            {/* Logo */}
            <div className={colorLogo(btnColor)}>
              <NavLink exact to="/home" style={theme==="dark"?{color:Heading.dark}:{color:Heading.light}}>
                LE TANG CO
              </NavLink>
            </div>
            {/* Nav Toggle btn */}
            <div
              className={transportToggle(onToggle)}
              onClick={asideSectionToggleBtn}
            >
              <span className={changeClassToggleMenu(btnColor)}></span>
            </div>
            {/* Nav */}
            <ul className="nav-menu-div">
              <li onClick={() => { setIsActive("home") ;setStateToggle(!onToggle)}} className={HoverBtnColor(btnColor)}>
                <NavLink to="/home" style={isActive === "home" ? theme==="dark"?{color: btnColor,borderBottom:"1px solid #393939"}:{color: btnColor,borderBottom:"1px solid #e8dfec"} : 
                (theme==="dark"?borderBottom.dark:borderBottom.light)}>
                  <FontAwesomeIcon icon={faHome} /> &nbsp;{t("menu.home")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("about");setStateToggle(!onToggle) }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to="/about" style={isActive === "about" ? theme==="dark"?{color: btnColor,borderBottom:"1px solid #393939"}:{color: btnColor,borderBottom:"1px solid #e8dfec"} : 
                (theme==="dark"?borderBottom.dark:borderBottom.light)}>
                  <FontAwesomeIcon icon={faUserTie} /> &nbsp;{" "}
                  {t("menu.aboutme")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("portfolio");setStateToggle(!onToggle) }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to="/portfolio" style={isActive === "portfolio" ? theme==="dark"?{color: btnColor,borderBottom:"1px solid #393939"}:{color: btnColor,borderBottom:"1px solid #e8dfec"} : 
                (theme==="dark"?borderBottom.dark:borderBottom.light)}>
                  <FontAwesomeIcon icon={faBriefcase} /> &nbsp;
                  {t("menu.portfolio")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("skills");setStateToggle(!onToggle) }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to="/different" style={isActive === "skills" ? theme==="dark"?{color: btnColor,borderBottom:"1px solid #393939"}:{color: btnColor,borderBottom:"1px solid #e8dfec"} : 
                (theme==="dark"?borderBottom.dark:borderBottom.light)}>
                  <FontAwesomeIcon icon={faPencilRuler} /> &nbsp;
                  {t("menu.otherSkills")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("contact");setStateToggle(!onToggle) }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to='/contact' style={isActive === "contact" ? theme==="dark"?{color: btnColor,borderBottom:"1px solid #393939"}:{color: btnColor,borderBottom:"1px solid #e8dfec"} : 
                (theme==="dark"?borderBottom.dark:borderBottom.light)}>
                  <FontAwesomeIcon icon={faComments} /> &nbsp;
                  {t("menu.contact")}
                </NavLink>
              </li>
              <li onClick={() => { setIsActive("myblog");setStateToggle(!onToggle) }} className={HoverBtnColor(btnColor)}>
                <NavLink exact to='/blog' style={isActive === "myblog" ? theme==="dark"?{color: btnColor,borderBottom:"1px solid #393939"}:{color: btnColor,borderBottom:"1px solid #e8dfec"} : 
                (theme==="dark"?borderBottom.dark:borderBottom.light)}>
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
            <section className={transportSection(onToggle)} style={theme==="dark"?{backgroundColor:"#151515"}:{}}>
              <Switch>
                <Route path="/home" exact component={() => <Home btnColor={btnColor} theme={theme}/>} />
                <Route path="/about" exact component={() => <About btnColorAbout={btnColor} theme={theme}/>} />
                <Route path="/portfolio" exact component={() => <Portfolio btnColor={btnColor} theme={theme}/>} />
                <Route path="/different" exact component={() => <Differents btnColor={btnColor} theme={theme}/>} />
                <Route path="/contact" exact component={() => <Contact btnColor={btnColor} theme={theme} />} />
                <Route path="/blog" exact component={()=><Form btnColor={btnColor} theme={theme}/>} />
              </Switch>
            </section>
          </div>
          {/* Main content */}
        </div>
        {/* Switcher Setting */}
        <Switcher parentCallback={callbackFunction} onHandleTheme={onHandleTheme} />
        {/* Main component */}
      </div>
    </Router>
  );
}
export default Menu;
