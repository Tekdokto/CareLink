import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Layout from "../../components/Layout";
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
    position: 'relative',
  zIndex: 1,
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

export default function Login({toggleTheme, themeMode}) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call function to generate unique phone number
    const newPhoneNumber = generatePhoneNumber(email);
    setPhoneNumber(newPhoneNumber);
    setOpenSnackbar(true);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const generatePhoneNumber = (email) => {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    const phoneNumber = `${email.split("@")[0]}-${randomNumber}`;
    console.log(phoneNumber)
    return phoneNumber;
  };

  return (
    <>
    <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
      <form className={classNames(classes.form)} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          className={classNames(classes.input)}
          value={email}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classNames(classes.button)}
        >
          Submit
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
        //   onClose={handleCloseSnackbar}&
          severity="success"
        >
          Your unique phone number is {phoneNumber}
        </MuiAlert>
      </Snackbar>
      </Layout>
    </>
  );
}


