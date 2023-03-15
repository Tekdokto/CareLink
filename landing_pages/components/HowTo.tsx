import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(8),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  stepIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(4),
    height: theme.spacing(8),
    width: theme.spacing(8),
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  stepText: {
    flexGrow: 1,
  },
  button: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
    },
  },
}));

export default function HowTo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.sectionTitle}>
        How to Get Started
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} className={classes.step}>
          <div className={classes.stepIcon}>
            <img src="/images/step-1.svg" alt="Step 1" />
          </div>
          <Typography variant="h5" className={classes.stepText}>
            Create a free account on the EazyGram website or app
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.step}>
          <div className={classes.stepIcon}>
            <img src="/images/step-2.svg" alt="Step 2" />
          </div>
          <Typography variant="h5" className={classes.stepText}>
            Add funds to your EazyGram wallet using your local currency
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.step}>
          <div className={classes.stepIcon}>
            <img src="/images/step-3.svg" alt="Step 3" />
          </div>
          <Typography variant="h5" className={classes.stepText}>
            Start using EazyGram to make fast, low-cost transactions
          </Typography>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        Get Started
      </Button>
    </div>
  );
}
