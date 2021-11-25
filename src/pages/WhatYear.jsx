import React from "react";
import { makeStyles } from "@mui/styles";
import { Dropdown, RadioButton, PageButton } from "../components";

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
    height: "8.5rem",
    marginTop: "5rem",
    marginBottom: "4.9rem",
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
    marginTop: "1rem",
  },

  spacer: {
    height: "4.5rem",
  },
}));

export default function WhatYear() {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>When did you enter UCLA?</h1>
        <div className={classes.subtitle}>
          We're all counting down the days till graduation.
        </div>
      </header>
      <div>
        <div
          className={classes.subtitle}
          style={{
            float: "left",
            width: "30%",
            padding: "1rem 2rem 0rem 3rem",
            marginLeft: "-6rem",
          }}
        >
          Start
        </div>
        <div
          style={{
            float: "left",
            width: "70%",
          }}
        >
          <Dropdown
            placeholder="Select a quarter"
            options={["Fall 2018", "Winter 2019", "Sping 2019"]}
          />
        </div>
      </div>
      <div style={{ height: "4.5rem" }}></div>
      <div>
        <div
          className={classes.subtitle}
          style={{
            float: "left",
            width: "30%",
            padding: "1rem 2rem 0rem 3rem",
            marginLeft: "-6rem",
          }}
        >
          End
        </div>
        <div
          style={{
            float: "left",
            width: "70%",
          }}
        >
          <Dropdown
            placeholder="Select a quarter"
            options={["Fall 2018", "Winter 2019", "Sping 2019"]}
          />
        </div>
      </div>
      <div style={{ height: "6.4rem" }}></div>
      <div style={{ marginLeft: "-28rem" }}>
        <div
          className={classes.subtitle}
          style={{
            float: "left",
            width: "60%",
            padding: "0rem 2rem 0rem 3rem",
          }}
        >
          Entered as a:
        </div>
        <div
          style={{
            float: "left",
            width: "40%",
          }}
        >
          <RadioButton />
        </div>
      </div>
      <div style={{ height: "9.8rem" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "99rem",
          justifyContent: "space-between",
        }}
      >
        <PageButton page={"year"} text="Back" size="short" />
        <PageButton page={"year"} text="Next" size="short" />
      </div>
    </div>
  );
}
