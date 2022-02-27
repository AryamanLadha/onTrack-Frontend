import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TagComponent, SelectCourseDropdown } from "../components";
import { connect } from "react-redux";
import { setStartQtr, setEndQtr, setGradeEntered } from "../actions/actions";

const useStyles = (props) => makeStyles((theme) => ({
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

  degreeProgress: {
    width: "59.3rem",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    rowGap: "3rem",
    margin: "7.5rem 0rem 9.8rem 0rem",
  },

  progressBar: {
    width: "44.3rem",
    height: "5rem",
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.color.lightGreen,
  },

  progressTitle: {
    width: "12rem",
    textAlign: "right",
    height: "5rem",
    lineHeight: "5rem",
    font: theme.font.progressBar,
  },


  upperDivProgressBar: {
    width: `${props.upperDivProgressPercent}%`,
    backgroundColor: theme.color.green,
    position: "relative",
    zIndex: "1rem",
  },

  degreeProgressBar: {
    width: `${props.degreeProgressPercent}%`,
    backgroundColor: theme.color.green,
    position: "relative",
    zIndex: "1rem",
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


  // pass on progress percentage to style progress bars
  const props = {
    upperDivProgressPercent: 30,
    degreeProgressPercent: 50,
  }

  const classes = useStyles(props)();

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
      <div className={classes.degreeProgress} >
        <div className={classes.progressTitle}>Upper Div</div>
        <div className={classes.progressBar}>
          <div className={classes.upperDivProgressBar} />
        </div>
        <div className={classes.progressTitle}>Degree</div>
        <div className={classes.progressBar}>
          <div className={classes.degreeProgressBar} />
        </div>
      </div>
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
            canEdit={false}
          />
        ))}
      </div>
    </div>
  )
}

export default Profile;
