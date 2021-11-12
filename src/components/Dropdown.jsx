import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Pass string array like this as prop
const majorsData = [
  "African American Studies",
  "African and Middle Eastern Studies",
  "American Indian Studies",
  "American Literature and Culture",
  "Ancient Near East and Egyptology",
];

export default function Dropdown(props) {
  const [major, setMajor] = React.useState("");
  const handleChange = (event) => {
    setMajor(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="majors-label">Enter your major</InputLabel>
        <Select
          id="majors-select"
          value={major}
          label="Enter your major"
          onChange={handleChange}
        >
          {props.majors.map((majorName) => {
            return <MenuItem value={majorName}>{majorName}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
