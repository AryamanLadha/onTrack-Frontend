import React from 'react';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = (props) => makeStyles(theme => ({
  button: {
    width: props.size === "short" ? '13.8rem' : '25.5rem',
    height: "7.5rem",
    border: "0rem",
    marginBottom: "5rem",
    borderRadius: props.size === "short" ? '3.1rem' : '3.75rem',
    backgroundColor: theme.color.greyishBlue,
    font: theme.font.button,
    color: theme.color.white,
  }
}));

// Button props: text, size, page
function PageButton({ page, text, size, action, setOverlayOpened, emptyError, setEmptyError }) {
  const props = {
    size: size,
  };
  const classes = useStyles(props)();
  const navigate = useNavigate();

  const handleClick = () => {
    if (page === 'majors') {
      // Skip minors
      setEmptyError(emptyError);
      if (emptyError === false) {
        navigate('/year');
      }
      
    } else if (page === 'minors') {
      text === 'Back' ? navigate('/') : navigate('/year');

    } else if (page === 'year') {
      text === 'Back'
        ? // Go back to majors (skip minors)
          navigate('/')
        : navigate('/courses');

    } else if (page === 'courses') {
      text === 'Back' ? navigate('/year') : navigate('/eligible');

    } else if (page === 'coursesOverlay') {
      setOverlayOpened(false);
    }

    else if (page === 'eligible') {
      text === 'Back' ? navigate('/courses') : navigate('/done');
    }

    // props.page === "done"
    // else {
    //   nothing for now.
    // }

    // VERY IMPORTANT -- DISPATCH ACTION IF AVAILABLE
    if (action != null) {
      action();
    }
  };

  return (
    <ButtonUnstyled className={classes.button} onClick={handleClick}>
      {text}
    </ButtonUnstyled>
  );
}

PageButton.defaultProps = {
  setOverlayOpened: () => {},
  emptyError: false,
  setEmptyError: () => {},
}

export default PageButton;
