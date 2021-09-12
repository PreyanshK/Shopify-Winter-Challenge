import React from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import '../styles/ImageCard.css';

const ImageCard = ({ image }) => {
  return (
    <div className="cardContainer">
      {image.media_type === 'image' ? (
        <img className="nasaImage" src={image.url} />
      ) : (
        <iframe
          title="space-video"
          src={image.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          className="nasaImage"
        />
      )}
      <div className="infoContainer">
        <h1 className="title">{image.title}</h1>
        <h1 className="date">{image.date}</h1>
        <p className="description">{image.explanation}</p>
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
