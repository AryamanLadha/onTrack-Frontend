import React from 'react'
import { makeStyles } from "@mui/styles"
import { CourseCard, SearchBar, PageButton } from "../components"

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  },

  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100rem", 
    height: "8.5rem",
    marginTop: "15.4rem",
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

  courseCardContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5.6rem",
    marginBottom: "13.5rem",
    width: "87.6rem",
    height: "23.5rem",
    font: theme.font.button,
  },

  courseCardCarousel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "3rem",
  }
}))

const courses = [
    "Psych 85",
    "Psych 85",
    "Psych 85",
    "Psych 85",
];

function EnterCourses() {
  const classes = useStyles();
  const courseCardArray = courses.map((course) => {
    return (
      <CourseCard name={course}/>
    )
  })

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
      <SearchBar />
      <div className={classes.courseCardContainer}>
        <p>Popular courses for this major</p>
        <div className={classes.courseCardCarousel}>
          {courseCardArray}
        </div>
      </div>
      <PageButton text={"next"} size={"long"}/>
		</div>
  )
}

export default EnterCourses;
