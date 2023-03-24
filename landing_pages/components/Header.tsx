import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import Brightness7 from '@material-ui/icons/Brightness7';
import Brightness4 from '@material-ui/icons/Brightness4';
import MoreIcon from '@material-ui/icons/MoreVert';
import useTheme  from '@material-ui/core/styles/useTheme';
import Link from 'next/link';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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

const Header = ({
    currentList, setCurrentList,
    open, setOpen, mobileOpen, setMobileOpen, 
    anchorEl, setAnchorEl, messagesAnchorEl, 
    setMessagesAnchorEl, toggleTheme, themeMode
}) => {

  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [title, setTitle] = useState(currentList)

  useEffect(()=>{
    setCurrentList(title)
  }, [currentList]);

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
  const toDashboard = () => {
    router.push('/dashboards')
  }
return (
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
                    {title}
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
                        <Button color="inherit" onClick={toggleTheme}>
                            {themeMode === 'light' ? <Brightness7 /> : <Brightness4 />}
                        </Button>
                        <MenuItem>
                            <Avatar alt="User Avatar" src="https://example.com/avatar.jpg" />
                        </MenuItem>
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
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
    );
}
export default Header;