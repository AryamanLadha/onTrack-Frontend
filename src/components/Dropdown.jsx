import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = (open, empty) =>
  makeStyles((theme) => ({
    input: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '29rem',
      height: '6rem',
      padding: '1rem 2rem 0rem 2rem',
      background: theme.color.lightgrey,
      boxSizing: 'border-box',
      borderRadius: open ? '1.5rem 1.5rem 0rem 0rem' : '1.5rem',

      '& .MuiInputBase-input': {
        // If no option is selected, change the font color to a lighter gray
        font: empty ? theme.font.searchBar : theme.font.subtitle,

        '&:focus': {
          outline: 'none',
          background: theme.color.lightgrey,
        },
      },

      '& .MuiSelect-icon': {
        color: theme.color.icongrey,
        fontSize: '6rem',
      },
    },

    selectionMenu: {
      offset: '0rem, 0rem, 0rem, 0rem',
      width: '29rem',
      marginTop: '.5rem',
      borderTop: '0.5rem solid white',
      borderRadius: '2rem 2rem 0rem 0rem',
      boxShadow: 'none !important',
      font: theme.font.subtitle,
    },

    dropdownMenu: {
      maxHeight: '18rem',
      overflow: 'auto',
      background: theme.color.lightgrey,
      borderRadius: '0rem 0rem 2rem 2rem',
      boxShadow: 'none !important',

      '& li': {
        height: '5rem',
        padding: '0.3rem 0.9rem',
        margin: '0.3rem 1rem',
        borderRadius: '1.5rem',
        font: theme.font.subtitle,
      },

      '& li[aria-selected="true"]': {
        background: theme.color.grey,
      },
    },
  }));

function Dropdown({ placeholder, options, setSelectedOption }) {
  const [open, setOpen] = useState(false);
  const [empty, setEmpty] = useState(true);
  const classes = useStyles(open, empty)();

  const [option, setOption] = React.useState('');
  // When an option is selected, update the component to display it, update the store with the option's value, and mark the Dropdown as no longer empty
  const handleChange = (event) => {
    setOption(event.target.value);
    setSelectedOption(event.target.value);
    setEmpty(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <FormControl fullWidth>
        <Select
          variant={'standard'}
          value={option}
          displayEmpty
          // workaround on MUI Select so that placeholder value is rendered as default
          renderValue={
            option !== '' ? undefined : () => <span>{placeholder}</span>
          }
          onOpen={handleClick}
          onClose={handleClick}
          onChange={handleChange}
          input={<InputBase className={classes.input} />}
          MenuProps={{
            classes: {
              paper: classes.selectionMenu,
              list: classes.dropdownMenu,
            },
          }}
        >
          {options.map((optionName) => {
            return <MenuItem value={optionName}>{optionName}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;
