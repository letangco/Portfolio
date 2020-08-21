import React, { Component } from "react";
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

export default class Contact extends Component {
  state = {
    isLoading: true,
    valueScroll: 0,
    name: "",
    lastname: "",
    email: "",
    message: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
  };
  // Loading Pre



  // handle inputs
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastname = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  // end of handle inputs

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    axios
      .post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not send");
      });
  };

  // for reseting the form data
  resetForm = () => {
    this.setState({
      name: "",
      lastname: "",
      message: "",
      email: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };
  // Scroll Component
  ScrollIndicator = ()=> {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = ((winScroll / height) * 100);
    console.log(scrolled);
    // this.setState({valueScroll:scrolled})
  }
  render() {
    // Loading Pre
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500);
    function changePreLoader(value) {
      if (value === false) {
        return "preloader opacity-0";
      } else return "preloader";
    }
    // Scroll Component
    window.onscroll =function () {
      // this.ScrollIndicator();
    };
    
    var scroll = this.state.valueScroll;
    return (
      <>
        <div className={changePreLoader(this.state.isLoading)}>
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
              style={{ width: window.onscroll(document.body.scrollTop/(document.documentElement.scrollHeight -
                document.documentElement.clientHeight)*100) + "%" }}
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
                    <input type="text" name="" required onChange={this.handleName} />
                    <span>First Name</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="text" name="" required onChange={this.handleLastname} />
                    <span>Last Name</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="text" name="" required onChange={this.handleEmail} />
                    <span>Email Address</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="text" name="" required onChange={this.handleSubject} />
                    <span>Subject</span>
                  </div>
                  <div className="inputBox w100">
                    <textarea name="" required onChange={this.handleMessage}></textarea>
                    <span>Write your message here...</span>
                  </div>
                  <div className="inputBox w100">
                    <input type="submit" value="Send" onClick={this.formSubmit} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


      </>
    );
  }
}
