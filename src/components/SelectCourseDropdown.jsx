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
    width: "84.8rem",
    height: "7.2rem",
    flexDirection: "row-reverse",
    boxShadow: "none",
    border: "0.1rem solid",
    borderRadius: props.expanded ? "1.5rem 1.5rem 0rem 0rem !important" : "1.5rem !important",
    borderColor: theme.color.lightBeige,
  },

  typography: {
    font: theme.font.accordionDropdown,
  },

  root: {
    borderRadius: "0rem 0rem 1.5rem 1.5rem !important",
    margin: "0",
    width: "85rem",
    
    "& .MuiPaper-root": {
      boxShadow: "none",
    },

    "&. MuiButtonBase-root" : {
      border: "0.1rem solid",
      borderColor: theme.color.lightBeige,
      // position: "relative",
    },

    "& .MuiCollapse-root": {
      border: `0.1rem solid ${theme.color.lightBeige} !important`,
      borderRadius: "0rem 0rem 1.5rem 1.5rem",
      // position: "absolute",
      // bottom: "0",
    },
  },

  miniCourseCardWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop : "2rem",
  },

  subject: {
    font: theme.font.accordionDropdown,
    marginBottom: "2rem",
  },

  miniCourseCardContainer: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    marginBottom: "2rem",
  },

  emptyDiv: {
    height: props.height,
    marginBottom: "2.7rem",
  }
}));


const SelectCourseDropdown = ({ data }) => {
  const [ expanded, setExpanded ] = useState(false);
  const [ height, setHeight ] = useState(0);

  const props = {
    height: height,
    expanded: expanded,
  }
  const classes = useStyles(props)();

  useEffect(() => {
    const numberOfCourses = data.courses.length;
    console.log(numberOfCourses)
    // any subjects that have more than 5 courses adds extraRow
    let extraRows = Math.floor(numberOfCourses/5)+1;

    // set height of emptyDiv: when accordian dropdown is expanded
    expanded 
    ? setHeight(`${extraRows*16}rem`)
    : setHeight(`0rem`)

  }, [expanded]);

  const handleChange = () => {
    setExpanded(!expanded);
  }
  
  return (
    <div className={classes.root}>
      <Accordion 
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
            {[...Array(parseInt(data.courses.length/5+1, 10)).keys()].map((i) => (
              <div key={i} className={classes.miniCourseCardContainer}>
                {data.courses.slice(i, i+5).map((course, idx) => 
                  <MiniCourseCard key={idx} name={course} />
                )}
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
