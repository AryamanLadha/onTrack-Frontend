import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TriangleDown from "../assets/icons/TriangleDown.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  accordionDropdown: {
    width: "85.27777%",
    flexDirection: "row-reverse",
    font: theme.font.accordionDropdown,
    borderColor: theme.color.white,
    boxShadow: "none",
    height: "80%",
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

}));

const AccordionDropdown = () => {
  //if we were using material ui, <ButtonUnstyled instead of div> -> we would have had to also import buttonUnstyled
  const classes = useStyles(); //so we don't need to pass down props (like we don't need its size) BUT IF WE DID useStyles (props);
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
          <Typography className={classes.accordionDropdown}>
            Major Courses
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>LAURA WAS HERE</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionDropdown;
