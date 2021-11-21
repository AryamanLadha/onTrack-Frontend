import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const majors = [
  { name: "African American Studies" },
  { name: "African and Middle Eastern Studies" },
  { name: "American Indian Studies" },
  { name: "American Literature and Culture" },
  { name: "Ancient Near East and Egyptology" },
];

export default function AutoDropdown() {
  const [value, setValue] = useState("");
  const options = majors.map((option) => option.name);

  useEffect(() => {
    console.log(options);
  })

  return (
    <>
      <Autocomplete   
        id="tags-standard"
        hiddenLabel="true"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={options}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
          />
        )}
      />
    </>
  );
}
