import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Switch,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header ({toggleTheme, themeMode}) {
  const [showMenu, setShowMenu] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          CareLink
        </Typography>
        {isMobile ? (
          <IconButton edge="start" color="inherit" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        ) : (
          <nav>
            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}
            >
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/">
                  <div style={{ color: 'inherit', textDecoration: 'none' }}>Home</div>
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/download">
                  <div style={{ color: 'inherit', textDecoration: 'none' }}>About</div>
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/services">
                  <div style={{ color: 'inherit', textDecoration: 'none' }}>Services</div>
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/contact">
                  <div style={{ color: 'inherit', textDecoration: 'none' }}>Contact</div>
                </Link>
              </motion.li>
            </motion.ul>
          </nav>
        )}
        <Switch
          color="default"
          onChange={toggleTheme}
          // icon={<MoonIcon />}
          // checkedIcon={<SunIcon />}
        />
      </Toolbar>
      {isMobile && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={showMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/">
                <div style={{ color: 'inherit', textDecoration: 'none' }}>Home</div>
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/about">
                <div style={{ color: 'inherit', textDecoration: 'none' }}>About</div>
              </Link>
            </motion.li>
            <motion.li whileHover={{          scale: 1.1,
          color: theme.palette.primary.main
        }}>
          <Link href="/services">
            <div style={{ color: 'inherit', textDecoration: 'none' }}>Services</div>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link href="/contact">
            <div style={{ color: 'inherit', textDecoration: 'none' }}>Contact</div>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )}
</AppBar>
);
};
