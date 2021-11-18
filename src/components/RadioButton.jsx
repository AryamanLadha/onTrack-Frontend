import * as React from "react"
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    freshman: {
        font: theme.font.subtitle,
        backgroundColor: theme.color.lightgrey, 
    },
    Laura: {
        font: theme.font.subtitle,
    },
}));

export default function RadioButton() 
{
  const classes = useStyles();
  return(
    <FormControl 
      component="fieldset"
    >
      <RadioGroup
        name="radio-buttons-group"
      >
        <div className={classes.Laura}> Laura </div> 
        <FormControlLabel   
          value="Freshman" 
          control={<Radio />} 
          label={<Typography variant="caption">Freshman</Typography>} 
        />
        <FormControlLabel 
          value="Transfer" 
          control={<Radio />} 
          label={<Typography variant="caption">Transfer</Typography>} 
        />
      </RadioGroup>
    </FormControl>
  );
}


