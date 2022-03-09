import React, { useState, useEffect } from 'react'
import { TagComponent, Dropdown, SelectCourseDropdown, EnterCourses } from "../components";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { setStartQtr, setEndQtr, setGradeEntered, setCourses, getData} from "../actions/actions";
import { getCurrQtr } from "../utils/utils";
import { useNavigate } from 'react-router-dom';
import Edit from '../assets/icons/Edit.svg';
import WhatMajor from './WhatMajor';


const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: 'auto',
    backgroundColor: theme.color.white,
    paddingBottom: "15rem",
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100rem',
    height: '9.4rem',
    marginTop: '1rem',
  },

  title: {
    font: theme.font.profile,
    color: theme.color.black,
    textAlign: "center",
    margin: "0 0 0 0.9rem",
    fontWeight: "bold",
  },

  buttons: {
    margin: "1rem 0rem 10rem 0rem",
    width: "98vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    font: theme.font.profile,
  }, 

  cancelButton: {
    font: theme.font.progressBar,
  },

  saveButton: {
    font: theme.font.progressBar,
    color: theme.color.white,
    backgroundColor: theme.color.button,
    width: "15.1rem",
    height: "4.4rem",
    borderRadius: "2rem",
  },

  userInfoSection: {
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
  },

  section: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    font: theme.font.progressBar,
    margin: "2rem",
  },

  sectionTitle: {
    margin: "1rem 1rem 1rem 0rem",
  },

  majorSection: {
    display: "flex",
    flexDirection: "row",
  },

  quarterSection: {
    display: "flex",
    flexDirection: "row",
  },

  nameInput: {
    width: "29rem",
    height: "6rem",
    padding: "1rem",
    backgroundColor: theme.color.white,
    borderColor: theme.color.darkBeige,
    border: "solid 0.1rem",
    borderRadius: "1.5rem",
    font: theme.font.subtitle,
  },

  courseHistory: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "10rem",
  },

  courseHistoryTitle : {
    font: theme.font.courseHistory,
    marginBottom: "2.8rem",
  },

  overlay: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlayBackground: {
    alignSelf: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.color.black,
    opacity: "0.7",
  },
}))


// mock data for visuals
const user = {
  name: "username",
}


