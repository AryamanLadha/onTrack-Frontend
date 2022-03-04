import React from 'react'
import { makeStyles } from '@mui/styles';
import onTrackLogoMini from '../assets/icons/onTrackLogoMini.svg';


const useStyles = makeStyles((theme) => ({

    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#B2BCAA',
        height:'8rem',
        position: 'absolute',
        width: '100%'
    },

    textbutton:{
        backgroundColor: '#B2BCAA',
        font: theme.font.subtitle,
        color: '#FFFFFF',
        marginLeft: '3rem',
        marginRight: '3rem'
    },

    navimg: {
        backgroundColor: '#B2BCAA',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        marginLeft: '3rem',
        marginRight: '120rem'
    },

}));

const Navbar = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.navbar}>
                <img src = {onTrackLogoMini} className = {classes.navimg} alt="Nav bar"/>
                <button className = {classes.textbutton}> Eligible Courses</button>
                <button className = {classes.textbutton}> Profile</button>
        </div>
    )
}

export default Navbar
