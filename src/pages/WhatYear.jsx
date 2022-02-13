import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Dropdown, RadioButton, PageButton } from '../components';
import { setStartQtr, setEndQtr, setGradeEntered } from '../actions/actions';

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
    height: '8.5rem',
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
    marginTop: '1rem',
  },

  spacer: {
    height: '4.5rem',
  },
}));

function WhatYear({ storeStartQtr, storeEndQtr, storeGradeEntered, setStartQtr, setEndQtr, setGradeEntered }) {
  const classes = useStyles();

  // Hooks to store selections for this page
  const [selectedStartQtr, setSelectedStartQtr] = useState('');
  const [selectedEndQtr, setSelectedEndQtr] = useState('');
  const [selectedGradeEntered, setSelectedGradeEntered] = useState('');

  // Logic to generate list of quarters to be displayed as Dropdown options
  let currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth();
  const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
  let currSeason = 0;
  if (currMonth >= 0 && currMonth <= 2)
    currSeason = 0;
  else if (currMonth <= 5)
    currSeason = 1;
  else if (currMonth <= 8)
    currSeason = 2;
  else
    currSeason = 3;
  if (currSeason == 3)
    currYear++;
  const startQuarters = [];
  const endQuarters = [];
  // Push options that combine seasons and years.
  // startQuarters: 4 years back (always beginning with Fall Qtr) -> current qtr
  // endQuarters: current qtr -> 4 years forward (always ending with Summer Qtr)
  let s = 3;
  let y = currYear - 4;
  while (!(y == currYear && s == currSeason)) {
    startQuarters.push(seasons[s] + " " + y);
    s++
    if (s > 3) {
      s = 0;
      y++;
    }
  }
  startQuarters.push(seasons[s] + " " + y);
  while (!(y == currYear + 3 && s == 3)) {
    endQuarters.push(seasons[s] + " " + y);
    s++
    if (s > 3) {
      s = 0;
      y++;
    }
  }

  const handleClick = () => {
    if (selectedStartQtr != "")
      setStartQtr(selectedStartQtr);
    if (selectedEndQtr != "")
      setEndQtr(selectedEndQtr);
    if (selectedGradeEntered != "")
      setGradeEntered(selectedGradeEntered);
  }

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>When did you enter UCLA?</h1>
        <div className={classes.subtitle}>
          We're all counting down the days till graduation.
        </div>
      </header>
      <div>
        <div
          className={classes.subtitle}
          style={{
            float: 'left',
            width: '30%',
            padding: '1rem 2rem 0rem 3rem',
            marginLeft: '-6rem',
          }}
        >
          Start
        </div>
        <div
          style={{
            float: 'left',
            width: '70%',
          }}
        >
          <Dropdown
            placeholder={storeStartQtr != null && storeStartQtr != "" ? storeStartQtr : "Select a quarter"}
            options={startQuarters}
            setSelectedOption={setSelectedStartQtr}
          />
        </div>
      </div>
      <div style={{ height: '4.5rem' }}></div>
      <div>
        <div
          className={classes.subtitle}
          style={{
            float: 'left',
            width: '30%',
            padding: '1rem 2rem 0rem 3rem',
            marginLeft: '-6rem',
          }}
        >
          End
        </div>
        <div
          style={{
            float: 'left',
            width: '70%',
          }}
        >
          <Dropdown
            placeholder={storeEndQtr != null && storeEndQtr != "" ? storeEndQtr : "Select a quarter"}
            options={endQuarters}
            setSelectedOption={setSelectedEndQtr}
          />
        </div>
      </div>
      <div style={{ height: '6.4rem' }}></div>
      <div style={{ marginLeft: '-28rem' }}>
        <div
          className={classes.subtitle}
          style={{
            float: 'left',
            width: '60%',
            padding: '0rem 2rem 0rem 3rem',
          }}
        >
          Entered as a:
        </div>
        <div
          style={{
            float: 'left',
            width: '40%',
          }}
        >
          <RadioButton
            initialOption={storeGradeEntered != null && storeGradeEntered != "" ? storeGradeEntered : undefined}
            setSelectedOption={setSelectedGradeEntered} />
        </div>
      </div>
      <div style={{ height: '9.8rem' }}></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '99rem',
          justifyContent: 'space-between',
        }}
      >
        <PageButton
          page={"year"}
          text="Back"
          size="short"
          action={handleClick}
        />
        <PageButton
          page="year"
          text="Next"
          size="short"
          action={handleClick}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    storeStartQtr: store.startQtr,
    storeEndQtr: store.endQtr,
    storeGradeEntered: store.gradeEntered,
  }
};

const mapDispatchToProps = (dispatch) => {
  // Update the store with user's start quarter, end quarter, and grade entered
  return {
    setStartQtr: (newStartQtr) => dispatch(setStartQtr(newStartQtr)),
    setEndQtr: (newEndQtr) => dispatch(setEndQtr(newEndQtr)),
    setGradeEntered: (newGradeEntered) => dispatch(setGradeEntered(newGradeEntered))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WhatYear);
