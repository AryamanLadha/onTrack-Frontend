import React from "react";
import { SelectCourseDropdown } from "../components";
import { makeStyles } from "@mui/styles";
import { PageButton } from "../components";
// haven't done connecting with redux yet
// import { connect } from "react-redux";
// import { setCourses } from "../actions/actions";

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    marginTop: "10.4rem",
  },

  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100rem", 
    height: "8.5rem",
    marginTop: "5rem",
    marginBottom: "4.9rem",
  },

  title: {
    font: theme.font.title,
    color: theme.color.black, 
    textAlign: "center",
    margin: "0 0 0 0.9rem",
    fontWeight: "bold",
  },

  subtitle: {
    textAlign: "center",
    font: theme.font.subtitle,
    marginTop: "1rem",
  },

  pageButtonWrapper: {
    display: "flex",
    width: "117.8rem",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "7.4rem",
  },
}))

// i m using mock data for now
let mockData = [
  {
  "quarter" : "Fall 2018",
  "courses": [
    "COM SCI 1", "COM SCI 31", "MATH 31A",
    ]
  },
  {
    "quarter" : "Winter 2019",
    "courses": [
      "COM SCI 32", "MATH 31B", "PHYSICS 1A",
      ]
  },
  {
    "quarter" : "Spring 2019",
    "courses": [
      "COM SCI 33", "MATH 32A", "PHYSICS 1B",
      ]
  },
]

function EnterCoursesByQuarter() {
  const classes = useStyles();
  
  
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
          <h1 className={classes.title}>
              What courses have you taken?
          </h1>
          <span className={classes.subtitle}>
              One last step... We promise.
          </span>
      </header>
      <div>
      {(mockData.length !== 0)
      ?
        mockData.map((object, idx) => (
          <SelectCourseDropdown 
              key={idx} 
              data={object}
          />
        ))
      :<div className={classes.pageButtonWrapper}></div>
      }
      </div>
      <div className={classes.pageButtonWrapper}>
          <PageButton text="Back" size="short" page={"eligible"} />
          <PageButton text="Next" size="short" page={"eligible"} />
      </div>
    </div>
  )
}

export default EnterCoursesByQuarter;
