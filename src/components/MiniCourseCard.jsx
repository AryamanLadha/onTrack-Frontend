import React from "react";
import PlusIcon from "../assets/icons/Plus.svg";
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
    marginRight: props.plusIcon ? "0rem" : "3rem",
    display: props.plusIcon && "flex",
    justifyContent: props.plusIcon && "center",
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

export default function MiniCourseCard({name, overlayOpened, setOverlayOpened}) {
  const props = {
    plusIcon: (name === "") ? true : false
  }

  const handleClick = () => {
    setOverlayOpened(!overlayOpened);
    console.log(overlayOpened);
  }

  const classes = useStyles(props)();

  return (
    <div className={classes.card}>
      {
        name === "" 
        ? <img 
          className={classes.icon} 
          src={PlusIcon} 
          alt="addCourses"
          onClick={handleClick}
        />
        : <span className={classes.cardText}>{name}</span>
      }
    </div>
  );
}


MiniCourseCard.defaultProps = {
  setModalOpened: () => {},
}
