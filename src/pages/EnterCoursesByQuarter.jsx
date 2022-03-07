import React, { useState, useEffect } from "react";
import { SelectCourseDropdown, EnterCourses } from "../components";
import { makeStyles } from "@mui/styles";
import { PageButton } from "../components";
import { connect } from "react-redux";
import { setCourses } from "../actions/actions";
import { getCurrQtr } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    marginTop: "10.4rem",
    backgroundColor: theme.color.lightYellow,
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

  overlay: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlayBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.color.black,
    opacity: "0.7",
  },
}));

// i m using mock data for now
let mockData = [
  {
    quarter: "Fall 2018",
    courses: [
      "COM SCI 1",
      "COM SCI 31",
      "MATH 31A",
      "ENG COMP 3",
      "PYSCH 7",
      "COMM 1A",
    ],
  },
  {
    quarter: "Winter 2019",
    courses: ["COM SCI 32", "MATH 31B", "PHYSICS 1A"],
  },
  {
    quarter: "Spring 2019",
    courses: ["COM SCI 33", "MATH 32A", "PHYSICS 1B"],
  },
];

function EnterCoursesByQuarter({ storeStartQtr, storeCoursesTaken, setCourses }) {
  const classes = useStyles();
  const [overlayOpened, setOverlayOpened] = useState(false);
  const [quarterOfOverlay, setQuarterOfOverlay] = useState("");

  // Parse start/end season and year using store data
  let startSeason, endSeason;
  let newCoursesTaken = [];
  const seasons = ["Winter", "Spring", "Summer", "Fall"];

  if (storeStartQtr) {
    for (let i = 0; i < seasons.length; i++) {
      if (seasons[i] === storeStartQtr.substring(0, storeStartQtr.length - 5))
        startSeason = i;
      if (seasons[i] === getCurrQtr().substring(0, getCurrQtr().length - 5))
        endSeason = i;
    }
    let startYear = Number(storeStartQtr.substring(storeStartQtr.length - 4));
    let endYear = Number(getCurrQtr().substring(getCurrQtr().length - 4));

    // Generate array of empty course objects
    let s = startSeason, y = startYear;
    let existing = undefined;
    while (!(y === endYear && s === endSeason)) {
      existing = storeCoursesTaken.find(object => object.quarter === (seasons[s] + " " + y));
      if (existing !== undefined && existing.courses.length > 0)
        newCoursesTaken.push(existing);
      else
        newCoursesTaken.push({ quarter: seasons[s] + " " + y, courses: [] });
      s++;
      if (s === seasons.length) {
        s = 0;
        y++;
      }
    }
    existing = storeCoursesTaken.find(object => object.quarter === (seasons[s] + " " + y));
    if (existing !== undefined && existing.courses.length > 0)
      newCoursesTaken.push(existing);
    else
      newCoursesTaken.push({ quarter: seasons[s] + " " + y, courses: [] });
  }

  const [coursesTaken, setCoursesTaken] = useState(newCoursesTaken);

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>What courses have you taken?</h1>
        <span className={classes.subtitle}>One last step... We promise.</span>
      </header>
      <div>
        {coursesTaken.length !== 0 ? (
          coursesTaken.map((object, idx) => (
            <SelectCourseDropdown
              key={idx}
              data={object}
              overlayOpened={overlayOpened}
              setOverlayOpened={setOverlayOpened}
              setQuarterOfOverlay={setQuarterOfOverlay}
            />
          ))
        ) : (
          <div className={classes.pageButtonWrapper}></div>
        )}
      </div>
      <div className={classes.pageButtonWrapper}>
        <PageButton
          page={"courses"}
          text="Back"
          size="short"
          action={() => {
            setCourses(coursesTaken);
          }}
        />
        <PageButton
          page={"courses"}
          text={"Next"}
          size={"short"}
          action={() => {
            setCourses(coursesTaken);
          }}
        />
      </div>
      {overlayOpened && (
        <div className={classes.overlay}>
          <div className={classes.overlayBackground}></div>
          <EnterCourses
            quarter={quarterOfOverlay}
            allCourses={coursesTaken}
            setAllCourses={setCoursesTaken}
            setOverlayOpened={setOverlayOpened}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    storeStartQtr: store.startQtr,
    storeCoursesTaken: store.coursesTaken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCourses: (newCourses) => dispatch(setCourses(newCourses)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterCoursesByQuarter);
