import React, { useState, useEffect } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
// According
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Education.css";
import { useTranslation } from 'react-i18next';
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

export default function Education(props) {
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
  // Translation
  const { t } = useTranslation();
  return (
    // Align alternate/ left/right
    <Timeline align={align} >
      <TimelineItem>
        <TimelineOppositeContent>
          {/* Thời gian */}
          <Typography
            variant="body2"
            className="timeEducation"
            style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}
          >
            {t('education.edu1.time')} <FontAwesomeIcon icon={faCalendarAlt} />
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
                  {t('education.edu1.title')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontWeight: "700" }}>
                  {t('education.edu1.major')}
                  </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('education.edu1.gpa')}
                  </Typography>
                <Typography>
                  {t('education.edu1.data1')}
                  </Typography>
                <Typography>
                  {t('education.edu1.data2')}
                  </Typography>
                <Typography>
                  {t('education.edu1.info')}
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
            className="timeEducation"
            style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}
          >
            <FontAwesomeIcon icon={faCalendarAlt} /> {t('education.edu2.title')}
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
                  {t('education.edu2.title')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontWeight: "700" }}>
                  {t('education.edu2.made')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('education.edu2.participated')}
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
            className="timeEducation"
            style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}
          >
            {t('education.edu3.time')} <FontAwesomeIcon icon={faCalendarAlt} />
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
                  {t('education.edu3.title')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontWeight: "700" }}>
                  {t('education.edu3.learned')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('education.edu3.learn')}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
