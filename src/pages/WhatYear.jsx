import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Dropdown, RadioButton, PageButton } from "../components";
import { connect } from "react-redux";
import { setStartQtr, setEndQtr, setGradeEntered } from "../actions/actions";

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
    marginTop: "20.4rem",
    marginBottom: "7.4rem",
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

function WhatYear({ storeStartQtr, storeEndQtr, storeGradeEntered, setStartQtr, setEndQtr, setGradeEntered }) {
  const classes = useStyles();
  const [selectedStartQtr, setSelectedStartQtr] = useState("");
  const [selectedEndQtr, setSelectedEndQtr] = useState("");
  const [selectedGradeEntered, setSelectedGradeEntered] = useState("");

  const handleClick = () => {
    if (selectedStartQtr != "")
      setStartQtr(selectedStartQtr);
    if (selectedEndQtr != "")
      setEndQtr(selectedEndQtr);
    if (selectedGradeEntered)
      setGradeEntered(selectedGradeEntered);
  }

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
            placeholder={storeStartQtr != null && storeStartQtr != "" ? storeStartQtr : "Select a quarter"}
            options={["Fall 2018", "Winter 2019", "Spring 2019", "Summer 2019", "Fall 2019", "Winter 2020", "Spring 2020", "Summer 2020", "Fall 2020", "Winter 2021", "Spring 2021", "Summer 2021", "Fall 2021"]}
            setSelectedOption={setSelectedStartQtr}
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
            placeholder={storeEndQtr != null && storeEndQtr != "" ? storeEndQtr : "Select a quarter"}
            options={["Fall 2018", "Winter 2019", "Spring 2019", 
            "Summer 2019", "Fall 2019", "Winter 2020", "Spring 2020", 
            "Summer 2020", "Fall 2020", "Winter 2021", "Spring 2021", 
            "Summer 2021", "Fall 2021", "Winter 2022", "Spring 2022", 
            "Summer 2022", "Fall 2022", "Winter 2023", "Spring 2023", 
            "Summer 2023", "Fall 2023", "Winter 2024", "Spring 2024", 
            "Summer 2024", "Fall 2024", "Winter 2025", "Spring 2025", 
            "Summer 2025"]}
            setSelectedOption={setSelectedEndQtr}
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
          <RadioButton
            initialOption={storeGradeEntered != null && storeGradeEntered != "" ? storeGradeEntered : undefined}
            setSelectedOption={setSelectedGradeEntered} />
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
        <PageButton
          page={"year"}
          text="Back"
          size="short"
          action={handleClick}
        />
        <PageButton
          page={"year"}
          text="Next"
          size="short"
          action={handleClick}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    storeStartQtr: store.startQtr,
    storeEndQtr: store.endQtr,
    storeGradeEntered: store.gradeEntered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartQtr: (newStartQtr) => dispatch(setStartQtr(newStartQtr)),
    setEndQtr: (newEndQtr) => dispatch(setEndQtr(newEndQtr)),
    setGradeEntered: (newGradeEntered) => dispatch(setGradeEntered(newGradeEntered))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhatYear);
