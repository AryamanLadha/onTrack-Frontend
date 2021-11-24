import React, { useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import TriangleUp from "../assets/icons/TriangleUp.svg";
import TriangleDown from "../assets/icons/TriangleDown.svg";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from '@mui/core/Popper';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";


const useStyles = props => makeStyles(theme =>({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    width: props.whichPage === "courses" ? "85rem" : "64.7rem",
    height: "7.5rem",
    paddingRight: "3rem",
    background: theme.color.lightgrey,
    borderRadius:
        props.whichPage === "courses" 
        ? props.open ? "3.75rem 3.75rem 0rem 0rem" : "3.75rem"
        : props.open ? "1.4rem 1.4rem 0rem 0rem" : "1.4rem",
        
    '& input': {
      width: props.whichPage === "courses" ? "70rem" : "49.7rem",
      paddingLeft: "4rem",
      background: theme.color.lightgrey,
      borderRadius: "inherit",
      font: theme.font.searchBar,

      '&::placeholder' : {
        font: theme.font.searchBar,
        color: '#000000 !important',
      }
    },

    '& .searchIcon' : {
      width: "3.8rem",
    },

    '& .triangle' : {
      width: "2.6rem",
    }
  },

  selectionMenu: {
    width: props.whichPage === "courses" ? "85rem" : "64.7rem",
    borderTop: "0.1rem solid white",
    borderRadius: "2rem 2rem 2rem 2rem",
    backgroundColor: theme.color.lightgrey,
    boxShadow: "none !important",

    '&.MuiPaper-root': {
      font: theme.font.subtitle,
      backgroundColor: theme.color.lightgrey,
      height: "7rem",
      borderRadius: "0rem 0rem 2rem 2rem",
    }, 

    '& .MuiAutocomplete-noOptions': {
      height: "7rem",
      padding: "2.7rem 4rem !important",
      font: theme.font.subtitle,
      borderRadius: "0rem 0rem 2rem 2rem",
      backgroundColor: theme.color.lightgrey,
    }
  },

  dropDownMenu: {
    width: props.whichPage === "courses" ? "85rem" : "64.7rem",
    maxHeight: "5rem",
    overflow: "auto",
    backgroundColor: theme.color.lightgrey,
    font: theme.font.subtitle,
    borderRadius: "0rem 0rem 2rem 2rem",
    boxShadow: "none !important",

    '& li': {
      height: "5rem",
      padding: "0.3rem 3rem !important",
      margin: "0.3rem 1rem",
      borderRadius: "1.5rem",
      overflow: "true",
    },

    '& li[aria-selected="true"]' : {
      background: theme.color.grey,
    },
  },
}));

// mockdata for now
const majors = [
  { name: "African American Studies" },
  { name: "African and Middle Eastern Studies" },
  { name: "American Indian Studies" },
  { name: "American Literature and Culture" },
  { name: "Ancient Near East and Egyptology" },
];

export default function AutoDropdown({ whichPage }) {
  const [open, setOpen] = useState(false);

  const props = {  
    open: open,
    whichPage: whichPage,
  }
  const options = majors.map((option) => option.name);
  const classes = useStyles(props)();

  const customPopper = function(props) {
    return (
      <Popper 
        {...props} 
        placement="bottom-start" 
        className={classes.selectionMenu} 
      />
    )
  }
  const customPaper = function(props) {
    return (
      <Paper {...props} 
        className={classes.selectionMenu} 
        elevation={0}
      />
    )
  }

  const handleClick = () => {
    setOpen(!open);
  }

  const handleIconClick = () => {
    setOpen(!open)
  }

  const handleKeyUp = () => {
    setOpen(true);
  }

  return (
    <>
      <Autocomplete
        className={ classes.searchBar }
        classes={{
          option: classes.option
        }}
        id="dropdown"
        open={open}
        PopperComponent={customPopper}
        PaperComponent={customPaper}
        options={options}
        noOptionsText={"No search result"}
        multiple={true}
        ListboxProps={{ className : classes.dropDownMenu }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref} className={classes.inputWrapper}>
            <input 
              onClick={handleClick}
              onKeyUp={handleKeyUp}
              type="text" 
              placeholder={ 
                whichPage === "courses" 
                ? "What courses have you taken?"
                : whichPage === "majors"
                  ? "Enter your major."
                  : "Enter your minor."
              }
              {...params.inputProps} 
            />
            {whichPage === "courses"
            ? (
              <img 
                src={SearchIcon} 
                className="searchIcon"
                alt="searchIcon" 
              />
            ) : (
              open 
              ? 
                <img 
                  src={TriangleDown}
                  className="triangle" 
                  onClick={handleIconClick}
                  alt="searchIcon" 
                />
              : 
                <img 
                  src={TriangleUp}
                  className="triangle" 
                  onClick={handleIconClick}
                  alt="searchIcon" 
                />
            )}
          </div>
        )}
      />
    </>
  )
}

AutoDropdown.defaultProps = {
  whichPage: "majors",
}