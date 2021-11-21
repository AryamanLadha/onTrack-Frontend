import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from '@mui/core/Popper';
import Paper from '@mui/material/Paper';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme =>({
  OpenWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    '& input': {
      width: "85rem",
      height: "7.5rem",
      padding: "0rem 6rem 0rem 6rem",
      background: theme.color.lightgrey,
      boxSizing: "border-box",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "3.75rem",
      font: theme.font.searchBar,
      '&::placeholder' : {
        font: theme.font.searchBar,
        color: '#000000 !important',
      }
    }
  },

  selectionMenu: {
    height: "25rem",
    borderTop: "2px solid white !important",
    background: theme.color.lightgrey,
    font: theme.font.subtitle,
    borderRadius: "3.75rem",
    boxShadow: "none !important",
  },

  eachMenu: {
    maxHeight: "5rem",
    overflow: "auto",
    background: theme.color.lightgrey,
    font: theme.font.subtitle,
    borderRadius: "1rem",
    boxShadow: "none",

    '& li': {
      margin: "2.4rem 1.5rem",
    },

    '& li [aria-expanded="true"]' : {
      backgroundColor: "blue !important",
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
  const classes = useStyles(open);
  const customPopper = function(props) {
    return (
      <Popper {...props} placement="bottom-start" />
    )
  }
  const customPaper = function(props) {
    return (
      <Paper {...props} className={classes.selectionMenu} />
    )
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
  }, [open])

  return (
    <>
      <Autocomplete
        className={classes.OpenWrapper}
        id="dropdown"
        PopperComponent={customPopper}
        PaperComponent={customPaper}
        options={options}
        open={open}
        onOpen={handleOpen}
        multiple={true}
        ListboxProps={{ className : classes.eachMenu }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input 
              className={classes.selectionMenu}
              type="text" 
              placeholder="Enter your major"
              {...params.inputProps} 
            />
          </div>
        )}
      />
    </>
  )
}
