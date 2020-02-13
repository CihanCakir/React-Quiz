import React from 'react'
import { useStyles } from './GeneralJSXstyling';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PetsIcon from '@material-ui/icons/Pets';
import Toolbar from '@material-ui/core/Toolbar';



import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';





const Sidebar = (props) => {

    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);




    const logOut = () => {
        localStorage.removeItem('user');
        props.props.history.push('/');
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const loadPage = (ev, text) => {
        switch (text) {
            case 'HomePage':
                props.props.history.push('/dashboard/');
                break
            case 'Quiz App':
                props.props.history.push('/dashboard/quiz-app');
                break;
            case 'İnooster':
                props.props.history.push('/dashboard/inooster');
            default:
                break;
        }


    }



    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['HomePage', 'Quiz App', 'İnooster'].map((text, index) => (
                    // <ListItem button key={text} onClick={(ev) => loadPage(ev, text)}>
                    <ListItem button key={text} onClick={(ev => loadPage(ev, text))}>

                        <ListItemIcon>{index % 2 === 0 ? <PetsIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    //  <ListItem button key={text} onClick={(cv) => dLoadPage(cv, text)}>
                    <ListItem button key={text} onClick={loadPage}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        İnooster Speed Up Quiz
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>

    )
}

export default Sidebar;

