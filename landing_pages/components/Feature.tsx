import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

function Feature({ title, description, icon }) {
  const classes = useStyles();

  let iconComponent;

  switch (icon) {
    case "instant":
      iconComponent = <CheckCircleOutlineIcon />;
      break;
    case "low-fee":
      iconComponent = <CheckCircleOutlineIcon />;
      break;
    case "secure":
      iconComponent = <CheckCircleOutlineIcon />;
      break;
    case "decentralized":
      iconComponent = <CheckCircleOutlineIcon />;
      break;
    case "accessible":
      iconComponent = <CheckCircleOutlineIcon />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.icon}>{iconComponent}</div>
      <div>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
    </div>
  );
}

export default Feature;
