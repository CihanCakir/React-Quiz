import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import madalyon from './madalyon.png'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center'

    },
    small: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    medium: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        alignContent: 'center',
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root} align="center">
            <Avatar alt="Remy Sharp" src={madalyon} className={classes.small} />
            <Avatar alt="Remy Sharp" src={madalyon} className={classes.medium} />
            <Avatar alt="Remy Sharp" src={madalyon} className={classes.large} />
        </div>
    );
}