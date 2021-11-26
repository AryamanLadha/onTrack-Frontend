import React, {useState, useEffect} from 'react'
import { makeStyles } from "@mui/styles"
import { CourseCard, SearchBar, PageButton } from "../components"
import { connect } from 'react-redux'
import { getCourses } from '../actions/actions.js'

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
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
    marginTop: "5.6rem",
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


function EnterCourses({ courses, getCourses }) {
  const classes = useStyles();
  const [numRows, setNumRows] = useState(0);

  // Make the API call to get courses as soon as we mount
  useEffect(() => {
    getCourses()
    // eslint-disable-next-line
  },[]);

  useEffect(() => {
    const newRows = parseInt(courses.length/4)+1;
    console.log('NewRows:', newRows)
    setNumRows(newRows);
  }, [courses]);

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
      {courses.length!== 0 ? JSON.stringify(courses) : 'Nothing here yet'}
      {/* <div className={classes.courseCardWrapper}>
        {Array.from(Array(numRows).keys()).map((i) => (
          <div key={i} className={classes.courseCardContainer}>
            {courses.slice(i*4, (i+1)*4).map((course, idx) => (
              <CourseCard key={idx} name={course} />
          ))}
      </div>
        ))}
      </div> */}
      <PageButton text={"next"} size={"long"}/>
		</div>
  )
}

const mapStateToProps = (state) => {
  return ({
    courses: state.courses
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getCourses: () => dispatch(getCourses())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterCourses);
