import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = (isHovering) =>
  makeStyles((theme) => ({
    card: {
      backgroundColor: isHovering ? "#28313e" : theme.color.grey,
      width: "17.5rem",
      height: "17.5rem",
      borderRadius: "2.5rem",
      textAlign: "center",
      lineHeight: "17.5rem",
      font: theme.font.courseCard,
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
    </div>
  );
};

export default CourseCard;
