import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { Phone, Mail, LocationOn } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(6, 0),
    },
    container: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: theme.spacing(0, 2),
      [theme.breakpoints.up("md")]: {
        maxWidth: theme.breakpoints.values.md,
      },
    },
    sectionTitle: {
      fontWeight: "bold",
      marginBottom: theme.spacing(4),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    textField: {
      marginBottom: theme.spacing(3),
    },
    submitButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  })
);

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.sectionTitle}>
          Contact Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              <LocationOn className={classes.icon} />
              Address
            </Typography>
            <Typography variant="body1">
              123 Main Street, Suite 200
              <br />
              Anytown, USA 12345
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              <Mail className={classes.icon} />
              Email
            </Typography>
            <Typography variant="body1">
              <a href="mailto:contact@eazygram.com">contact@eazygram.com</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              <Phone className={classes.icon} />
              Phone
            </Typography>
            <Typography variant="body1">
              <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Send us a message
            </Typography>
            <form>
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                className={classes.textField}
              />
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                className={classes.textField}
              />
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                id="message"
                label="Message"
                className={classes.textField}
              />
              <Button
                variant="contained"
                size="large"
                className={classes.submitButton}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
