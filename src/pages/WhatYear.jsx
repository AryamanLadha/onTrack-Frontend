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
  const year = new Date().getFullYear();
  const years = [...Array(7).keys()].map((x) => x + year - 2);
  const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
  const startQuarters = [];
  startQuarters.push('Fall ' + (year - 3).toString());
  for (let i = 0; i < years.length; i++) {
    for (let j = 0; j < seasons.length; j++) {
      startQuarters.push(seasons[j] + ' ' + years[i].toString());
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
            options={startQuarters.slice(0, 12)}
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
            options={startQuarters}
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
