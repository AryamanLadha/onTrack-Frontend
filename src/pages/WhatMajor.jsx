import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import AutoDropdown from '../components/AutoDropdown';
import { PageButton, TagComponent } from '../components';
import { setMajors } from '../actions/actions';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    backgroundColor: theme.color.background,
  },

  layoutOverlay: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: "1.6rem",
    display: "flex",
    width: "105rem",
    height: "100.6rem",
    borderRadius: "5rem",
    backgroundColor: theme.color.white,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100rem',
    height: '9.4rem',
    marginTop: '20.4rem',
    marginBottom: '7.4rem',
  },

  title: {
    font: theme.font.title,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 0 0 0.9rem',
    fontWeight: 'bold',
  },

  subtitle: {
    textAlign: 'center',
    font: theme.font.subtitle,
    marginTop: '1.8rem',
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '34.6rem',
  },

  prompt: {
    textAlign: 'center',
    font: theme.font.subtitle,
    marginTop: 'auto',
    padding: '0.67rem',
  },

  tagComponentContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '64.7rem',
    marginBottom: '2rem',
  },

  pageButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '99rem',
    justifyContent: 'space-between',
  },

  emptyError: {
    fontFamily: "Work Sans",
    fontSize: "1.8rem",
    color: "#FF0000",
    lineHeight: "7.5rem",
  },
}));

function WhatMajor({ majmin, storeMajors, setMajors, isOverlay, setOverlayOpened, majorsFromEditProfile }) {
  // This hook is very important! See AutoDropdown component below...
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [isAutoDropdownOpen, setIsAutoDropdownOpen] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedMajors(storeMajors)
  }, [])

  return (
    <div className={isOverlay === true ? classes.layoutOverlay : classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Enter Your
          {majmin === 'majors' ? ' Major(s)' : ' Minor(s)'}
        </h1>
        <span className={classes.subtitle}>North campus, South Campus... we don’t judge.</span>
      </header>
        <div>
        {
          ((selectedMajors.length !== 0)
            ? (
              <div className={classes.tagComponentContainer}>
                {selectedMajors.map((major, idx) => (
                  <TagComponent 
                    key={idx} 
                    major={major} 
                    selectedMajors={selectedMajors}
                    setSelectedMajors={setSelectedMajors}
                  />
                ))}
              </div>
            )
            : <div></div>
          ) 
        }
          <AutoDropdown 
            whichPage={"majors"}
            initialSelectedOptions={storeMajors}
            selectedOptions={selectedMajors}
            setSelectedOptions={setSelectedMajors}
            isAutoDropdownOpen={isAutoDropdownOpen}
            setIsAutoDropdownOpen={setIsAutoDropdownOpen}
          />
        </div>
      <footer className={classes.footer}>
        {
          emptyError ? (<div className={classes.emptyError}>Sorry, you can't move on without entering this information.</div>) : (<div></div>)
        }
        {majmin === 'majors'
        ? (
          isOverlay === false ? (
            <PageButton
              text={'Next'}
              size={'short'}
              page={'majors'}
              isOverlay={isOverlay}
              action={() => {
                if (selectedMajors.length === 0) {
                  setEmptyError(true);
                  navigate('/majors');
                } else {
                  setMajors(selectedMajors);
                  setEmptyError(false);
                }}}
            />
          ) : (
            <PageButton
              text={'Save'}
              size={'long'}
              page={'majors'}
              isOverlay={isOverlay}
              setOverlayOpened={setOverlayOpened}
              action={() => {
                setMajors(selectedMajors);
              }}
            />
          )
        ) : (
          <div className={classes.pageButtonWrapper}>
            <PageButton
              text="Back"
              size="short"
              page="minors"
              action={() => {
                setMajors(selectedMajors);
              }}
            />
            <PageButton
              text="Next"
              size="short"
              page="minors"
              action={() => {
                setMajors(selectedMajors);
              }}
            />
          </div>
        )}
      </footer>
    </div>
  );
}

const mapStateToProps = (store, { majmin }) => {
  return (
    majmin === 'majors' ?
      {
        storeMajors: store.majors,
      }
    :
      {
        storeMajors: store.majors,  // CHANGE TO MINORS
      }
  )
};

const mapDispatchToProps = (dispatch, {majmin}) => {
  return (
    majmin === 'majors' ? 
      { 
        setMajors: newMajors => dispatch(setMajors(newMajors))
      } 
    : 
      {
        setMajors: newMajors => dispatch(setMajors(newMajors)) //CHANGE TO MINORS
      }
  )
};

WhatMajor.defaultProps = {
  isOverlay: false,
  setOverlayOpened: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WhatMajor);
