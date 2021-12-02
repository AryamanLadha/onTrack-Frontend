import React, { useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { AccordionDropdown, PageButton } from "../components";
import { connect } from "react-redux";


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


// mockdata for visuals for now!
let mockData = 
[
  {
    "quarter" : "Fall 2021",
    "subjects": {
      "Communications" : ["COMM 1", "COMM 10", "COMM 89", "COMM 101", ],
      "Psychological Science": ["PHYSCI 5", "PHYSCI 107", "PHYSCI 111L", "PHYSCI 140", "PHYSCI 5", "PHYSCI 107", "PHYSCI 111L", "PHYSCI 140", "PHYSCI 5", "PHYSCI 107", "PHYSCI 111L", "PHYSCI 140",],
      "Life Sciences": ["PHYSCI 5", "PHYSCI 99", "PHYSCI M106", "PHYSCI 108", "PHYSCI 111B", "PHYSCI 111L", "PHYSCI 121",]
    }
  },
  {
    "quarter": "Winter 2022",
    "subjects": {
      "Communications" : ["COMM 1", "COMM 10", "COMM 89", "COMM 101", ],
      "Psychological Science": ["PHYSCI 5", "PHYSCI 13", "PHYSCI 111A", "PHYSCI 121L", "PHYSCI C126", "PHYSCI C127", "PHYSCI C130",]
    }
  },
  {
    "quarter": "Spring 2022",
    "subjects": {
      "Communications" : ["COMM 1", "COMM 10", "COMM 89", "COMM 101", "COMM 1", "COMM 10", "COMM 89",],
      "Psychological Science": ["PHYSCI 5", "PHYSCI 99", "PHYSCI M106", "PHYSCI 108", "PHYSCI 111B", "PHYSCI 111L", "PHYSCI 121", "PHYSCI 121",]
    }
  },
]

function EligibleCourses({ eligibleCoursesData }) {
  const classes = useStyles();

  useEffect(() => {
    eligibleCoursesData && console.log(eligibleCoursesData);
  }, []);

  return (
    <>
      <div className={classes.layout}>
        <header className={classes.header}>
          <h1 className={classes.title}>
            Eligible Courses
          </h1>
          <span className={classes.subtitle}>
            All the courses you can take this year. You're welcome.
          </span>
        </header>
        <div>
        {(mockData.length !== 0)
        ?
        mockData.map((eligibleCourse, index) => (
            <AccordionDropdown 
              key={index} 
              quarter={eligibleCourse.quarter} 
              subjectAndcourses={eligibleCourse.subjects}
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
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    eligibleCoursesData : store.eligibleCourses
  }
}
export default connect(mapStateToProps, null)(EligibleCourses);
