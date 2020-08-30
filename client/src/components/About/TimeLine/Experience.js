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
  faLink,
} from "@fortawesome/free-solid-svg-icons";
// According
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Education.css";
import { Link } from "@material-ui/core";
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
  // Translation
  const { t } = useTranslation();
  return (
    <Timeline align={align} >

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            style={changeColorTextTheme(props.theme, "#ffffff", "#302e4d")}
            className="timeEducation"
          >
            {t('experience.exp1.time')} <FontAwesomeIcon icon={faCalendarAlt} />
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
                  {t('experience.exp1.title')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontWeight: "700" }}>{t('experience.exp1.position')}</Typography>

                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp1.projectDescription')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp1.teamSize')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp1.responsive')}
                </Typography>
                <Typography>
                  {t('experience.exp1.communicate')}
                </Typography>
                <Typography>
                  {t('experience.exp1.website')}
                </Typography>
                <Typography>
                  {t('experience.exp1.design')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp1.technology')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp1.link')} <Link style={{textDecoration:"none"}} href="https://github.com/letangco/OnlineEnglish-Test-Website" target="_blank" rel="noopener">
                    {t('experience.exp1.here')} <FontAwesomeIcon icon={faLink} />
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
            <FontAwesomeIcon icon={faCalendarAlt} /> {t('experience.exp2.time')}
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
                  {t('experience.exp2.title')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp2.position')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                 {t('experience.exp2.projectDescription')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp2.teamSize')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp2.responsive')}
                </Typography>
                <Typography>
                  {t('experience.exp2.website')}
                </Typography>
                <Typography>
                  {t('experience.exp2.get')}
                </Typography>
                <Typography>
                  {t('experience.exp2.study')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp2.technology')}
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp2.link')} <Link href="https://github.com/letangco/Covid-19-demo" target="_blank" rel="noopener" style={{textDecoration:"none"}}>
                    {t('experience.exp2.here')} <FontAwesomeIcon icon={faLink} />
                  </Link>
                </Typography>
                <Typography style={{ fontWeight: "700" }}>
                  {t('experience.exp2.linkDeploy')} <Link href="http://letangco.surge.sh/" target="_blank" rel="noopener" style={{textDecoration:"none"}}>
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
