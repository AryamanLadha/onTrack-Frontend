import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TriangleDown from "../assets/icons/TriangleDown.svg";
import { makeStyles } from "@mui/styles";
import { MiniCourseCard } from "./index";

const useStyles = makeStyles((theme) => ({
  accordionDropdown: {
    width: "122.8rem",
    height: "7.2rem",
    flexDirection: "row-reverse",
    borderColor: theme.color.white,
    boxShadow: "none",
  },

  typography: {
    font: theme.font.accordionDropdown,
  },

  root: {
    "& .MuiButtonBase-root": {
      borderRadius: "1.5rem",
      background: theme.color.bargrey,
      boxShadow: "none",
    },

    "& .MuiPaper-root": {
      boxShadow: "none",
    }
  },

  miniCourseCardWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "105.5rem",
    font: theme.font.accordionDropdown,
  },

  miniCourseCardContainer: {
    display: "flex",
    flexDirection: "row",
    width: "105.5rem",
  },
}));

const courses = [
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
];


const AccordionDropdown = ({quarter, courses}) => {
  //if we were using material ui, <ButtonUnstyled instead of div> -> we would have had to also import buttonUnstyled
  const classes = useStyles(); //so we don't need to pass down props (like we don't need its size) BUT IF WE DID useStyles (props);
  
  React.useEffect(() => {
    console.log(courses);
  }, [])
  
  return (
    <div className={classes.root}>
      <Accordion className={classes.accordionDropdown}>
        <AccordionSummary
          expandIcon={
            <img src={TriangleDown} className="triangle" alt="triangle" />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"           
        >
          <Typography className={classes.typography}>
            {quarter}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.miniCourseCardWrapper}>
            {Object.entries(courses).map(([key, value]) => (
              <div className={classes.miniCourseCardWrapper}>
                {key}
                <div className={classes.miniCourseCardContainer}>
                  {courses[key].map((course, idx) => (
                    <MiniCourseCard key={idx} name={course} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionDropdown;
