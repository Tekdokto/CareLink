import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import classNames from 'classnames';

// type Props = {
//   children?: ReactNode
//   title?: string
// }
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    padding: '30px',

  },
}));
function Layout({ toggleTheme, themeMode, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Skiltime</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header toggleTheme={toggleTheme} themeMode={themeMode}/>
      <div className={classNames(classes.root)}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
