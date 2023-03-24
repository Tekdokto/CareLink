import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Head from 'next/head';
import clsx from 'clsx';
import useTheme  from '@material-ui/core/styles/useTheme';
import Header from './Header';
import SideBarDrawer from './SideBarDrawer';
import Footer from './Footer';

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

const Layout = ({ toggleTheme, themeMode, children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentList, setCurrentList] = React.useState('Dashboard');
  const [messagesAnchorEl, setMessagesAnchorEl] = useState(null);

  const theme = useTheme();

  return (
    <div>
      <Head>
        <title>CareLink</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={classes.root}>
          <Header 
            currentList={currentList}
            setCurrentList={setCurrentList}
            open={open} setOpen={setOpen} 
            mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} 
            anchorEl={anchorEl} setAnchorEl={setAnchorEl} 
            messagesAnchorEl={messagesAnchorEl} setMessagesAnchorEl={setMessagesAnchorEl} 
            toggleTheme={toggleTheme} themeMode={themeMode} 
          />

          <SideBarDrawer  
            currentList={currentList}
            setCurrentList={setCurrentList}
            open={open} setOpen={setOpen} 
            mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} 
            anchorEl={anchorEl} setAnchorEl={setAnchorEl} 
            messagesAnchorEl={messagesAnchorEl} setMessagesAnchorEl={setMessagesAnchorEl} 
            toggleTheme={toggleTheme} themeMode={themeMode}  
          />
          <div>
          <main className={clsx(classes.content, { [classes.contentShift]: open })}>
            <div className={classes.drawerHeader} />
            {children}
          </main>
          <Footer open={open}/>
          </div>
        </div>
      </div>
    );
}
export default Layout;
