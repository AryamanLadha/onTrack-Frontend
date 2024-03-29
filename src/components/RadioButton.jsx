import React, { useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@mui/styles';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    font: theme.font.title,
    width: '15.2rem',
    height: '8.8rem',
  },
  freshman: {
    font: theme.font.radioButton,
    backgroundColor: theme.color.lightgrey,
  },
  font: {
    font: theme.font.radioButton,
  },
}));

function RadioButton({ initialOption, setSelectedOption }) {
  const classes = useStyles();

  useEffect(() => {
    if (initialOption != undefined)
      setSelectedOption(initialOption);
  }, []);

  const handleSelectedOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    // This component currently has hard-coded options `Freshman` and `Transfer` since we only use it on the WhatYear page. May need to make it generalizable later.
    <FormControl className={classes.formControl}>
      <RadioGroup
        name="radio-buttons-group"
        defaultValue={initialOption}
        onChange={handleSelectedOptionChange}
      >
        <FormControlLabel
          value="Freshman"
          control={<Radio />}
          label={
            <Typography className={classes.font} variant="caption">
              Freshman
            </Typography>
          }
        />
        <FormControlLabel
          value="Transfer"
          control={<Radio />}
          label={
            <Typography className={classes.font} variant="caption">
              Transfer
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
