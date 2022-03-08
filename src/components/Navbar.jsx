import React from "react";
import { makeStyles } from "@mui/styles";
import { PageButton } from "../components";
import onTrackLogoMini from "../assets/icons/onTrackLogoMini.svg";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: "#B2BCAA",
    height: "8rem",
    position: "fixed",
    top: '0rem',
    width: "100vw",
  },

  navimg: {
    backgroundColor: "#B2BCAA",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    marginLeft: "3rem",
    marginRight: "120rem",
  },
}));

function Navbar ({ page }) {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <img src={onTrackLogoMini} className={classes.navimg} alt="Nav bar" />
      <PageButton
        page="nav"
        activeNavPage={ page === 'eligible' ? true : false }
        text="Eligible Courses"
      />
      <PageButton
        page="nav"
        activeNavPage={ page === 'profile' ? true : false }
        text="Profile"
      />
    </div>
  );
};

export default Navbar;
