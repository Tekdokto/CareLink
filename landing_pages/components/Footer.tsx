import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.type === 'light' ? "#fcf5ebcc" : '#fcf5eb18',
    boxShadow: `0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)`,
    color: theme.palette.type === 'light' ? "#000" : '#fff',
    padding: theme.spacing(0, 0),
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  footerShift: {
    backgroundColor: theme.palette.type === 'light' ? "#fcf5ebcc" : '#fcf5eb18',
    boxShadow: `0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)`,
    color: theme.palette.type === 'light' ? "#000" : '#fff',
    padding: theme.spacing(0, 0),
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  disclaimer: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));

function Footer({open}) {
  const classes = useStyles();

  return (
    <footer className={open ? classes.footerShift : classes.footer} >
      <div className={classes.disclaimer}>
        <p>&copy; 1999–2023 All rights reserved. CareLink</p>
      </div>
    </footer>
  );
}
export default Footer;