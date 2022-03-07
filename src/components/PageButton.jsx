import React from 'react';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { config } from '../actions/actions';
import GoogleLogin from '../assets/icons/GoogleLogin.svg';
import EditProfile from '../assets/icons/EditProfile.svg';

const useStyles = (props) =>
  makeStyles((theme) => ({
    
    // If PageButton should be a normal button
    normal: {
      // Two sizes of buttons depending on prop passed
      width: props.size === 'short' ? '13.8rem' : '25.5rem',
      borderRadius: props.size === 'short' ? '3.1rem' : '3.75rem',
      backgroundColor: props.isHovered ? theme.color.hoveredButton : theme.color.button,
      font: theme.font.button,
      color: theme.color.white,
      height: '7.5rem',
      border: '0rem',
      marginBottom: '5rem',
      all: 'none',
    },

    // Styling for special PageButtons (Google login, edit profile)
    special: {
      height: '7.5rem',
      border: '0rem',
      marginBottom: '5rem',
      all: 'none',
    },
  }));

// Button props: text, size, page
function PageButton({ page, text, size, action, setOverlayOpened, }) {
  const [ isHovered, setIsHovered ] = React.useState(false);

  const props = {
    page: page,
    isHovered: isHovered,
    size: size,
  };
  const classes = useStyles(props)();
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    if (page === 'login')
      window.open(`${config.baseURL}/api/auth/google`, '_self');

    else if (page === 'profile')
      text === 'Edit' && navigate('/edit');

    else if (page === 'majors') {
      // Skip minors
      navigate('/year');
    }

    else if (page === 'minors')
      text === 'Back' ? navigate('/') : navigate('/year');
      
    else if (page === 'year') {
      text === 'Back'
        ? // Go back to majors (skip minors)
          navigate('/majors')
        : navigate('/courses');

    }
    
    else if (page === 'courses')
      text === 'Back' ? navigate('/year') : navigate('/confirm');

    else if (page === 'coursesOverlay')
      setOverlayOpened(false);

    else if (page === 'confirm')
      text === 'Back' ? navigate('/courses') : navigate('/eligible');

    else if (page === 'eligible')
      text === 'Back' ? navigate('/courses') : navigate('/done');

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
    <ButtonUnstyled
      className={page !== 'login' && props.page !== 'profile' ? classes.normal : classes.special} 
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div>
      {page !== 'login' && page !== 'profile' ? text : null}
      {page === 'login' ? (<img src={GoogleLogin} alt="google-login" />) : null}
      {page === 'profile' ? (<img src={EditProfile} alt="edit-profile" />) : null}
      </div>
    </ButtonUnstyled>
  );
}

PageButton.defaultProps = {
  setOverlayOpened: () => {},
}

export default PageButton;
