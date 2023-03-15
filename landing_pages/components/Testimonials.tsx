import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  testimonialContainer: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.secondary.light,
  },
  testimonialImage: {
    width: '100%',
    maxWidth: '150px',
    borderRadius: '50%',
    marginBottom: theme.spacing(2),
  },
  testimonialText: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(2),
  },
}));

export default function Testimonials() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.testimonialContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={4} lg={3}>
          <div className="text-center">
            <img
              src="/images/testimonial-1.jpg"
              alt="Testimonial 1"
              className={classes.testimonialImage}
            />
            <Typography variant="h6" component="h3">
              John Doe
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              CEO, Acme Inc.
            </Typography>
          </div>
          <Typography variant="body1" className={classes.testimonialText}>
            "EazyGram has completely revolutionized the way we do business in
            Africa. It's fast, secure, and accessible to everyone."
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className="text-center">
            <img
              src="/images/testimonial-2.jpg"
              alt="Testimonial 2"
              className={classes.testimonialImage}
            />
            <Typography variant="h6" component="h3">
              Jane Smith
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Entrepreneur
            </Typography>
          </div>
          <Typography variant="body1" className={classes.testimonialText}>
            "I love how easy it is to use EazyGram. And the low transaction fees
            are a game-changer for small business owners like myself."
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className="text-center">
            <img
              src="/images/testimonial-3.jpg"
              alt="Testimonial 3"
              className={classes.testimonialImage}
            />
            <Typography variant="h6" component="h3">
              David Johnson
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Investor
            </Typography>
          </div>
          <Typography variant="body1" className={classes.testimonialText}>
            "I've never seen anything like EazyGram before. It's truly a
            game-changer for the African economy."
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
