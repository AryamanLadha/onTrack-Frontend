import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import AutoDropdown from '../components/AutoDropdown';
import { PageButton, TagComponent } from '../components';
import { setMajors } from '../actions/actions';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
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

function WhatMajor({ majmin, storeMajors, setMajors }) {
  // This hook is very important! See AutoDropdown component below...
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [isAutoDropdownOpen, setIsAutoDropdownOpen] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const classes = useStyles();

  // useEffect(() => {
  //   setEmptyError(selectedMajors.length === 0 ? true : false)
  // }, [emptyError, selectedMajors])

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Enter Your
          {majmin === 'majors' ? ' Major(s)' : ' Minor(s)'}
        </h1>
        <span className={classes.subtitle}>Insert some subtitle here.</span>
      </header>
        <div>
        {
            majmin === "majors"
            ? (
              (selectedMajors.length !== 0)
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
            ) : ( 
              (selectedMajors.length !== 0)
              ? (
                <div className={classes.tagComponentContainer}>
                  {selectedMajors.map((major, idx) => (
                    <TagComponent key={idx} major={major} />
                  ))}
                </div>
              ) : <div></div>
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
        {majmin === 'majors' ? (
            <PageButton
              text={'next'}
              size={'short'}
              page={'majors'}
              emptyError={selectedMajors.length === 0 ? true : false}
              setEmptyError={setEmptyError}
              action={() => {
                setMajors(selectedMajors);
              }}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(WhatMajor);
