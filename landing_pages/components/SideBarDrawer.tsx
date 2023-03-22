import React, { useState, MouseEventHandler } from 'react';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Brightness7 from '@material-ui/icons/Brightness7';
import Brightness4 from '@material-ui/icons/Brightness4';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, Theme } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from 'next/link';
import useTheme  from '@material-ui/core/styles/useTheme';
import ChatIcon from '@material-ui/icons/Chat';
import PharmacyIcon from '@material-ui/icons/LocalPharmacy';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
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

const SideBarDrawer = ({
    open, setOpen, mobileOpen, setMobileOpen, 
    anchorEl, setAnchorEl, messagesAnchorEl, 
    setMessagesAnchorEl, toggleTheme, themeMode
}) => {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpen(!open);
  };

  const handleMessagesMenu = (event: any) => {
    setMessagesAnchorEl(event.currentTarget);
  };

  const handleMessagesClose = () => {
    setMessagesAnchorEl(null);
  };

  const handleNavigation: MouseEventHandler<HTMLDivElement> = (event) => {
    const index = parseInt(event.currentTarget.getAttribute('data-index') || '0', 10);
    switch(index){
      case 0:
        router.push('/dashboards');
        break;
      case 1:
        router.push('/appointments');
        break;
      case 2:
        router.push('/doctors');
        break;
      case 3:
        router.push('/chats');
        break;
      case 4:
        router.push('/mails');
        break;
      case 5:
        router.push('/pharmacy');
        break;
      case 6:
        router.push('/reports');
        break;
      case 7:
        router.push('/settings');
        break;
    }
  }

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
        {['Dashboard', 'Appointments', 'Doctors', 'Chats', 'Mails', 'Pharmacy', 'Reports', 'Settings'].map((text, index) => (
            <ListItem onClick={handleNavigation} button key={text} data-index={index}>
              <ListItemIcon>
                {index === 0 && <DashboardIcon color="primary"/>}
                {index === 1 && <CalendarTodayIcon color="primary"/>}
                {index === 2 && <PeopleIcon color="primary"/>}
                {index === 3 && <ChatIcon color="primary"/>}
                {index === 4 && <MailIcon color="primary"/>}
                {index === 5 && <PharmacyIcon color="primary"/>}
                {index === 6 && <SupervisorAccountIcon color="primary"/>}
                {index === 7 && <AssessmentIcon color="primary"/>}
                {index === 8 && <SettingsIcon color="primary"/>}
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
                <Button onClick={toggleTheme}>
                    {themeMode === 'light' ? <Brightness7 /> : <Brightness4 />}
                </Button>
                
            </div>
        </div>
    );
return (
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
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            {drawer}
        </Drawer>
    );
}
export default SideBarDrawer;