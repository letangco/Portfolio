import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import { TimelineSeparator } from "@material-ui/lab";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
// According
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Education.css";
const useStylesAccording = makeStyles((theme) => ({
  paper: {
    padding: "0px",
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Experience() {
  const classes = useStylesAccording();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className="timeEducation"
          >
            Sep 14,2019 - Dec 22, 2019 <FontAwesomeIcon icon={faCalendarAlt} />
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {/* ICON NODE */}
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="h6"
                  component="h1"
                  className="titleEducation"
                >
                  Online English Test Website
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Position: </span>{" "}
                      Student
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Project Description: </span>{" "}
                      Online English Test Website Development with HTML, CSS, JavaScript, PHP and MySQL management system.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Team size: </span>{" "}3
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Responsibilities: </span>{" "}
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faCheck} /> Communicate with teammates to clarify key function of the website.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCheck} /> Website user interface (UI) design
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCheck} />{" "}
                          Design and create database
                        </li>
                      </ul>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Technologies: </span>{" "}
                      HTML, CSS, JavaScript, PHP, MySQL management system.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Link project: </span>{" "}  https://github.com/letangco/OnlineEnglish-Test-Website
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className="timeEducation"
          >
           <FontAwesomeIcon icon={faCalendarAlt} /> June 12, 2020 - July 28, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            {/* ICON NODE */}
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="h6"
                  component="h1"
                  className="titleEducation"
                >
                  Calculator Death Rate and Dashboard Covid-19
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <ul>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Position: </span>{" "}
                      Intern
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Project Description: </span>{" "}
                      Estimates of country-bycountry user mortality are caused by Covid-19 and statistics table of covid-19 worldwide.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Team size: </span>{" "}1
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Responsibilities: </span>{" "}
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faCheck} /> Website user interface (UI) design
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCheck} /> Get data from the API and display it on the interface.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCheck} />{" "}
                          Study how to calculate Covid-19 mortality rate of each country.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Technologies: </span>{" "}
                      ReactJS, TypeScript, Bootstrap, Material UI, Google Chart, Apex Chart
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Link project: </span>{" "}
                      https://github.com/letangco/Covid-19-demo
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Link deploy project: </span>{" "}
                      http://letangco.surge.sh/
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
