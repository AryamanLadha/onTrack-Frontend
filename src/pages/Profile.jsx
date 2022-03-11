import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { TagComponent, SelectCourseDropdown } from "../components";
import { connect } from "react-redux";
import { PageButton, Navbar } from '../components';
import { getData } from "../actions/actions";
import { useNavigate } from "react-router-dom";

const useStyles = () => makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: 'auto',
    marginTop: '8rem',
    backgroundColor: theme.color.background,
  },

  pageButtonWrapper: {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100rem',
    height: '9.4rem',
    marginTop: '9.4rem',
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

  courseHistory: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "8rem",
  },

  courseHistoryTitle : {
    font: theme.font.courseHistory,
    marginBottom: "2.8rem",
  }
}))


function Profile({ getData, storeUserData }) {
  const [ overlayOpened, setOverlayOpened] = useState(false);
  const [ quarterOfOverlay, setQuarterOfOverlay] = useState("");

  // pass on progress percentage to style progress bars
  const props = {
    upperDivProgressPercent: 30,
    degreeProgressPercent: 50,
  }

  const classes = useStyles(props)();

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  if (storeUserData !== null) {
    return (
      <div>
        <Navbar page='profile' />
        <div className={classes.layout}>
          {/* add onclick to enable editing  */}
          <div className={classes.pageButtonWrapper}>
            <PageButton
              page="profile"
              text="Edit"
              size="short"
            />
          </div>
          <header className={classes.header}>
            <h1 className={classes.title}>
              Welcome, {storeUserData.fullName}!
            </h1>
            <span className={classes.subtitle}>Expected graduation: {storeUserData.dates.quarterExpectedGraduation} </span>
            <div className={classes.majors}>
              {storeUserData.majors.map((major, idx) => (
                <TagComponent key={idx} major={major} />
              ))}
            </div>
          </header>
          <div className={classes.courseHistory}>
            <div className={classes.courseHistoryTitle}>
              Course History
            </div>
            {storeUserData.coursesTaken.map((object, idx) => (
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
          <PageButton
            page="profile"
            text="Logout"
            size="short"
          />
        </div>
      </div>
    ) 
  } else {
    navigate("/");
    return null;
  }
}

const mapStateToProps = (store) => {
  return (
    { 
      storeUserData: store.data,
    }
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
