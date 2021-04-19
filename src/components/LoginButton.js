import React, { useState } from "react";
import { auth, firebase, firestore } from "../firebase/config";
import { Button } from "@material-ui/core";

export default function LoginButton() {
  const [error, seterror] = useState(null);

  const signInWithGitHub = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var user = result.user;
        console.log(user);
        var token = credential.accessToken;
        console.log(token);
        
        firestore.collection("userGitGram").doc(user.uid).set({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          uid: user.uid,
        });

        // The signed-in user info.
        seterror(null);

        // ...
      })
      .catch((err) => {
        seterror(err);

        console.log(error);
      });
  };
  return <Button onClick={signInWithGitHub}>Login to Post</Button>;
}
