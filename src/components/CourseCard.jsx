import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import CourseCardX from "../assets/icons/CourseCardCross.svg";

const useStyles = (isHovering) =>
  makeStyles((theme) => ({
    card: {
      backgroundColor: isHovering ? "rgba(40, 49, 62, 0.7)" : theme.color.grey,
      width: "17.5rem",
      height: "17.5rem",
      borderRadius: "2.5rem",
      textAlign: "center",
      lineHeight: "17.5rem",
      font: theme.font.courseCard,
      position: "relative",

      "& .crossContainer": {
        width: "17.5rem",
        height: "17.5rem",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        top: "0rem",

        "& .crossSymbol" : {
          width: "7.5rem",
          height: "7.5rem",
          margin: "0 auto",
        }
      },
    },

    cardText: {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "2.346rem",
    },
  }));

const CourseCard = ({ name, selectedCourses, setSelectedCourses }) => {
  const [isHovering, setIsHovering] = useState(false);

  const classes = useStyles(isHovering)();

  const handleClick = () => {
    setSelectedCourses(selectedCourses.filter((element) => element !== name));
  };

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div
      className={classes.card}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <span className={classes.cardText}>{name}</span>

      {isHovering && (
        <div className="crossContainer">
          <img src={CourseCardX} className="crossSymbol" alt="deleteIcon" />
        </div>
      )}
    </div>
  );
};

export default CourseCard;
