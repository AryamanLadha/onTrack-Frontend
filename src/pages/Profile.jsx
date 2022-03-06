import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { TagComponent, SelectCourseDropdown } from "../components";
import { connect } from "react-redux";
import { PageButton } from '../components';
import { getData } from "../actions/actions";

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
    marginTop: '18.4rem',
    marginBottom: '12.4rem',
  },

  editProfile: {
    marginLeft: "auto",
    marginRight: "2rem",
    marginTop: "2rem",
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
  name: "username",
}

function Profile({ getData, storeMajors, storeStartQtr, storeEndQtr, storeGradeEntered, storeCoursesTaken }) {
  const [ overlayOpened, setOverlayOpened] = useState(false);
  const [ quarterOfOverlay, setQuarterOfOverlay] = useState("");
  // const [ userLoggedIn, setUserLoggedIn ] = useState(false);

  // pass on progress percentage to style progress bars
  const props = {
    upperDivProgressPercent: 30,
    degreeProgressPercent: 50,
  }

  const classes = useStyles(props)();

  useEffect(() => {
    // check if user is logged in and update the state
    // if (able to load user info) {setUserLoggedIn(true)}
    getData();
  }, [])

  return (
    // userLoggedIn 
    // ? (
      <div className={classes.layout}>
        {/* add onclick to enable editing  */}
        <PageButton
          page="profile"
          text="Edit"
          size="short"
        />
        <header className={classes.header}>
          <h1 className={classes.title}>
            Welcome, {user.name}!
          </h1>
          <span className={classes.subtitle}>Expected graduation: {storeEndQtr} </span>
          <div className={classes.majors}>
            {storeMajors.map((major, idx) => (
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
          {storeCoursesTaken.map((object, idx) => (
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
    // ) : (
    //   <div className={classes.layout}>
    //     <header className={classes.header}>
    //       <h1 className={classes.title}>
    //         Please login
    //       </h1>
    //     </header>
    //   </div>
    // )
  )
}

const mapStateToProps = (store) => {
  return (
    { 
      storeMajors: store.majors,
      storeStartQtr: store.startQtr,
      storeEndQtr: store.endQtr,
      storeGradeEntered: store.gradeEntered,
      storeCoursesTaken: store.coursesTaken,
    }
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
