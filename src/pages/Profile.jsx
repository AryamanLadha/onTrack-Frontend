import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TagComponent, SelectCourseDropdown } from "../components";
import { connect } from "react-redux";
import { setStartQtr, setEndQtr, setGradeEntered } from "../actions/actions";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: 'auto',
    backgroundColor: theme.color.background,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100rem',
    height: '9.4rem',
    marginTop: '20.4rem',
    marginBottom: '12.4rem',
  },

  title: {
    font: theme.font.profile,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 0 0 0.9rem',
    fontWeight: 'bold',
  },

  subtitle: {
    textAlign: 'center',
    font: theme.font.subtitle,
    margin: '1.5rem',
  },

  majors: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },

  courseHistory: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  courseHistoryTitle : {
    font: theme.font.courseHistory,
    marginBottom: "2.8rem",
  }
}))

// mock data for visuals
const user = {
  name: "Jene",
  endQtr: "Spring 2022",
  majors: ["Chemical Engineering", "Computer Science"],
  coursesTaken: [
    { quarter: "Fall 2019", courses: ["COM SCI 31", "CH ENGR 10", "CH ENGR 100", "CH ENGR 101A"]},
    { quarter: "Winter 2019", courses: ["COM SCI 32", "CH ENGR 101B", "CH ENGR 102A", "CH ENGR 104A"]},
  ]
}

function Profile() {
  const [overlayOpened, setOverlayOpened] = useState(false);
  const [quarterOfOverlay, setQuarterOfOverlay] = useState("");

  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Welcome, {user.name}!
        </h1>
        <span className={classes.subtitle}>Expected graduation: {user.endQtr} </span>
        <div className={classes.majors}>
          {user.majors.map((major, idx) => (
            <TagComponent key={idx} major={major} />
          ))}
        </div>
      </header>
      <div className={classes.courseHistory}>
        <div className={classes.courseHistoryTitle}>
          Course History
        </div>
        {user.coursesTaken.map((object, idx) => (
          <SelectCourseDropdown 
            key={idx}
            data={object}
            overlayOpened={overlayOpened}
            setOverlayOpened={setOverlayOpened}
            setQuarterOfOverlay={setQuarterOfOverlay}
          />
        ))}
      </div>
    </div>
  )
}

export default Profile;
