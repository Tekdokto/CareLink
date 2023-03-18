import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import useTheme  from '@material-ui/core/styles/useTheme';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import classNames from 'classnames';
import clsx from 'clsx';
import SideBarDrawer from './SideBarDrawer';

// type Props = {
//   children?: ReactNode
//   title?: string
// }
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
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
}));
function Layout({ toggleTheme, themeMode, children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();

  return (
    <div>
      <Head>
        <title>Skiltime</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.root}>
        <Header toggleTheme={toggleTheme} themeMode={themeMode}/>
        <SideBarDrawer open={open} setOpen={setOpen} toggleTheme={toggleTheme} themeMode={themeMode} />
        <main className={clsx(classes.content, { [classes.contentShift]: open })}>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Layout
