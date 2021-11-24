import { makeStyles } from "@mui/styles";
import AutoDropdown from "../components/AutoDropdown";
import PageButton from "../components/PageButton";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
  },

  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100rem",
    height: "5.3rem",
    marginTop: "20.4rem",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "33.2rem",
  },

  title: {
    font: theme.font.title,
    color: theme.color.black,
    textAlign: "center",
    margin: "0 0 0 0.9rem",
    fontWeight: "bold",
  },

  subtitle: {
    textAlign: "center",
    font: theme.font.subtitle,
    marginTop: "1.8rem",
    marginBottom: "14.4rem",
  },

  prompt: {
    textAlign: "center",
    font: theme.font.subtitle,
    marginTop: "auto",
    padding: "0.67rem",
  },
}));

function WhatYear() {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>Enter Your Major(s)</h1>
      </header>

      <span className={classes.subtitle}>Insert some subtitle here.</span>

      < AutoDropdown />

      <footer className={classes.footer}>
        <PageButton text={"next"} size={"short"} />
      </footer>
    </div>
  );
}

export default WhatYear;
