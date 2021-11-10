import * as React from "react"
import { makeStyles } from "@mui/styles"

//1. makeStyles (theme => : makeStyles is a function that can pass theme as a parameter 
//2. use div for materials ui -> doesn't allow you to use parameters 


//this is classes and coursecard is a property
const useStyles = makeStyles (theme => ({
    courseCard: {
        backgroundColor: theme.color.button,
        width: '175px',
        height: '175px',
        borderRadius: '25px', 
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '175px',
        font: theme.font.courseCard,
    }
}));

const CourseCard = ({name}) => {
    //if we were using material ui, <ButtonUnstyled instead of div> -> we would have had to also import buttonUnstyled 
  const classes = useStyles(); //so we don't need to pass down props (like we don't need its size) BUT IF WE DID useStyles (props);
    return (
        <div className = {classes.courseCard}> 
            {name}
        </div>
  );
};

export default CourseCard;
