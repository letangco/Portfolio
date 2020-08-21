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

export default function Education() {
  const classes = useStylesAccording();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
        {/* Thời gian */}
          <Typography
            variant="body2"
            color="textSecondary"
            className="timeEducation"
          >
            2017 - Present <FontAwesomeIcon icon={faCalendarAlt} />
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            {/* ICON NODE */}
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        {/* Nội dung */}
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          {/* According */}
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
                  University of Information Technology (UIT)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>Major: </span>{" "}
                      Information system
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}
                      <span style={{ fontWeight: "600" }}>GPA: </span> 7.62/10
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faCheck} /> Data structures and
                          algorithms: 8.3/10
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCheck} /> Data mining: 9.2/10
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCheck} />{" "}
                          Information-technology project management: 8.6/10
                        </li>
                      </ul>
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
            <FontAwesomeIcon icon={faCalendarAlt} /> June 2018 - March 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
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
                  Member of CEEC Club (Computer Engineering Embedded Club)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}Made Remote controlled car by RF with my team.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "}Participated in teaching basic C programming for.
                      
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
            June 1, 2020 - July 17, 2020 <FontAwesomeIcon icon={faCalendarAlt} />
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
                  Front-End trainee at Anttizen company
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "} Learned and used ReactJS with Typescript for projects and demos in Fresher Tour 3
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquare} />{" "} Learn and use Material UI, Bootstrap to design the interface
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
