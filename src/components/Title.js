import React from "react";
import { Grid, Button, Avatar } from "@material-ui/core";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginButton from "./LoginButton";

const Title = () => {
  const [user] = useAuthState(auth);

  const signOut = async () => {
    await auth.signOut();
  };
  return (
    <div className="title">
      <Grid container justify="space-between" alignItems="center">
        <Grid>
          <h1>GitGram</h1>
        </Grid>
        <Grid>
          {user ? <Button onClick={signOut}>LogOut</Button> : <LoginButton />}
        </Grid>
      </Grid>
      {user && <Avatar alt="Remy Sharp" src={user.photoURL} />}
      <h2>Gist for Pics</h2>
      <p>Talk is cheap. Show me the code</p>
    </div>
  );
};

export default Title;
