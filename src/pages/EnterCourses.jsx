import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { CourseCard, PageButton, AutoDropdown } from "../components";


const useStyles = marginTop => makeStyles(theme => ({
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

  courseCardWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: `${marginTop}rem`,
    marginBottom: "6rem",
    width: "87.6rem",
    font: theme.font.button,
  },

  courseCardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "3rem",
  }
}))


function EnterCourses() {
  const [ selectedCourses, setSelectedCourses ] = useState([]);
  const [ numRows, setNumRows ] = useState(0);
  const [ lengthOfFilteredOptions, setLengthOfFilteredOptions ] = useState(5);
  const marginTop = 
  lengthOfFilteredOptions < 5 
  ? lengthOfFilteredOptions  === 0
    ? 15
    : lengthOfFilteredOptions * 5 + 10 
  : 35; 
  const classes = useStyles(marginTop)();
  
  useEffect(() => {
    setNumRows(parseInt(selectedCourses.length/4)+1);
  }, [selectedCourses]);

  return (
		<div className={classes.layout}>
			<header className={classes.header}>
				<h1 className={classes.title}>
          What Courses Have You Taken?
        </h1>
        <span className={classes.subtitle}>
          One last step....We promise.
        </span>
			</header>
      <AutoDropdown 
        whichPage={"courses"}
        setLengthOfFilteredOptions={setLengthOfFilteredOptions} 
        setSelectedOptions={setSelectedCourses}
      />
      {(selectedCourses.length !== 0)
        ?
          <div className={classes.courseCardWrapper}>
            {Array.from(Array(numRows).keys()).map((i) => (
              <div key={i} className={classes.courseCardContainer}>
                {selectedCourses.slice(i*4, (i+1)*4).map((course, idx) => (
                  <CourseCard key={idx} name={course} />
                ))}
              </div>
            ))}
          </div>
        : <div className={classes.courseCardWrapper}></div>
      }
      <PageButton page={"courses"} text={"next"} size={"long"}/>
		</div>
  )
}

export default EnterCourses;