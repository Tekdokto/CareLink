import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  useTheme,
} from '@material-ui/core';
import { FaGooglePlay, FaAppStoreIos, FaWindows } from 'react-icons/fa';
import Brightness7 from '@material-ui/icons/Brightness7';
import Brightness4 from '@material-ui/icons/Brightness4';
import Layout from '../../components/Layout';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  icon: {
    fontSize: '4rem',
    margin: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const Download = ({ toggleTheme, themeMode }) => {
  const classes = useStyles();
  const theme = useTheme();

  const brandColors = {
    googlePlay: '#3DDC84',
    appStore: '#0D96F6',
    windows: '#0078D7',
  };
  return (
    <div className={classNames(classes.root)}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classNames(classes.card)}>
            <CardContent>
              <FaGooglePlay className={classNames(classes.icon)} 
                color={themeMode === 'light' ? brandColors.googlePlay : brandColors.googlePlay} 
                />
              <Typography variant="h5">Download for Android</Typography>
              <Typography variant="body1" color="textSecondary">
                Get the Skiltime app on your Android device.
              </Typography>
              <Button
                variant="contained"
                className={classNames(classes.button)}
                onClick={() => console.log('Android download clicked!')}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classNames(classes.card)}>
            <CardContent>
              <FaAppStoreIos className={classNames(classes.icon)} 
                color={themeMode === 'light' ? brandColors.appStore : brandColors.appStore} 
              />
              <Typography variant="h5">Download for iOS</Typography>
              <Typography variant="body1" color="textSecondary">
                Get the Skiltime app on your iPhone or iPad.
              </Typography>
              <Button
                variant="contained"
                className={classNames(classes.button)}
                onClick={() => console.log('iOS download clicked!')}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classNames(classes.card)}>
            <CardContent>
              <FaWindows className={classNames(classes.icon)} 
                color={themeMode === 'light' ? brandColors.windows : brandColors.windows} 
              />
              <Typography variant="h5">Download for Windows</Typography>
              <Typography variant="body1" color="textSecondary">
                Get the desktop app and start your job search today.
              </Typography>
              <Button
                variant="contained"
                className={classNames(classes.button)}
                onClick={() => console.log('Windows download clicked!')}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
      <Button onClick={toggleTheme}>
        {themeMode === 'light' ? <Brightness7 /> : <Brightness4 />}
      </Button>
    </div>
  );
};

export default function DownloadPage({toggleTheme, themeMode}) {
  const theme = useTheme();

  return (
    <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
        <Download toggleTheme={toggleTheme} themeMode={themeMode}/>
    </Layout>
  );
}

