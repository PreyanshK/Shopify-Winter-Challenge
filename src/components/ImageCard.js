import React from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Space from '../images/space.jpg';
import '../styles/ImageCard.css';

const ImageCard = (props) => {
  return (
    <div className="cardContainer">
      <img className="nasaImage" src={Space} />

      <div className="infoContainer">
        <h1 className="title">Image Name</h1>
        <h1 className="date">01-01-2021</h1>
        <p className="description">This is a description about the image</p>
      </div>

      <div className="buttonContainer">
        <IconButton target="_blank" variant="outlined">
          <FavoriteIcon />
        </IconButton>

        <IconButton target="_blank" variant="outlined">
          <ShareIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageCard;
