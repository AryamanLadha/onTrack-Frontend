import * as React from "react"
//import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    freshman: {
        font: theme.font.subtitle,
        color: theme.color.lightgrey, 
    },

    Laura: {
        font: theme.font.subtitle,
    },
/*
    formLabel: {
        font: theme.font.subtitle,
    }

    freshman: {
        theme: theme.font.subtitle,
    }

    transfer: {

    }
    */

}));


//makestyles: radio button form is its own class too 

export default function RadioButton() 
{
   const classes = useStyles();

    return(

    <FormControl 
        //className = {classes.formControl}
        component="fieldset"
    >

    <RadioGroup
        //aria-label="Year Entered"
       // defaultValue="Freshman"
        name="radio-buttons-group"
       // className = {classes.radioGroup}
    >

        <div> Laura </div> 
        <FormControlLabel value="Freshman" control={<Radio />} label="Freshman" className = {classes.freshman} />
        <FormControlLabel value="Transfer" control={<Radio />} label="Transfer"/>
    </RadioGroup>

    </FormControl>
    );
}


