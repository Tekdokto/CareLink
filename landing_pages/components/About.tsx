import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(10, 0),
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(5),
  },
  text: {
    marginBottom: theme.spacing(5),
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
  },
}));

export default function About() {
  const classes = useStyles();
  
  return (
    <div className={classNames(classes.root, "center-content")}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          About EazyGram
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="/images/about-image.jpg"
              alt="About EazyGram"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" className={classes.text}>
              EazyGram is a non-crypto decentralized digital currency created to solve the problem of high transaction fees and slow processing times in Africa. Our mission is to make digital transactions accessible and affordable for everyone, regardless of their financial status or location.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              With EazyGram, you can send and receive money instantly and securely, without worrying about high fees or long wait times. Our decentralized platform ensures that your transactions are always safe and secure, and our user-friendly app makes it easy to manage your money on the go.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
