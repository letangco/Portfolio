import React from "react";
import Avatar from "../../image/Circle_LTC_AVT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "../ScrollButton/ScrollToTop.js";
import { NavLink } from "react-router-dom";
// import PreLoading from '../PreLoading/PreLoading';
import Particles from 'react-particles-js';
import Typed from 'react-typed';
function Home(props) {
  console.log(props.btnColor);
  // Style color Particles 
  // const node = (props.theme) => {
  //   props.theme ==="dark"? 
  // }
  return (
    <>
      {/* <PreLoading /> */}
      <Particles
        className="particles-home"
        params={{
          backgroundMode: {
            enable: false,
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: props.btnColor,

            },

            stroke: {
              width: 1
            },
            opacity: {
              value: 0.5,
              random: false,
              animation: {
                enable: false,
                speed: 3,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 0.1,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 100,
              color: props.theme === "dark" ? "#e8dfec" : "#393939",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
              },
              repulse: {
                distance: 200
              },
              push: {
                quantity: 4
              },
              remove: {
                quantity: 2
              }
            }
          },
          // detectRetina: true,
        }} />
      
      <div className="container">
      
        <div className="intro">

          <img src={Avatar} alt="Image_avatar" className="shadow-dark" />
          <h1 style={props.theme === "dark" ? { color: "#ffffff" } : { color: "#302e4d" }}>
            <Typed
              strings={['Le Tang Co']}
              typeSpeed={80}
            />
          </h1>
          <p style={props.theme === "dark" ? { color: "#e9e9e9" } : { color: "#504e70" }}>
            <Typed
              strings={[
                "I'm a Web Development", "React Developer"]}
              typeSpeed={40}
              backSpeed={70}
              loop >
            </Typed>
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/letang.co/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: props.btnColor }}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/tangco_it/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: props.btnColor }}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            {/* <a href="http://localhost:3000/contact" rel="noopener noreferrer">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a> */}
            <NavLink exact to="/contact" style={{ backgroundColor: props.btnColor }}>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </NavLink>
            <NavLink exact to="/" style={{ backgroundColor: props.btnColor }}>
              <FontAwesomeIcon icon={faBlog} />
            </NavLink>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}
export default Home;
