import React, { useState, useEffect } from "react";
import Rocket from "../../image/rocket.png";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalSuccess from './ModalSuccess';
import ModalFailed from './ModalFailed';
import ScrollToTop from '../ScrollButton/ScrollToTop';
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faBlog,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import { useTranslation } from "react-i18next";
function Contact(props) {
  // Translation
  const { t } = useTranslation();
  // Pre Loading
  const [isLoading, setStateLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateLoading(false); // Set lai isLoading sau 2s
    }, 1500);
    return () => clearTimeout(timer);
  }, [isLoading]);
  function changePreLoader(value) {
    if (value === false) {
      return "preloader opacity-0";
    } else return "preloader";
  }
  // Scroll Component
  var [valueScroll, setScrollValue] = useState(0);
  window.onscroll = function () {
    ScrollIndicator();
  };

  function ScrollIndicator() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    setScrollValue(scrolled);
    // document.getElementById("myBar").style.width = scrolled + "%";
  }
  // Submit Form Process
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  // handle inputs

  function handleName(e) {
    setName(e.target.value);
  };

  function handleLastname(e) {
    setLastName(e.target.value);
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  };

  function handleSubject(e) {
    setSubject(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  };

  // end of handle inputs
  useEffect(() => {
    resetForm();
  }, [sent]);
  // When click button submit Form
  function formSubmit(e) {
    // e.preventDefault();
    if (name !== "" && lastname !== "" && email !== "" && subject !== "" && message !== "") {
      let data = {
        name: name,
        lastname: lastname,
        email: email,
        subject: subject,
        message: message,
      };

      axios
        .post("/api/forma", data)
        .then((res) => {
          setSent(true);
          console.log("done sent");
        })
        .catch(() => {
          console.log("message not send");
        });
    }
    else {
      return <ModalFailed />
    }
  };

  // for reseting the form data
  function resetForm() {
    setName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };
  // Modal
  function renderModal(value) {
    if (value === true) {
      return <ModalSuccess />
    }
  }
  // Change Title Color
  function changeColorTitle(value) {
    switch (value) {
      case "#ec1839":
        return "section-title padd-15 color-change-title-red";
      case "#2196f3":
        return "section-title padd-15 color-change-title-blue";
      case "#fa5b0f":
        return "section-title padd-15 color-change-title-orange";
      case "#ffb400":
        return "section-title padd-15 color-change-title-yellow";
      case "#72b626":
        return "section-title padd-15 color-change-title-green";
      default:
        break;
    }
  }
  return (
    <>
      <div className={changePreLoader(isLoading)}>
        <div className="loader">
          <img src={Rocket} alt="RocketLoading" width="70px" />
        </div>
      </div>
      <div
        className="header-scroll"
        style={{ marginLeft: "0px", padding: "0px" }}
      >
        <div className="progress-container">
          <div
            className="progress-bar-scroll"
            id="myBar"
            style={{ width: valueScroll.toString() + "%" }}
          ></div>
        </div>
      </div>
      {/* Content Contact */}
      <section className="portfolio section-portfolio contact">
        <div className="row-about">
          <div className={changeColorTitle(props.btnColor)}>
            <h2 style={props.theme==="dark"?{color:"#ffffff"}:{color:"#302e4d"}}>{t('contactMe.titlePage')}</h2>
          </div>
        </div>
        <div className="row-about content-contact">
          <div className="containerContact">
            <div className="contactInfo" style={{ backgroundColor: props.btnColor }}>
              <div>
                <h2>{t('contactMe.contactInfo')}</h2>
                <ul className="info">
                  <li>
                    <span><FontAwesomeIcon className="icon-info-contact" icon={faPhone} /></span>
                    <span>(+84) 332.858.127</span>
                  </li>
                  <li>
                    <span><FontAwesomeIcon className="icon-info-contact" icon={faMapMarkerAlt} /></span>
                    <span>{t('contactMe.address')}</span>
                  </li>
                  <li>
                    <span><FontAwesomeIcon className="icon-info-contact" icon={faEnvelope} /></span>
                    <span>letangco@gmail.com</span>
                  </li>
                </ul>
                <ul className="sci">
                  <li>
                    <a href="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="facebook">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="facebook">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="facebook">
                      <FontAwesomeIcon icon={faBlog} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contactForm" style={props.theme==="dark"?{backgroundColor:"#222222",border:"1px solid #393939"}:{backgroundColor:"rgb(253, 249, 255)",border:"1px solid #e8dfec"}}>
              <h2 style={props.theme==="dark"?{color:"#ffffff"}:{color:"#302e4d"}}>{t('contactMe.sendAMessage')}</h2>
              <div className="formBox">
                <div className="inputBox w50">
                  <input type="text" name="name" value={name} required onChange={handleName} style={props.theme==="dark"?{color:props.btnColor}:{}}/>
                  <span style={props.theme==="dark"?{color:"#e9e9e9"}:{}}>{t('contactMe.firstName')}</span>
                  <p className={name ? "spaceChar displayNone" : "spaceChar"}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </p>
                </div>
                <div className="inputBox w50">
                  <input type="text" name="lastname" value={lastname} required onChange={handleLastname} style={props.theme==="dark"?{color:props.btnColor}:{}}/>
                  <span style={props.theme==="dark"?{color:"#e9e9e9"}:{}}>{t('contactMe.lastName')}</span>
                  <p className={lastname ? "spaceChar displayNone" : "spaceChar"}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </p>
                </div>
                <div className="inputBox w50">
                  <input type="text" name="email" value={email} required onChange={handleEmail} style={props.theme==="dark"?{color:props.btnColor}:{}}/>
                  <span style={props.theme==="dark"?{color:"#e9e9e9"}:{}}>{t('contactMe.emailAddress')}</span>
                  <p className={email ? "spaceChar displayNone" : "spaceChar"}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </p>
                </div>
                <div className="inputBox w50">
                  <input type="text" name="subject" value={subject} required onChange={handleSubject} style={props.theme==="dark"?{color:props.btnColor}:{}}/>
                  <span style={props.theme==="dark"?{color:"#e9e9e9"}:{}}>{t('contactMe.subject')}</span>
                  <p className={subject ? "spaceChar displayNone" : "spaceChar"}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </p>
                </div>
                <div className="inputBox w100">
                  <textarea name="message" value={message} required onChange={handleMessage} style={props.theme==="dark"?{color:props.btnColor}:{}}></textarea>
                  <span style={props.theme==="dark"?{color:"#e9e9e9"}:{}}>{t('contactMe.writeYourMessage')}</span>
                  <p className={message ? "spaceCharMessage displayNone" : "spaceCharMessage"}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </p>
                </div>
                <div className="inputBox w100">
                  <input type="submit" value={t('contactMe.send')} onClick={formSubmit} style={{ backgroundColor: props.btnColor }} />
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {/* <ModalSuccess showModal={sent}/>
          <ModalFailed /> */}
          {renderModal(sent)}

        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
export default Contact;