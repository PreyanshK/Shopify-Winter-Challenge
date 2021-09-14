import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import '../styles/ImageCard.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const ImageCard = ({ image }) => {
  const [heartColour, setheartColour] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleLikeButton = () => {
    setIsLiked(!isLiked);
  };

  const handleLikeButton = () => {
    if (isLiked) {
      return <FavoriteIcon color="secondary" />;
    } else {
      return <FavoriteBorderIcon />;
    }
  };

  const handleShareClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
        <IconButton
          target="_blank"
          variant="outlined"
          onClick={() => {
            toggleLikeButton();
          }}
        >
          {handleLikeButton()}
        </IconButton>

        <CopyToClipboard text={image.url}>
          <IconButton
            target="_blank"
            variant="outlined"
            onClick={handleShareClick}
          >
            <ShareIcon />
          </IconButton>
        </CopyToClipboard>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Copied URL to Clipboard"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
};

export default ImageCard;
