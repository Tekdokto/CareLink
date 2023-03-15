import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 64px)", // subtract height of header
    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    color: theme.palette.common.white,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 56px)",
    },
  },
  heroBannerContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  heroBannerTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  heroBannerButton: {
    marginTop: theme.spacing(4),
  },
}));

function HeroBanner() {
  const classes = useStyles();

  return (
    <div className={classes.heroBanner}>
      <div className={classes.heroBannerContent}>
        <Typography variant="h2" className={classes.heroBannerTitle}>
          Introducing EazyGram:
          <br />
          The Non-Crypto Decentralized Digital Currency for Africa
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.heroBannerButton}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroBanner;
