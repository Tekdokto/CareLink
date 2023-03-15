import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  image: {
    maxWidth: '100%',
    height: '500px',
    alignSelf: 'right',
  },
  content: {
    margin: 'auto',
    textAlign: 'left',
    color: theme.palette.type === 'dark' ? '#fff' : '#fff',
    padding: theme.spacing(6, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0),
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5, 3),
    },
  },
}));

const TalentsSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classNames(classes.root)}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} className={classNames(classes.content)}>
          <Typography variant="h2" gutterBottom>
           Private Chat Companies Just Got Eazzzzy..
          </Typography>
          <Button variant="contained" color="primary" className={classNames(classes.button)}>
            Network Now
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
            <img src="https://res.cloudinary.com/skiltime/image/upload/v1678535204/phone_acbmsw.png" alt="Person holding phone" className={classNames(classes.image)} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TalentsSection;
