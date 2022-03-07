import React from 'react';
import { connect } from "react-redux";
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { config, logout } from '../actions/actions';
import GoogleLogin from '../assets/icons/GoogleLogin.svg';
import EditProfile from '../assets/icons/EditProfile.svg';
import Logout from '../assets/icons/Logout.svg';

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

    // Styling for Navbar buttons
    nav: {
      backgroundColor: props.active ? '#858d80' : '#B2BBAA',
      borderRadius: '.75rem',
      font: theme.font.subtitle,
      color: '#FFFFFF',
      height: '4rem',
      marginLeft: '3rem',
      marginRight: '3rem',
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
function PageButton({ page, text, size, action, setOverlayOpened, activeNavPage, logout }) {
  const [ isHovered, setIsHovered ] = React.useState(false);

  const props = {
    page: page,
    isHovered: isHovered,
    size: size,
    active: activeNavPage,
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
    {
      text === 'Edit' && navigate('/edit');
      text === 'Logout' && logout();
    }

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
      navigate('/eligible');

    else if (page === 'nav')
      text === 'Eligible Courses' ? navigate('/eligible') : navigate('/profile');

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
      className={page !== 'nav' && page !== 'login' && props.page !== 'profile' ? classes.normal : page == 'nav' ? classes.nav : classes.special} 
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div>
      {page !== 'login' && page !== 'profile' && page !== 'profile' ? text : null}
      {page === 'login' ? (<img src={GoogleLogin} alt="google-login" />) : null}
      {text === 'Edit' ? (<img src={EditProfile} alt="edit-profile" />) : null}
      {text === 'Logout' ? (<img src={Logout} alt="logout" />) : null}
      </div>
    </ButtonUnstyled>
  );
}

PageButton.defaultProps = {
  setOverlayOpened: () => {},
  activeNavPage: null,
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(PageButton);
