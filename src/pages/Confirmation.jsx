import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import onTrackLogoSmall from '../assets/icons/onTrackLogoSmall.svg';
import { PageButton } from '../components';
import { updateUserData } from '../api/updateUserData';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height:'100vh'
  },

  img: {
    backgroundColor: '#FDFCF8',
    marginTop: '2rem',
    marginBottom: '2rem'
  },

  title: {
    font: theme.font.title,
    textAlign: 'center',
    width: '60rem',
    marginTop: '20rem',
    marginBottom: '4rem'
  },

  subtitle: {
    positon: 'relative',
    textAlign: 'center',
    width: '50rem',
    font: theme.font.subtitle,
    marginTop: '1.8rem',
    marginBottom: '20rem',
  },
}));


const Confirmation = ({ userData, }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <span className={classes.title}>
        You're all set!
      </span>
      <img src={onTrackLogoSmall} className={classes.img} alt="Confirmation Screen"/>
      <span className={classes.subtitle}>
        Welcome to onTrack! Get started with planning your courses for the 2021-2022 school year!
      </span>
      <PageButton
        text={'Done'}
        size={'long'}
        page={'confirm'}
        action={() => {
            updateUserData(userData);
        }}
      />
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    userData: store,
  }
};

export default connect(mapStateToProps, null)(Confirmation);
