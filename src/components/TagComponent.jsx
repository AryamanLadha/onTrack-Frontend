
import * as React from "react"
import { makeStyles } from "@mui/styles"

//this is classes and coursecard is a property
const useStyles = makeStyles (theme => ({
  tagComponent: {
    display: 'flex',
    backgroundColor: theme.color.button,
   // width: '21.7rem',
    height: '5.4rem',
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    lineHeight: '5.4rem',
    font: theme.font.courseCard,
    borderRadius: '1.6rem', 
    display: 'inline-block',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  }
}));

const TagComponent = ({major}) => {
  const classes = useStyles(); //so we don't need to pass down props (like we don't need its size) BUT IF WE DID useStyles (props);
    return (
      <div className = {classes.tagComponent}> 
        {major}
      </div>
  );
};

export default TagComponent;
