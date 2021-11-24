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
    height: "6.5rem",
  },

  button: {
    display: "inlineBlock",
    width: "20%",
    margin: "0 auto",
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
      <div className={classes.spacer}></div>
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
      <div className={classes.spacer}></div>
      <div style={{ marginLeft: "-28rem" }}>
        <div
          className={classes.subtitle}
          style={{
            float: "left",
            width: "60%",
            padding: "1rem 2rem 0rem 3rem",
            //marginLeft: "-20rem",
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
      <div style={{ height: "20rem" }}></div>
      <div>
        <PageButton text="Back" size="short" className={classes.button} />
        <div style={{display: "inlineBlock", width: "30%", backgroundColor: "red"}}></div>
        <PageButton text="Next" size="short" classname={classes.button} />
      </div>
    </div>
  );
}
