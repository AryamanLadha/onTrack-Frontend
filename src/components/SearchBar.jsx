import * as React from "react";
import SearchIcon from "../assets/icons/Vector.svg";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(theme =>({
  searchBox: {
    width: "100%", 

    '& input': {
      background: theme.color.lightgrey,
      height: "5rem",
      font: theme.font.searchBar,
      '&::placeholder' : {
        font: theme.font.searchBar,
        color: '#000000 !important',
      }
    }
  }, 
  
  SearchBoxWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "85rem",
    height: "7.5rem",
    paddingLeft: "6.5rem",
    background: theme.color.lightgrey,
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "37.5px",

    '& img' : {
      position: "relative",
      left: "-5rem",
      width: '38px',
      height: '38px',
    }
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.SearchBoxWrapper}>
      <FormControl
        className={classes.searchBox}
      >
        <input placeholder="What courses have you taken?" />
      </FormControl>
      <img src={SearchIcon} alt="searchIcon"/>
    </div>
  );
}