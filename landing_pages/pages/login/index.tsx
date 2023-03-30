import { useState } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDB, popUP, googleAuthProvider,signInWithEmail, facebookAuthProvider } from "../../utils/firebase";
import { makeStyles } from "@material-ui/core/styles";

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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const classes = useStyles();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = googleAuthProvider
      const data = await popUP(firebaseAuth, provider);
      console.log('User', data)
      router.push("/dashboards");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const provider = facebookAuthProvider
      const data = await popUP(firebaseAuth, provider);
      console.log('User', data)
      router.push("/dashboards");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      signInWithEmail(email, password)
      router.push("/dashboards");
    } catch (error) {
      console.error(error);
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
      <Typography variant="h5" align="center" gutterBottom>
        Sign in
      </Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
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
      <FormControlLabel
        control={<Checkbox onChange={handleRememberMeChange} value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Sign In"}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" onClick={() => router.push('/signup')} variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        or sign in with
      </Typography>
      <Box mt={1} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleSignIn}
          style={{ backgroundColor: "#DB4437", marginRight: "16px" }}
        >
          Google
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFacebookSignIn}
          style={{ backgroundColor: "#4267B2", marginRight: "16px" }}
        >
          Facebook
        </Button>
      </Box>
    </Box>
  </div>
  )
}
