import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: 'transparent',
    flex: 1,
    position: 'relative',
    zIndex: 1,
    backgroundPosition: 'center',
    padding: '10px 30px',

  },
  section_one: {
    position: 'relative',
  //   height: '100vh',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundImage: theme.palette.type === 'light' ? `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")` : `url("https://res.cloudinary.com/skiltime/image/upload/v1678535188/peakpx_1_c62kvg.jpg")`,
    backgroundColor: '#f7f7f7',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    marginBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    borderTopRightRadius: '9999px',
    borderBottomRightRadius: '9999px',
  },
  section: {
    marginBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    borderTopLeftRadius: '9999px',
    borderBottomLeftRadius: '9999px',
  },
  section_two: {
    marginBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    borderTopRightRadius: '9999px',
    borderBottomRightRadius: '9999px',
  },
  sectionTitle: {
    paddingBottom: theme.spacing(3),
    fontWeight: 'bold',
  },
  appIcon: {
    marginRight: theme.spacing(2),
    width: 60,
  },
  button: {
    marginRight: theme.spacing(2),
    color: theme.palette.type === 'dark' ? '#fff' : '#000', // set color for light and dark themes
    backgroundColor: theme.palette.type === 'dark' ? '#1874f4' : '#f5f5f5', // set background color for light and dark themes
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#1874f4' : '#dbdbdb', // set hover background color for light and dark themes
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.type === 'dark' ? '#1874f4' : '#000', // set icon color for light and dark themes
  },
  downloadIcon: {
    marginRight: theme.spacing(2),
    width: 120,
  },
}));
import Layout from '../components/Layout';
import EmployersSection from '../components/sections/EmployersSection';
import HomePageSectionOne from '../components/sections/HomePageSectionOne';
import TalentsSection from '../components/sections/TalentsSection';
import WalletSection from '../components/sections/WlletSection';

function IndexPage({ toggleTheme, themeMode }) {
  const classes = useStyles();
  const theme = useTheme();
    return (
      <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
        <Box className={classNames(classes.section_one)} bgcolor={themeMode === 'light' ? "background.paper" : "secondary.main"}>
          <HomePageSectionOne themeMode={themeMode} />
        </Box>

        <Box className={classNames(classes.section)} bgcolor="secondary.main" color="white">
          <EmployersSection />
        </Box>
        <Box className={classNames(classes.section_two)} bgcolor={themeMode === 'light' ? "#293145" : "secondary.main"} color="white">
          <TalentsSection />
        </Box>
        <Box className={classNames(classes.section)} bgcolor="primary.main" color="white">
          <WalletSection />
        </Box>
        </Layout>
    );
  }
export default IndexPage;  