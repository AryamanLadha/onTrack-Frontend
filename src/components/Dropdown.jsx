import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from '@mui/material/InputBase';
import { makeStyles } from "@mui/styles";

// Pass string array like this to props
const quartersData = [
  "Fall 2018",
  "Winter 2019",
  "Sping 2019",
]

const useStyles = (open, empty) => makeStyles(theme =>({
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "29rem",
    height: "6rem",
    padding: "1rem 2rem 0rem 2rem",
    background: theme.color.lightgrey,
    boxSizing: "border-box",
    borderRadius: open ? "1.5rem 1.5rem 0rem 0rem" : "1.5rem",

    '& .MuiInputBase-input': {
      font: empty ? theme.font.searchBar : theme.font.subtitle,

      '&:focus': {
        outline:"none",
        background: theme.color.lightgrey,
      },
    },

    '& .MuiSelect-icon': {
      color: theme.color.icongrey,
      fontSize: "6rem",
    }
  },

  selectionMenu: {
    offset: "0rem, 0rem, 0rem, 0rem",
    width: "29rem",
    marginTop: "1rem",
    marginLeft: "-2rem",
    borderTop: "0.5rem solid white",
    borderRadius: "2rem 2rem 0rem 0rem",
    boxShadow: "none !important",
    font: theme.font.subtitle,
  },

  dropdownMenu: {
    maxHeight: "40rem",
    overflow: "auto",
    background: theme.color.lightgrey,
    borderRadius: "0rem 0rem 2rem 2rem",
    boxShadow: "none !important",

    '& li': {
      height: "5rem",
      padding: "0.3rem 0.9rem",
      margin: "0.3rem 1rem",
      borderRadius: "1.5rem",
      font: theme.font.subtitle,
    },

    '& li[aria-selected="true"]' : {
      background: theme.color.grey,
    }
  },
}));

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const [empty, setEmpty] = useState(true);
  const classes = useStyles(open, empty)();

  const [option, setOption] = React.useState("");
  const handleChange = (event) => {
    setOption(event.target.value);
    setEmpty(false);
  };

  const handleClick = () => {
    setOpen(!open);
  }
  
  return (
    <div>
      <FormControl fullWidth>
        <Select
          variant={"standard"}
          value={option}
          displayEmpty
          renderValue={
            option !== "" ? undefined : () => <span>{props.placeholder}</span>
          }
          onOpen={handleClick}
          onClose={handleClick}
          onChange={handleChange}
          input={<InputBase className={classes.input} />}
          MenuProps={{
            classes: {
              paper: classes.selectionMenu,
              list: classes.dropdownMenu,
            }
          }}
        >
          {props.options.map((optionName) => {
            return <MenuItem value={optionName}>{optionName}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}