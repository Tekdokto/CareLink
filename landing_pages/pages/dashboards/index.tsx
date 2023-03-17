import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MoreIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from 'next/link';
import clsx from 'clsx';
import useTheme  from '@material-ui/core/styles/useTheme';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const DashboardPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [messagesAnchorEl, setMessagesAnchorEl] = useState(null);

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpen(!open);
  };

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMessagesMenu = (event: any) => {
    setMessagesAnchorEl(event.currentTarget);
  };

  const handleMessagesClose = () => {
    setMessagesAnchorEl(null);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
    { text: 'People', icon: <PeopleIcon />, path: '/people' },
    { text: 'Supervisor Account', icon: <SupervisorAccountIcon />, path: '/supervisor-account' },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' }
  ];
  
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Dashboard', 'Appointments', 'Patients', 'Staff', 'Reports', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                    {index === 0 && <DashboardIcon />}
                    {index === 1 && <CalendarTodayIcon />}
                    {index === 2 && <PeopleIcon />}
                    {index === 3 && <SupervisorAccountIcon />}
                    {index === 4 && <AssessmentIcon />}
                    {index === 5 && <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton color="inherit" aria-label="show 4 new mails">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" aria-label="show 17 new notifications">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleMessagesMenu}>
                    <MessageIcon />
                </IconButton>
                <Menu
                    anchorEl={messagesAnchorEl}
                    keepMounted
                    open={Boolean(messagesAnchorEl)}
                    onClose={handleMessagesClose}
                >
                    <MenuItem onClick={handleMessagesClose}>Message 1</MenuItem>
                    <MenuItem onClick={handleMessagesClose}>Message 2</MenuItem>
                    <MenuItem onClick={handleMessagesClose}>Message 3</MenuItem>
                </Menu>
                
            </div>
        </div>
    );
return (
    <div className={classes.root}>
        <AppBar position="fixed" className={open ? classes.appBarShift : classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    className={open ? classes.hide : classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Dashboard
                </Typography>
                <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" onClick={handleMessagesMenu}>
                            <MessageIcon />
                        </IconButton>
                        <Menu
                            anchorEl={messagesAnchorEl}
                            keepMounted
                            open={Boolean(messagesAnchorEl)}
                            onClose={handleMessagesClose}
                        >
                            <MenuItem onClick={handleMessagesClose}>Message 1</MenuItem>
                            <MenuItem onClick={handleMessagesClose}>Message 2</MenuItem>
                            <MenuItem onClick={handleMessagesClose}>Message 3</MenuItem>
                        </Menu>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls="mobile-menu"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMenu}
                        >
                            <MoreIcon />
                        </IconButton>
                        <Menu
                            id="mobile-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <IconButton color="inherit">
                                    <Badge badgeContent={4} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <p>Messages</p>
                            </MenuItem>
                            <MenuItem>
                                <IconButton color="inherit">
                                    <Badge badgeContent={17} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <p>Notifications</p>
                            </MenuItem>
                            <MenuItem>
                            <Avatar alt="User Avatar" src="https://example.com/avatar.jpg" />
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerToggle}>
                        <ChevronLeftIcon />
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                {drawer}
            </Drawer>
            <main className={clsx(classes.content, { [classes.contentShift]: open })}>
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography paragraph>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Link href={'/download'}>
                  Download
                </Link>
            </main>
        </div>
    );
}
export default DashboardPage;