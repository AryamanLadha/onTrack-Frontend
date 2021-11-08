import * as React from "react";
import SearchIcon from "../assets/icons/Vector.svg";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/styles"


const SearchBox = styled(InputBase)({
  width: '100%',
  padding: '65px',

  '& input': {
    '&::placeholder' : {
      color: '#000000 !important',
    }
  }
});

const SearchBoxWrapper = styled('div')({
  width: '850px',
  height: '75px',
  padding: '20px',
  background: '#E7E7E7',
  border: '1px solid #000000',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '37.5px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '& img' : {
    width: '38px',
    height: '38px',
  }
})

export default function SearchBar() {
  return (
    <SearchBoxWrapper>
      <SearchBox
        placeholder="What courses have you taken?" 
      />
      <img src={SearchIcon} alt="searchIcon"/>
    </SearchBoxWrapper>
  );
}