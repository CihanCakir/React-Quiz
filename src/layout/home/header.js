
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link, NavLink } from "react-router-dom";
import PetsIcon from '@material-ui/icons/';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        '& > svg': {
            margin: theme.spacing(2),
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
    },
}));
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.drawerPaper}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <b>
                            <Link to="/"> DA </Link>
                        </b>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        AVM Questions
          </Typography>
                    <NavLink to="/home/login">
                        <Button >Login</Button>
                    </NavLink>
                    <NavLink to="/home/register">
                        <Button>Register</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}