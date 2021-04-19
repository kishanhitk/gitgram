// import React from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import { motion } from "framer-motion";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    maxHeight: "300px",
    maxWidth: "300px",
    height: "80%",
    width: "80%",
    objectFit: "cover",
    objectPosition: "50%",
  },
});
export default function Modal({ selectedImage, setselectedImage }) {
  const classes = useStyles();
  const date = new Date(selectedImage.createdAt.toDate());
  const closeModal = (e) => {
    if (e.target.classList.contains("backdrop")) setselectedImage(null);
  };
  return (
    <motion.div
      className="backdrop"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className={(classes.root, "modalcard")} align="center">
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={selectedImage.url}
            title={selectedImage.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {date.toDateString()}
            </Typography>
            <Avatar alt="dp" src={selectedImage.uploaderPhotoURL}></Avatar>
            <Typography variant="body2" color="textSecondary" component="p">
              {selectedImage.uploaderName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
}
