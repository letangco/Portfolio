import React, { useState,useEffect } from "react";
import Rocket from "../../image/rocket.png";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
function Contact(){
  // Pre Loading
  const [isLoading, setStateLoading] = useState(true);
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
  const [buttonText, setButtonText] = useState("Send Message");
  // handle inputs

  function handleName(e) {
    setName(e.target.value);
  };

 function handleLastname (e){
    setLastName(e.target.value);
  };

  function handleEmail (e) {
    setEmail(e.target.value);
  };
  
  function handleSubject(e){
    setSubject(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  };

  // end of handle inputs
  useEffect(()=>{
    resetForm();
  },[sent]);
  // When click button submit Form
  function formSubmit(e){
    e.preventDefault();
    let data = {
      name: name,
      lastname:lastname,
      email: email,
      subject: subject,
      message:message,
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
      <section className="portfolio section-portfolio">
        <div className="row-about">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row-about content-contact">
          <div className="containerContact">
            <div className="contactInfo">
              <div>
                <h2>Contact Info</h2>
                <ul className="info">
                  <li>
                    <span><FontAwesomeIcon className="icon-info-contact" icon={faPhone} /></span>
                    <span>(+84) 332.858.127</span>
                  </li>
                  <li>
                    <span><FontAwesomeIcon className="icon-info-contact" icon={faMapMarkerAlt} /></span>
                    <span>District 9, Ho Chi Minh City</span>
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

            <div className="contactForm">
              <h2>Send a Message</h2>
              <div className="formBox">
                <div className="inputBox w50">
                  <input type="text" name="name" value={name} required onChange={handleName} />
                  <span>First Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" name="lastname" value={lastname} required onChange={handleLastname} />
                  <span>Last Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="email" name="email" value={email} required onChange={handleEmail} />
                  <span>Email Address</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" name="subject" value={subject} required onChange={handleSubject} />
                  <span>Subject</span>
                </div>
                <div className="inputBox w100">
                  <textarea name="message" value={message} required onChange={handleMessage}></textarea>
                  <span>Write your message here...</span>
                </div>
                <div className="inputBox w100">
                  <input type="submit" value="Send" onClick={formSubmit} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  );
}
export default Contact;