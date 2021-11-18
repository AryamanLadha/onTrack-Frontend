import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ['The Godfather', 'Pulp Fiction'];

export default function AutoDropdown() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
