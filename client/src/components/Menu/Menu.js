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
import Rocket from "../../image/rocket.png";
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
// Theme
// import {ThemeProvider,createGlobalStyle} from 'styled-components';

function Menu() {
  const { t } = useTranslation();
  const [onToggle, setStateToggle] = useState(false);
  const [isLoading, setStateLoading] = useState(true);

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setStateLoading(false); // Set lai isLoading sau 2s
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }, [isLoading]);

  var isSetIsLoading = () => {
    setStateLoading(false);
  };
  setTimeout(isSetIsLoading, 1500);

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
  function changePreLoader(value) {
    if (value === false) {
      return "preloader opacity-0";
    } else return "preloader";
  }

  //Theme GlobalStyles
  // const GlobalStyle = createGlobalStyle`
  //   body{
  //     background-color: ${props => props.theme.mode === 'dark'?'#111':'#eee'};
  //     color: ${props => props.theme.mode === 'dark' ? '#eee' : '#111'};
  //   }
  // `;
  return (
    <Router>
      {/* <ThemeProvider theme={{mode:'dark'}}> */}
      <div>
        {/* <GlobalStyle /> */}
        <div className={changePreLoader(isLoading)}>
          <div className="loader">
            <img src={Rocket} alt="RocketLoading" width="70px" />
          </div>
        </div>
        {/* Main component */}
        <div className="main-container">
          {/* Aside */}
          <div className={transportAside(onToggle)}>
            {/* Logo */}
            <div className="logo">
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
            <ul className="nav-menu">
              <li>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faHome} /> &nbsp;{t("menu.home")}
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about">
                  <FontAwesomeIcon icon={faUserTie} /> &nbsp;{" "}
                  {t("menu.aboutme")}
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/portfolio">
                  <FontAwesomeIcon icon={faBriefcase} /> &nbsp;
                  {t("menu.portfolio")}
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/different">
                  <FontAwesomeIcon icon={faPencilRuler} /> &nbsp;
                  {t("menu.otherSkills")}
                </NavLink>
              </li>
              <li>
                <NavLink exact to = '/contact'>
                  <FontAwesomeIcon icon={faComments} /> &nbsp;
                  {t("menu.contact")}
                </NavLink>
              </li>
              <li>
              <NavLink exact to = '/blog'>
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
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/different" exact component={Differents} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/blog" exact component={Form} />
              </Switch>
            </section>
          </div>
          {/* Main content */}
        </div>
        {/* Switcher Setting */}
        <Switcher />
        {/* Main component */}
      </div>
      {/* </ThemeProvider> */}
    </Router>
  );
}
export default Menu;
