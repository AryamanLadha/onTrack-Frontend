import React from "react";
import Plus from "../assets/icons/Plus.svg";
import { makeStyles } from "@mui/styles";

const useStyles = (props) =>makeStyles(theme => ({
  card: {
    backgroundColor: theme.color.grey,
    width: "12rem",
    height: "12rem",
    borderRadius: "2rem", 
    textAlign: "center",
    lineHeight: props.plus ? "0rem" : "12rem",
    font: theme.font.miniCourseCard,
    marginRight: props.plus ? "0rem" : "3rem",
    display: props.plus && "flex",
    justifyContent: props.plus && "center",
  },

  cardText: {
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "2.346rem",
  },

  icon: {
    margin: "auto 0",
    width: "4.8rem",
    height: "4.8rem",
  }
}));

export default function MiniCourseCard({name}) {
  const props = {
    plus: (name === "") ? true : false
  }

  const classes = useStyles(props)();
  return (
    <div className={classes.card}>
      {
        name === "" 
        ? <img className={classes.icon} src={Plus} alt="addCourses"/>
        : <span className={classes.cardText}>{name}</span>
      }
    </div>
  );
}