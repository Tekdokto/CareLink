import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#002868",
    color: "#fff",
    padding: theme.spacing(6, 0),
    position: "relative",
    zIndex: 1,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "auto",
    zIndex: -1,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: 1200,
    margin: "0 auto",
  },
  section: {
    marginBottom: theme.spacing(3),
    "& h3": {
      fontSize: "1.2rem",
      marginBottom: theme.spacing(2),
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      marginBottom: theme.spacing(1),
      display: "block",
    },
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
      <img src="/images/wave.svg" alt="Wave" className={classes.wave} />
      <div className={classes.content}>
        <div className={classes.section}>
          <h3>Help and Contact</h3>
          <a href="#">Customer Service</a>
          <a href="#">Help Center</a>
        </div>
        <div className={classes.section}>
          <h3>Fees</h3>
          <a href="#">Fees</a>
          <a href="#">Calculator</a>
        </div>
        <div className={classes.section}>
          <h3>Security</h3>
          <a href="#">Security Center</a>
          <a href="#">Privacy</a>
        </div>
        <div className={classes.section}>
          <h3>Features</h3>
          <a href="#">Payment Methods</a>
          <a href="#">Mobile App</a>
        </div>
        <div className={classes.section}>
          <h3>Shop</h3>
          <a href="#">Shop with EazyGram</a>
        </div>
        <div className={classes.section}>
          <h3>See all countries/regions</h3>
          <a href="#">Country Selector</a>
        </div>
        <div className={classes.section}>
          <h3>About</h3>
          <a href="#">About EazyGram</a>
          <a href="#">Investor Relations</a>
          <a href="#">Partner Program</a>
        </div>
        <div className={classes.section}>
          <h3>Newsrooms</h3>
          <a href="#">EazyGram News</a>
          <a href="#">Announcements</a>
          <a href="#">Press Resources</a>
        </div>
        <div className={classes.section}>
          <h3>Jobs</h3>
          <a href="#">Job Search</a>
        </div>
        <div className={classes.section}>
          <h3>Developers</h3>
          <a href="#">Developer Docs</a>
          <a href="#">API Reference</a>
        </div>
      </div>
      <div className={classes.disclaimer}>
        <p>&copy; 1999–2023 All rights reserved. EazyGram</p>
      </div>
    </footer>
  );
}
export default Footer;