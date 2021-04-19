import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Title from "./Title";
import UploadForm from "./UploadForm";
import Modal from "./Modal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
function HomePage() {
  const [selectedImage, setselectedImage] = useState(null);
  const [user] = useAuthState(auth);
  return (
    <div className="HomePage">
      <Title />
      {user && <UploadForm />}
      <ImageGrid setselectedImage={setselectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setselectedImage={setselectedImage}
        />
      )}
    </div>
  );
}

export default HomePage;
