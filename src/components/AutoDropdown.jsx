import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const displayData = [
  { name: "African American Studies" },
  { name: "African and Middle Eastern Studies" },
  { name: "American Indian Studies" },
  { name: "American Literature and Culture" },
  { name: "Ancient Near East and Egyptology" },
];

let selected = [];

export default function AutoDropdown() {
  const [value, setValue] = React.useState("");

  return (
    <div>
      {selected.map((itemName) => {
        return <div>{itemName}</div>;
      })}
      <h1>Enter your major(s)</h1>
      <br />
      <Autocomplete
        multiple
        id="tags-standard"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          selected.map
        }}
        options={displayData}
        getOptionLabel={(option) => option.name}
        //defaultValue={[option[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Majors"
            //placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}
