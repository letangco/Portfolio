import React,{useState, useEffect} from "react";
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
  faLink,
} from "@fortawesome/free-solid-svg-icons";
// According
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Education.css";
import { Link } from "@material-ui/core";
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

export default function Experience(props) {
  const classes = useStylesAccording();
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // Sắp xếp cho TimeLine
  const [align, setAlign] = useState("alternate");
  useEffect(() => {
    if (width <= 670) {
      setAlign("left");
    }
    else setAlign("alternate");
  }, [width]);
  // Change Color Text Theme
  function changeColorTextTheme(value, colorDark, colorLight) {
    if (value === "dark") {
      return { color: colorDark };
    }
    else return { color: colorLight };
  }
  return (
    <Timeline align={align} >

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}
            className="timeEducation"
          >
            Sep 14,2019 - Dec 22, 2019 <FontAwesomeIcon icon={faCalendarAlt} />
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
                  Online English Test Website
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{fontWeight:"700"}}>- Position: Student</Typography>

                <Typography style={{fontWeight:"700"}}>
                 - Project Description: Online English Test Website Development with HTML, CSS, JavaScript, PHP and MySQL management system.
                </Typography>
                <Typography style={{fontWeight:"700"}}>- Team size: 3</Typography>
                <Typography style={{fontWeight:"700"}}>- Responsibilities:</Typography>
                <Typography>
                  Communicate with teammates to clarify key function of the website.
                </Typography>
                <Typography>
                  Website user interface (UI) design
                </Typography>
                <Typography>
                  Design and create database
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                  - Technologies: HTML, CSS, JavaScript, PHP, MySQL management system.
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                - Link project: <Link href="https://github.com/letangco/OnlineEnglish-Test-Website" target="_blank" rel="noopener">
                    Here <FontAwesomeIcon icon={faLink}/>
                  </Link>
                  
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
            style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}
            className="timeEducation"
          >
            <FontAwesomeIcon icon={faCalendarAlt} /> June 12, 2020 - July 28, 2020
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
                  Calculator Death Rate and Dashboard Covid-19
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{fontWeight:"700"}}>
                 - Position: Intern
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                  - Project Description: Estimates of country-bycountry user mortality are caused by Covid-19 and statistics table of covid-19 worldwide.
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                 - Team size: 1
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                  - Responsibilities:
                </Typography>
                <Typography>
                  Website user interface (UI) design
                </Typography>
                <Typography>
                  Get data from the API and display it on the interface.
                </Typography>
                <Typography>
                  Study how to calculate Covid-19 mortality rate of each country.
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                  - Technologies: ReactJS, TypeScript, Bootstrap, Material UI, Google Chart, Apex Chart
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                  - Link project: <Link href="https://github.com/letangco/Covid-19-demo" target="_blank" rel="noopener">
                    Here <FontAwesomeIcon icon={faLink}/>
                  </Link>
                </Typography>
                <Typography style={{fontWeight:"700"}}>
                  - Link deploy project: <Link href="http://letangco.surge.sh/" target="_blank" rel="noopener">
                  http://letangco.surge.sh/
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>



  );
}