function EditProfile({ 
  getData, 
  storeUserData, 
  storeMajors, 
  storeStartQtr, 
  storeEndQtr, 
  storeGradeEntered, 
  setStartQtr, 
  setEndQtr, 
  setGradeEntered, 
  storeCoursesTaken, 
  setCourses  
}) {
  const classes = useStyles();
  const navigate = useNavigate();

  // Hooks to store selections for this page
  const [selectedStartQtr, setSelectedStartQtr] = useState('');
  const [selectedEndQtr, setSelectedEndQtr] = useState('');
  const [coursesOverlayOpened, setCoursesOverlayOpened] = useState(false);
  const [majorsOverlayOpened, setMajorsOverlayOpened] = useState(false);
  const [quarterOfOverlay, setQuarterOfOverlay] = useState("");
  const [userData, setUserData] = useState({
      fullName: "",
      dates: {
        quarterEntered: "",
        quarterExpectedGraduation: "",
      },
      coursesTaken: []
  });

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
      {
        newCoursesTaken.push(existing);
      }

      newCoursesTaken.push({ quarter: seasons[s] + " " + y, courses: [] });
      s++;
      if (s === seasons.length) {
        s = 0;
        y++;
      }
    }
    newCoursesTaken.push({ quarter: seasons[s] + " " + y, courses: [] });
  }

  const [coursesTaken, setCoursesTaken] = useState(newCoursesTaken);

  // Logic to generate list of quarters to be displayed as Dropdown options
  let currSeason;
  for (let i = 0; i < seasons.length; i++) {
    if (seasons[i] === getCurrQtr().substring(0, getCurrQtr().length - 5))
        currSeason = i;
  }
  let currYear = Number(getCurrQtr().substring(getCurrQtr().length - 4));
  
  // Push options that combine seasons and years.
  // startQuarters: 4 years back (always beginning with Fall Qtr) -> current qtr
  // endQuarters: current qtr -> 5 years forward (always ending with Summer Qtr)
  const startQuarters = [], endQuarters = [];
  let s = 3;
  let y = currYear - 4;
  while (!(y === currYear && s === currSeason)) {
    startQuarters.push(seasons[s] + " " + y);
    s++
    if (s > 3) {
      s = 0;
      y++;
    }
  }
  startQuarters.push(seasons[s] + " " + y);
  while (!(y === currYear + 5 && s === 3)) {
    endQuarters.push(seasons[s] + " " + y);
    s++
    if (s > 3) {
      s = 0;
      y++;
    }
  }

  const handleClick = () => {
    setMajorsOverlayOpened(true);
  }

  // const handleChange = (e) => {
  //   setUserData(s);
  // }

  useEffect(() => {
    getData();
    storeUserData && setUserData(userData)
  }, [])


  return (
    // storeUserData !== null 
    // ? (
      <div className={classes.layout}>
        <header className={classes.header}>
          <div className={classes.buttons}>
            <button className={classes.cancelButton} onClick={() => navigate("/profile")}>Cancel</button>
            <button className={classes.saveButton}
              // action={() => {
              //   updateUserData(userData);
              // }}
            >Save</button>
          </div>
          <h1 className={classes.title}>
            Edit Profile
          </h1>
        </header>
        <div className={classes.userInfoSection}>
          <div className={classes.section} >
            <span className={classes.sectionTitle}>Name</span>
            <input 
              className={classes.nameInput} 
              type="text" 
              placeholder={"username"}
              // value={userName}
              // onChange={handleChange}
            ></input>
          </div>
          <div className={classes.section} >
            <span className={classes.sectionTitle}>Major</span>
            <div className={classes.majorSection}>
              {storeUserData.majors.map((major, idx) => (
                <TagComponent key={idx} major={major} />
              ))}
              <button onClick={handleClick}>
                <img src={Edit} alt="edit-majors"/>
              </button>
            </div>
          </div>
          <div className={classes.quarterSection} >
            <div className={classes.section} >
              <span className={classes.sectionTitle}>Start Term</span>
              <Dropdown 
                placeholder={
                  storeUserData.dates.quarterEntered !== null && storeUserData.dates.quarterEntered !== "" 
                    ? storeUserData.dates.quarterEntered 
                    : "Select a quarter"
                }
                options={startQuarters}
                initialOption={storeUserData.quarterEntered}
                setSelectedOption={setSelectedStartQtr}
              />
            </div>
            <div className={classes.section} >
              <span className={classes.sectionTitle}>Expected Graduation</span>
              <Dropdown 
                placeholder={
                  storeUserData.dates.quarterExpectedGraduation!== null && storeUserData.dates.quarterExpectedGraduation !== "" 
                    ? storeUserData.dates.quarterExpectedGraduation
                    : "Select a quarter"
                }
                options={endQuarters}
                initialOption={storeUserData.dates.quarterExpectedGraduation}
                setSelectedOption={setSelectedEndQtr}
              />
            </div>
          </div>
        </div>
        <div className={classes.courseHistory}>
          <div className={classes.courseHistoryTitle}>
            Course History
          </div>
          {storeUserData.coursesTaken.map((object, idx) => (
            <SelectCourseDropdown 
              key={idx}
              data={object}
              overlayOpened={coursesOverlayOpened}
              setOverlayOpened={setCoursesOverlayOpened}
              setQuarterOfOverlay={setQuarterOfOverlay}
              canEdit={true}
            />
          ))}
        </div>
        {coursesOverlayOpened && (
          <div className={classes.overlay}>
            <div className={classes.overlayBackground}></div>
            <EnterCourses
              isEditProfile={true}
              quarter={quarterOfOverlay}
              allCourses={coursesTaken}
              setAllCourses={setCoursesTaken}
              setOverlayOpened={setCoursesOverlayOpened}
            />
          </div>
        )}
        {majorsOverlayOpened && (
          <div className={classes.overlay}>
            <div className={classes.overlayBackground}></div>
            <WhatMajor 
              majmin={"majors"}
              storeMajors={storeUserData.majors}
              isOverlay={true}
              setOverlayOpened={setMajorsOverlayOpened}
            />
          </div>
        )}
      </div>
    // ) : (
    //   <>Log in </>
    // )
  )
}

const mapStateToProps = (store) => {
  return {
    storeMajors: store.majors,
    storeCoursesTaken: store.coursesTaken,
    storeStartQtr: store.startQtr,
    storeEndQtr: store.endQtr,
    storeGradeEntered: store.gradeEntered,
    storeUserData: store.data,
  }
};

const mapDispatchToProps = (dispatch) => {
  // Update the store with user's start quarter, end quarter, and grade entered
  return {
    setStartQtr: (newStartQtr) => dispatch(setStartQtr(newStartQtr)),
    setEndQtr: (newEndQtr) => dispatch(setEndQtr(newEndQtr)),
    setGradeEntered: (newGradeEntered) => dispatch(setGradeEntered(newGradeEntered)),
    setCourses: (newCourses) => dispatch(setCourses(newCourses)),
    getData: () => dispatch(getData()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
