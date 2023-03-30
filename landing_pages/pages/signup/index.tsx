import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, createAccountWithEmail } from "../../utils/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.main}, #FFFDE4)`,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    animation: "$backgroundAnimation 20s ease infinite",
  },
  "@keyframes backgroundAnimation": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  avatar: {
    margin: "1em",
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "60%",
    marginTop: theme.spacing(1),
    animation: "$formAnimation 1s",
  },
  "@keyframes formAnimation": {
    "0%": {
      opacity: 0,
      transform: "translateY(10px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#005aa1",
    },
  },
}));

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const router = useRouter();
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await createAccountWithEmail( email, password);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.root}>
      
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        CareLink
      </Typography>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
          disabled={isLoading}
          >
          {isLoading ? "Loading..." : "Sign Up"}
          </Button>
          <Grid container justify="flex-end">
          <Grid item>
          <Link href="#" onClick={() => router.push('/login')} variant="body2">
            Already have an account? Log in
          </Link>
          </Grid>
          </Grid>
          </form>
          </div>
          );
          }
