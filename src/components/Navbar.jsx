import React from "react";
import { makeStyles } from "@mui/styles";
import { PageButton } from "../components";
import onTrackLogoMini from "../assets/icons/onTrackLogoMini.svg";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: theme.color.olive,
    height: "8rem",
    position: "fixed",
    top: '0rem',
    width: "100vw",
    zIndex: "1",
  },

  navimg: {
    backgroundColor: "#B2BCAA",
    width: "auto",
    height: "8rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    marginLeft: "3rem",
    marginRight: "120rem",
  },

  pageButtonWrapper: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
}));

function Navbar ({ page }) {
  const classes = useStyles();

  return (
    <div className={classes.navbar} style={{zIndex: "1rem"}}>
      <img src={onTrackLogoMini} className={classes.navimg} alt="Nav bar" />
      <div className={classes.pageButtonWrapper}>
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
    </div>
  );
};

export default Navbar;
