import React from 'react';
import { makeStyles } from "@mui/styles";
import { AccordionDropdown } from "../components";


const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    marginTop: "20.4rem",
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
}))


// mockdata for visuals
const data = 
[
  {
    "quarter" : "Fall 2021",
    "subjects": {
      "Communications" : ["COMM 1", "COMM 10", "COMM 89", "COMM 101", ],
      "Psychological Science": ["PHYSCI 5", "PHYSCI 107", "PHYSCI 111L", "PHYSCI 140",]
    }
  },
  {
    "quarter": "Winter 2021",
    "subjects": {
      "Communications" : ["COMM 1", "COMM 10", "COMM 89", "COMM 101", ],
      "Psychological Science": ["PHYSCI 5", "PHYSCI 13", "PHYSCI 111A", "PHYSCI 121L",]
    }
  },
]

function EligibleCourses() {
  const classes = useStyles();

  // React.useEffect(() => {
  //   console.log(dataKeys);
  // }, [])

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
        {
          data.map((courseObject, index) => (
            <AccordionDropdown key={index} quarter={courseObject.quarter} courses={courseObject.subjects}/>
          ))
        }
      </div>
    </>
  )
}

export default EligibleCourses;