import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/icons/Vector.svg";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from '@mui/core/Popper';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";


const useStyles = props => makeStyles(theme =>({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    '& input': {
      width: props.whichPage === "courses" ? "85rem" : "64.7rem",
      height: "7.5rem",
      padding: "0rem 6rem 0rem 6rem",
      background: theme.color.lightgrey,
      boxSizing: "border-box",
      borderRadius:
        props.whichPage === "courses" 
        ? (
          props.open ? "3.75rem 3.75rem 0rem 0rem" : "3.75rem"
        ) : (
          props.open ? "1.4rem 1.4rem 0rem 0rem" : "1.4rem"
        ),
      font: theme.font.searchBar,

      '&::placeholder' : {
        font: theme.font.searchBar,
        color: '#000000 !important',
      }
    },
  },

  selectionMenu: {
    borderTop: "0.1rem solid white",
    borderRadius: "2rem 2rem 2rem 2rem",
    backgroundColor: theme.color.lightgrey,
    boxShadow: "none !important",

    '&.css-1ps6pg7-MuiPaper-root': {
      font: theme.font.subtitle,
      backgroundColor: theme.color.lightgrey,
      height: "5rem",
      borderRadius: "0rem 0rem 2rem 2rem",
    }
  },

  dropDownMenu: {
    maxHeight: "5rem",
    overflow: "auto",
    backgroundColor: theme.color.lightgrey,
    font: theme.font.subtitle,
    borderRadius: "0rem 0rem 2rem 2rem",
    boxShadow: "none !important",

    '& li': {
      height: "5rem",
      padding: "0.3rem 0.9rem",
      margin: "0.3rem 1rem",
      borderRadius: "1.5rem",
    },

    '& li[aria-selected="true"]' : {
      background: theme.color.grey,
    }
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
  const [selectedOptions, setSelectedOptions] = useState([]);

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
      <Paper {...props} className={classes.selectionMenu} />
    )
  }

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleChange = (e, value) => {
    // console.log(value);
    setSelectedOptions([...selectedOptions, value]);
  }

  const handleOptionChange = (params) => {
    console.log(params);
  }

  useEffect(() => {
    // if (selectedOptions.length === 0) {
    //   setOpen(false);
    // }
  }, [open, selectedOptions]);

  return (
    <>
      <Autocomplete
        className={ classes.searchBar }
        classes={{
          option: classes.option
        }}
        id="dropdown"
        open={open}
        onChange={handleChange}
        forcePopupIcon={true}
        popupIcon={<img src={SearchIcon} alt="searchIcon"/>}
        PopperComponent={customPopper}
        PaperComponent={customPaper}
        options={options}
        freeSolo={false}
        filterOptions={(x) => x}
        multiple={true}
        ListboxProps={{ className : classes.dropDownMenu }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input 
              onClick={handleOpen}
              onChange={handleOptionChange(params)}
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
          </div>
        )}
      />
    </>
  )
}
