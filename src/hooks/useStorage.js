import { useState, useEffect } from "react";
import { storageBucket, firestore, timestamp, auth } from "../firebase/config";
const useStorage = (file) => {
  const [progress, setprogress] = useState(0);
  const [url, seturl] = useState(null);
  const [error, seterror] = useState(null);
  useEffect(() => {
    //Ref
    const storageRef = storageBucket.ref(file.name);
    const firestoreRef = firestore.collection("images");
    storageRef.put(file).on(
      "state-changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setprogress(percentage);
      },
      (err) => {
        seterror(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const currentUser = auth.currentUser;
        const uploaderUID = currentUser.uid;
        const uploaderName = currentUser.displayName;
        const uploaderPhotoURL = currentUser.photoURL;
        firestoreRef.add({
          url,
          createdAt,
          uploaderUID,
          uploaderName,
          uploaderPhotoURL,
        });
        seturl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};
export default useStorage;
