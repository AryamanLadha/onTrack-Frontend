import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TriangleDown from "../assets/icons/DarkBrownTriangleDown.svg";
import { makeStyles } from "@mui/styles";
import { MiniCourseCard } from "./index";

const useStyles = (props) => makeStyles((theme) => ({
  accordionDropdown: {
    width: "100%",
    height: "6rem",
    flexDirection: "row-reverse",
    boxShadow: "none",
    border: "0.1rem solid",
    borderRadius: props.expanded ? "1.5rem 1.5rem 0rem 0rem !important" : "1.5rem !important",
    borderColor: theme.color.darkBeige,
  },

  typography: {
    paddingTop: "0.5rem",
    font: theme.font.accordionDropdown,
  },

  root: {
    borderRadius: "0rem 0rem 1.5rem 1.5rem !important",
    width: "84.8rem",
    height: "100%",
    
    "& .MuiPaper-root": {
      height: "7.2rem",
      boxShadow: "none",
    },

    "& .MuiAccordionDetails-root" : {
      position: "absolute",
      width: "84.8rem",
      top: "7rem",
      left: "-0.1rem",
      marginBottom: "0rem",
      border: "0.1rem solid",
      borderRadius: "0rem 0rem 1.5rem 1.5rem",
      borderColor: theme.color.darkBeige,
      background: theme.color.white,
    }
  },

  miniCourseCardWrapper: {
    "@media (min-width:1024px)": { 
      marginTop: "2rem"
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  miniCourseCardContainer: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    marginBottom: "2rem",
  },
  
  emptyDiv: {
    height: props.height,
    borderTop: "none !important",
    border: props.expanded ? `0.1rem solid ${theme.color.lightBeige} !important` : "none",
    borderRadius: "0rem 0rem 1.5rem 1.5rem",
    marginBottom: "2.7rem",
  }
}));


const SelectCourseDropdown = ({ data, overlayOpened, setOverlayOpened, setQuarterOfOverlay }) => {
  const [ expanded, setExpanded ] = useState(false);
  const [ height, setHeight ] = useState(0);
  const [ numRows, setNumRows ] = useState(0);

  const props = {
    height: height,
    expanded: expanded,
  }
  const classes = useStyles(props)();

  useEffect(() => {
    const numberOfCourses = data.courses.length;
    // // any subjects that have more than 5 courses adds extraRow
    setNumRows(Math.floor(numberOfCourses/5)+1);

    // set height of emptyDiv: when accordian dropdown is expanded
    expanded
    ? setHeight(`${(numRows-1)*14+17}rem`)
    : setHeight(`0rem`)
  }, [expanded]);

  const handleChange = () => {
    setExpanded(!expanded);
  }
  
  return (
    <div className={classes.root}>
      <Accordion 
        disableGutters
        className={classes.accordionDropdown}
        onChange={handleChange}
        TransitionProps={{timeout: 0}}
      >
        <AccordionSummary
          expandIcon={
            <img 
              style={{ width: "3.5rem" }} 
              src={TriangleDown} 
              className="triangle" 
              alt="triangle" 
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"           
        >
          <Typography className={classes.typography}>
            {data.quarter}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.miniCourseCardWrapper}>
            {[...Array(numRows).keys()].map((i) => (
              <div key={i} className={classes.miniCourseCardContainer}>
              {data.courses.slice(i*5, i*5+5).map((course, idx) => 
                <MiniCourseCard key={idx} name={course} />
              )}
              {((i === numRows-1 && data.courses.length !== 0) || data.courses.length === 0) && 
                <MiniCourseCard 
                  quarter={data.quarter}
                  overlayOpened={overlayOpened}
                  setOverlayOpened={setOverlayOpened}
                  setQuarterOfOverlay={setQuarterOfOverlay}
                />}
            </div>
            ))}
          </div>
        </AccordionDetails> 
      </Accordion>
      <div className={classes.emptyDiv}></div>
    </div>
  );
};

export default SelectCourseDropdown;
