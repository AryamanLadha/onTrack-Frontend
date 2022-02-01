import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { MiniCourseCard, PageButton, AutoDropdown } from "../components";
import { connect } from "react-redux";
import { setCourses } from "../actions/actions";

const useStyles = (lengthOfSelectedCourses, isAutoDropdownOpen) => makeStyles((theme) => ({
    layout: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      zIndex: "1.6rem",
      top: "2%",
      left: "25%",
      display: "flex",
      width: "105rem",
      height: "100.6rem",
      borderRadius: "5rem",
      backgroundColor: theme.color.white,
    },

    header: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100rem",
      height: "8.5rem",
      marginTop: "10rem",
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
      width: "87.6rem",
      height: "10rem",
      marginTop: isAutoDropdownOpen ? "35rem" : "3rem",
      marginBottom: "6rem",
      marginLeft: "4rem",
      font: theme.font.button,
    },

    courseCardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      marginTop: "3rem",
    },

    pageButtonWrapper: {
      display: "flex",
      width: "80%",
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: "7.4rem",
    },
  }));

function EnterCourses({ quarter, setOverlayOpened, storeCoursesTaken, setCourses }) {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [numRows, setNumRows] = useState(0);
  const [lengthOfSelectedCourses, setLengthOfSelectedCourses] = useState(5);
  const [ isAutoDropdownOpen, setIsAutoDropdownOpen ] = useState(false);

  const classes = useStyles(lengthOfSelectedCourses, isAutoDropdownOpen)();

  useEffect(() => {
    setNumRows(parseInt(selectedCourses.length /5)+1);
    setLengthOfSelectedCourses(selectedCourses.length);
    console.log(selectedCourses);
  }, [selectedCourses, isAutoDropdownOpen ]);

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>{quarter}</h1>
      </header>
      <AutoDropdown
        whichPage={"courses"}
        initialSelectedOptions={storeCoursesTaken}
        selectedOptions={selectedCourses}
        setSelectedOptions={setSelectedCourses}
        setIsAutoDropdownOpen={setIsAutoDropdownOpen}
      />
      {selectedCourses.length !== 0 ? (
        <div className={classes.courseCardWrapper}>
          {Array.from(Array(numRows).keys()).map((i) => (
            <div key={i} className={classes.courseCardContainer}>
              {selectedCourses.slice(i*5, (i+1) * 5).map((course, idx) => (
                <MiniCourseCard 
                  key={idx} 
                  name={course}
                  selectedCourses={selectedCourses}
                  setSelectedCourses={setSelectedCourses} 
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.courseCardWrapper}></div>
      )}
      <div className={classes.pageButtonWrapper}>
        <PageButton
          page={"courses"}
          text="Back"
          size="short"
          setOverlayOpened={setOverlayOpened}
          onClick={() => setOverlayOpened(false)}
          action={() => {
            setCourses(selectedCourses);
          }}
        />
        <PageButton
          page={"courses"}
          text={"Done"}
          size={"short"}
          setOverlayOpened={setOverlayOpened}
          action={() => {
            setCourses(selectedCourses);
          }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    storeCoursesTaken: store.coursesTaken,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCourses: (newCourses) => dispatch(setCourses(newCourses)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterCourses);
