import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
import { auth } from "../firebase/config";
import "../index.css";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://kishans.in/">
        Kishan Kumar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, seterror] = useState(null);
  const classes = useStyles();
  const startSignIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      seterror(null);
    } catch (err) {
      seterror(err.message);
    }
  };
  const signInWithGitHub = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log(user);

        // ...
      })
      .catch((err) => {
        seterror(err);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={startSignIn}
          >
            Sign In
          </Button>
          <Button
            style={{ color: "#23282C" }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={signInWithGitHub}
          >
            Sign In With GitHub
          </Button>
          <button
            onClick={signInWithGitHub}
            type="submit"
            style={{ color: "#23282C" }}
          >
            Sign In With GitHub
          </button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
