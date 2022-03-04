import React from 'react'
import { makeStyles } from '@mui/styles';
import onTrackLogin from '../assets/icons/onTrackLogin.svg';
import GoogleLogin from '../assets/icons/GoogleLogin.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    layout: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#E5E5E5',
    },

    img: {
        width: '40%',
    },

    loginBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '60%', 
    },

    title: {
        font: theme.font.loginTitle,
        color: theme.color.loginBlack,
        textAlign: 'center',
        width: '60rem',
        marginTop: '1.8rem',
        marginBottom: '1.8rem'
      },

    subtitle: {
        positon: 'relative',
        textAlign: 'center',
        font: theme.font.loginSubtitle,
        marginTop: '1.8rem',
        marginBottom: '1.8rem',
    },

  }));


const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const authenticate = () => {
        navigate('http://localhost:8000/api/auth/google')
    }

    return (
        <div className={classes.layout}>
            <img src = {onTrackLogin} className = {classes.img} alt="Login Screen"/>
            <header className={classes.loginBox}>
                <span className={classes.title}>
                    The only course planner you’ll ever need.
                </span>
                <span className={classes.subtitle}>
                    Log in now!
                </span>
                <button onClick={authenticate}><img src={GoogleLogin} alt="Google Login"/></button>
            </header>
            
        </div>
    )
}

export default Login
