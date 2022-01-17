
import * as React from "react"
import { makeStyles } from "@mui/styles"

//this is classes and coursecard is a property
const useStyles = makeStyles (theme => ({
  tagComponent: {
    display: 'flex, inline-block',
    backgroundColor: theme.color.button,
    height: '5.4rem',
    lineHeight: '5.4rem',
    font: theme.font.subtitle,
    borderRadius: '1.6rem', 
    padding: "0rem 2rem",
    marginRight: "1.3rem",
  }
}));

const TagComponent = ({ major, selectedMajors, setSelectedMajors }) => {
  const classes = useStyles(); 
  const handleClick = () => {
    let arr = selectedMajors;
    arr = arr.filter(element => element !== major);
    setSelectedMajors(arr);
  }
    return (
      <div className = {classes.tagComponent} onClick={handleClick}> 
        {major}
      </div>
  );
};

export default TagComponent;
