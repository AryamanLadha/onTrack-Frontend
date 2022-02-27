import React from "react";
import { makeStyles } from "@mui/styles";
import { PageButton } from "../components";

const useStyles = makeStyles((theme) => ({
  pageButtonWrapper: {
    display: "flex",
    width: "117.8rem",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "7.4rem",
  },
}));

function Confirmation() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.pageButtonWrapper}>
        <PageButton
          page="confirm"
          text="Back"
          size="short"
        />
        <PageButton
          page="confirm"
          text="Confirm"
          size="short"
        />
      </div>
    </div>
  );
}

export default Confirmation;
