import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useTheme from '@material-ui/core/styles/useTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import { FiDownload } from 'react-icons/fi';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        margin: theme.spacing(2),
        borderRadius: '25px',
        padding: '12px 25px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    buttonDark: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        margin: theme.spacing(2),
      borderRadius: '25px',
      padding: '12px 25px',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
}));

interface DownloadButtonProps {
    label?: string;
    onClick?: () => void;
}
function DownloadButton({ label = 'Download', onClick }: DownloadButtonProps) {
const classes = useStyles();
const theme = useTheme();

return (
    <ThemeProvider theme={theme}>
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      className={classNames(classes.button)}
      startIcon={<FiDownload className={classNames(classes.icon)} />}
    >
      {label}
    </Button>
    </ThemeProvider>
);
}

export default DownloadButton;
