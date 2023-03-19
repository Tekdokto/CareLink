import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#002868",
    color: "#fff",
    padding: theme.spacing(6, 0),
    position: "sticky",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  disclaimer: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.disclaimer}>
        <p>&copy; 1999–2023 All rights reserved. CareLink</p>
      </div>
    </footer>
  );
}
export default Footer;