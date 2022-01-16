import React from 'react';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    width: (props) => (props.size === 'short' ? '13.8rem' : '25.5rem'),
    height: '7.5rem',
    border: '0rem',
    marginBottom: '5rem',
    borderRadius: (props) => (props.size === 'short' ? '3.1rem' : '3.75rem'),
    backgroundColor: theme.color.grey,
    font: theme.font.button,
  },
}));

// button props: text, size, page
function PageButton({ ...props }) {
  const classes = useStyles(props);
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.page === 'majors') {
      // skip minors
      navigate('/year');
    } else if (props.page === 'minors') {
      props.text === 'Back' ? navigate('/') : navigate('/year');
    } else if (props.page === 'year') {
      props.text === 'Back'
        ? // go back to majors (skip minors)
          navigate('/')
        : navigate('/courses');
    } else if (props.page === 'courses') {
      props.text === 'Back' ? navigate('/year') : navigate('/eligible');
    } else {
      //if (props.page === 'eligible') {
      props.text === 'Back' ? navigate('/courses') : navigate('/done');
    }
    // props.page === "done"
    // else {
    //   nothing for now.
    // }

    // VERY IMPORTANT -- DISPATCH ACTION IF AVAILABLE
    if (props.action != null) {
      props.action();
    }
  };

  return (
    <ButtonUnstyled className={classes.button} onClick={handleClick}>
      {props.text}
    </ButtonUnstyled>
  );
}

export default PageButton;
