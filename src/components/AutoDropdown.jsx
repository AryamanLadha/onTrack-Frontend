import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import TriangleUp from "../assets/icons/TriangleUp.svg";
import TriangleDown from "../assets/icons/TriangleDown.svg";
import Autocomplete from "@mui/material/Autocomplete";
import Popper from '@mui/core/Popper';
import Paper from '@mui/material/Paper';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { makeStyles } from "@mui/styles";
import { connect } from 'react-redux';
import {getCourses, getMajors} from "../actions/actions"


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
      position: "relative",
      zIndex: "1rem",
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
      height: "8rem",
      borderRadius: "0rem 0rem 2rem 2rem",
    }, 

    '& .MuiAutocomplete-noOptions': {
      padding: "2.7rem 4rem !important",
      font: theme.font.subtitle,
      borderRadius: "0rem 0rem 2rem 2rem",
      backgroundColor: theme.color.lightgrey,
    }
  },

  dropDownMenu: {
    width: props.whichPage === "courses" ? "85rem" : "64.7rem",
    maxHeight: "28.5rem !important",
    overflow: "auto",
    backgroundColor: theme.color.lightgrey,
    font: theme.font.subtitle,
    borderRadius: "0rem 0rem 2rem 2rem",
    boxShadow: "none !important",

    '& li': {
      height: "5rem",
      padding: "0.3rem 3rem !important",
      margin: "0.4rem 1rem",
      borderRadius: "1.5rem",
      overflow: "true",
    },

    '& li[aria-selected="true"]' : {
      background: theme.color.grey,
    },
  },
}));

// mockdata for now
// const majors = [
//   { name: "African American Studies" },
//   { name: "African and Middle Eastern Studies" },
//   { name: "American Indian Studies" },
//   { name: "American Literature and Culture" },
//   { name: "Ancient Near East and Egyptology" },
//   { name: "Chemical Engineering" },
//   { name: "Bioengineering" },
//   { name: "Bioinformatics" },
//   { name: "Cognitive Science" },
//   { name: "Life Sciences" },
// ];

function AutoDropdown({ whichPage, setLengthOfFilteredOptions, data, getData}) {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const props = {  
    open: open,
    whichPage: whichPage,
  }

  // Make sure to do this check all the time
  const options = data.length!==0 && (whichPage === 'courses' ? data.map(course => ({name: course.abbreviation + " "+ course.number})) : data.map(major => ({name : major.name})))
  const classes = useStyles(props)();

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  },[]);

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

  // These are the options for the auto dropdown.
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
  });

  const handleIconClick = () => {
    setOpen(!open);
  }

  const handleKeyUp = () => {
    if (whichPage === 'courses') {
      setOpen(true)
    }
  }

  // Make sure to check if options is null
  const handleChange = (params) => {
    let filteredOptions = options && options.filter(major => major.name.toLowerCase().startsWith(params.inputProps.value.toLowerCase()));
    setLengthOfFilteredOptions(filteredOptions.length);
    if (!open) {
      setLengthOfFilteredOptions(-1);
    }
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
        getOptionLabel={(option) => option.name}
        filterOptions={filterOptions}
        multiple={true}
        ListboxProps={{ className : classes.dropDownMenu }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref} className={classes.inputWrapper}>
            <input
              onKeyUp={handleKeyUp}
              onChange={handleChange(params)}
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
                  src={TriangleUp}
                  className="triangle" 
                  onClick={handleIconClick}
                  alt="searchIcon" 
                />
              : 
                <img 
                  src={TriangleDown}
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
  setLengthOfFilteredOptions: () => {},
}

const mapStateToProps = (state, { whichPage }) => {

  return (
    whichPage === 'courses' ? 
      { 
        data: state.courses
      } 
    : 
      {
        data: state.allMajors
      }
  )
};

const mapDispatchToProps = (dispatch, { whichPage }) => {
  return (
    whichPage === 'courses' ? 
      { 
        getData: () => dispatch(getCourses())
      } 
    : 
      {
        getData: () => dispatch(getMajors())
      }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoDropdown);