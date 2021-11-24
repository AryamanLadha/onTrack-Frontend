import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/icons/Vector.svg";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from '@mui/core/Popper';
import Paper from '@mui/material/Paper';

import { makeStyles } from "@mui/styles";

const useStyles = open => makeStyles(theme =>({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    '& input': {
      width: "85rem",
      height: "7.5rem",
      padding: "0rem 6rem 0rem 6rem",
      background: theme.color.lightgrey,
      boxSizing: "border-box",
      borderRadius: open ? "3.75rem 3.75rem 0rem 0rem" : "3.75rem",
      font: theme.font.searchBar,

      '&::placeholder' : {
        font: theme.font.searchBar,
        color: '#000000 !important',
      }
    },
  },

  selectionMenu: {
    borderTop: "0.1rem solid white",
    borderRadius: "2rem 2rem 0rem 0rem",
    background: theme.color.lightgrey,
    boxShadow: "none !important",
  },

  dropDownMenu: {
    maxHeight: "5rem",
    overflow: "auto",
    background: theme.color.lightgrey,
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

const majors = [
  { name: "African American Studies" },
  { name: "African and Middle Eastern Studies" },
  { name: "American Indian Studies" },
  { name: "American Literature and Culture" },
  { name: "Ancient Near East and Egyptology" },
];


export default function AutoDropdown() {
  const [open, setOpen] = useState(false);

  const options = majors.map((option) => option.name);
  const classes = useStyles(open)();

  const customPopper = function(props) {
    return (
      <Popper 
        {...props} 
        placement="bottom-start" 
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

  useEffect(() => {
    console.log(open);
  }, [open])

  return (
    <>
      <Autocomplete
        className={ classes.searchBar }
        classes={{
          option: classes.option
        }}
        id="dropdown"
        open={open}
        forcePopupIcon={true}
        popupIcon={<img src={SearchIcon} alt="searchIcon"/>}
        PopperComponent={customPopper}
        PaperComponent={customPaper}
        freeSolo={true}
        options={options}
        multiple={true}
        ListboxProps={{ className : classes.dropDownMenu }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input 
              onClick={handleOpen}

              type="text" 
              placeholder={"Enter your major"}
              {...params.inputProps} 
            />
          </div>
        )}
      />
    </>
  )
}
