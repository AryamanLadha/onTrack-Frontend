import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Popper from '@mui/core/Popper';
import { makeStyles } from '@mui/styles';
import { getCourses, getMajors } from '../actions/actions';
import SearchIcon from '../assets/icons/SearchIcon.svg';
import DropdownArrowDown from '../assets/icons/DropdownArrowDown.svg';
import DropdownArrowUp from '../assets/icons/DropdownArrowUp.svg';

const useStyles = (props) =>
  makeStyles((theme) => ({
    searchBar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    inputWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: props.whichPage === 'courses' ? '85rem' : '64.7rem',
      height: '7.5rem',
      paddingRight: '3rem',
      border: '0.1rem solid',
      borderColor: theme.color.darkBeige,
      background: theme.color.white,
      
      borderRadius:
        props.whichPage === 'courses'
          ? props.open
            ? '3.75rem 3.75rem 0rem 0rem'
            : '3.75rem'
          : props.open
          ? '1.4rem 1.4rem 0rem 0rem'
          : '1.4rem',

      '& input': {
        width: props.whichPage === 'courses' ? '70rem' : '49.7rem',
        paddingLeft: '4rem',
        background: theme.color.white,
        borderRadius: 'inherit',
        font: theme.font.searchBar,

        '&::placeholder': {
          font: theme.font.searchBar,
          color: '#000000 !important',
        },
      },

      '& .searchIcon': {
        width: '3.8rem',
      },

      '& .triangle': {
        position: 'relative',
        zIndex: '1rem',
        width: '2.6rem',
      },
    },

    selectionMenu: {
      width: props.whichPage === 'courses' ? '85rem' : '64.7rem',
      borderRadius: '2rem 2rem 2rem 2rem',
      backgroundColor: theme.color.white,
      boxShadow: 'none !important',

      '&.MuiPaper-root': {
        font: theme.font.subtitle,
        backgroundColor: theme.color.white,
        border: '0.1rem solid',
        borderColor: theme.color.darkBeige,
        height: '8rem',
        borderRadius: '0rem 0rem 2rem 2rem',
      },

      '& .MuiAutocomplete-noOptions': {
        padding: '2.7rem 4rem !important',
        font: theme.font.subtitle,
        borderRadius: '0rem 0rem 2rem 2rem',
        backgroundColor: theme.color.white,
      },
    },

    dropDownMenu: {
      width: props.whichPage === 'courses' ? '85rem' : '64.7rem',
      maxHeight: '28.5rem !important',
      overflow: 'auto',
      backgroundColor: theme.color.white,
      font: theme.font.subtitle,
      borderRadius: '0rem 0rem 2rem 2rem',
      borderTop: 'none',
      border: '0.1rem solid',
      borderColor: theme.color.darkBeige,
      boxShadow: 'none !important',

      '& li': {
        height: '5rem',
        padding: '0.3rem 3rem !important',
        margin: '0.4rem 1rem',
        borderRadius: '1.5rem',
        overflow: 'true',
      },
      
      '& li[aria-disabled="true"]' : {
        opacity: "1 !important",
        background: theme.color.beige,
        font: theme.font.subtitle,
      },

      '& li[aria-selected="true"]' : {
        opacity: 1,
        background: theme.color.beige,
        font: theme.font.subtitle,
      },
    }
  }));

function AutoDropdown({ whichPage, setLengthOfSelectedCourses, initialSelectedOptions, selectedOptions, setSelectedOptions, data, getData}) {
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);

  const props = {  
    open: open,
    whichPage: whichPage,
  };
  const classes = useStyles(props)();

  const options =
    data.length === 0 
    ? [] 
    : (whichPage === 'courses')
      ? data.map(course => course["Short name"]) 
      : data.map(major => major)

  useEffect(() => {
    getData();
    setSelectedOptions(selectedOptions.concat(initialSelectedOptions));
  }, []);


  const customPopper = (props) => {
    return (
      <Popper
        {...props}
        placement="bottom-start"
        className={classes.selectionMenu}
      />
    );
  };
  const customPaper = (props) => {
    return (
      <Paper 
        {...props} 
        className={classes.selectionMenu} 
        elevation={0}
      />
    );
  };

  // when clicking on triangle, open the menu
  const handleIconClick = () => {
    setOpen(!open);
  };

  // when in enter courses page & key up, set autocomplete open
  const handleKeyUp = () => {
    if (whichPage === 'courses') {
      setOpen(true);
    }
  };

  // when selecting/unselecting options, set and store selected options
  const handleSelectedOptionsChange = (e, value) => {
    setSelectedOptions(value);

    // On enter-courses page, set length of selected options to make space for course cards
    if (whichPage === "courses") {
      setLengthOfSelectedCourses(selectedOptions.length < 5 ? 5 : selectedOptions.length);
      if (!open) {
        setLengthOfSelectedCourses(-1);
      }
    }

    // when selecting an option, scroll to the very top of the menu
    listRef.current.scrollIntoView()
  }

  return (
    <>
      <Autocomplete
        className={classes.searchBar}
        classes={{
          option: classes.option,
        }}
        id="dropdown"
        open={open}
        onChange={handleSelectedOptionsChange}
        PopperComponent={customPopper}
        PaperComponent={customPaper}
        options={options}
        noOptionsText={'No search result'}
        multiple={true}
        getOptionDisabled={option => 
          // disable all the options when more than 3 majors are selected
          (whichPage !== "courses" && selectedOptions.length >= 3) 
          ? true 
          // disable options that are selected
          : (selectedOptions.includes(option)) 
            ? true
            : false
        }

        // pre-set selectedOptions
        value={selectedOptions} 
        ListboxProps={{ 
          className : classes.dropDownMenu,
          ref: listRef,
        }}
        renderInput={(params) => 
          (
          <div ref={params.InputProps.ref} className={classes.inputWrapper}>
            <input
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
            {whichPage === 'courses' 
            ? (
              <img src={SearchIcon} className="searchIcon" alt="searchIcon" />
            ) 
            : open 
            ? (
              <img
                src={DropdownArrowUp}
                className="triangle"
                onClick={handleIconClick}
                alt="searchIcon"
              />
            ) : (
              <img
                src={DropdownArrowDown}
                className="triangle"
                onClick={handleIconClick}
                alt="searchIcon"
              />
            )}
          </div>
        )}
      />
    </>
  );
}

AutoDropdown.defaultProps = {
  whichPage: 'majors',
  setLengthOfFilteredOptions: () => {},
};

const mapStateToProps = (state, { whichPage }) => {
  return whichPage === 'courses'
    ? {
        data: state.courses,
      }
    : {
        data: state.allMajors,
      };
};

const mapDispatchToProps = (dispatch, { whichPage }) => {
  return whichPage === 'courses'
    ? {
        getData: () => dispatch(getCourses()),
      }
    : {
        getData: () => dispatch(getMajors()),
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoDropdown);
