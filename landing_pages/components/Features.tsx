import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Feature from "./Feature";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(10, 0),
  },
  container: {
    maxWidth: 1200,
    margin: "auto",
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 700,
    textAlign: "center",
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root)}>
      <div className={classNames(classes.container)}>
        <Typography variant="h2" className={classNames(classes.title)}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Feature
              title="Instant Transactions"
              description="Send and receive payments instantly with EazyGram."
              icon="instant"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Feature
              title="Low Transaction Fees"
              description="EazyGram has some of the lowest transaction fees on the market."
              icon="low-fees"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Feature
              title="Secure"
              description="EazyGram uses the latest encryption technology to ensure the security of your transactions."
              icon="secure"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Feature
              title="Decentralized"
              description="EazyGram is not controlled by any central authority, making it truly decentralized."
              icon="decentralized"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Feature
              title="Accessible"
              description="Anyone with a smartphone can use EazyGram, making it accessible to everyone."
              icon="accessible"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Features;
