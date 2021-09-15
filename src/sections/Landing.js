import React, { useState } from 'react';
import NASA from '../images/NASA_logo.png';
import ImageGallery from './ImageGallery';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import '../styles/Landing.css';

const Landing = () => {
  const [showImages, setShowImages] = useState(false);
  const [tempDate, setTempDate] = useState(new Date().setHours(0, 0, 0, 0));
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = React.useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const validateDate = (inputDate) => {
    let date_regex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

    const compareDate = new Date(inputDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const currentDate =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    if (inputDate == new Date().setHours(0, 0, 0, 0) || inputDate == '') {
      setStartDate(currentDate);
      setShowImages(true);
    } else if (date_regex.test(inputDate) && compareDate <= today) {
      setStartDate(inputDate);
      setShowImages(true);
    } else {
      setOpen(true);
      setShowImages(false);
    }

    return;
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <section className="homeContainer" id="home">
      <div className="titleWrapper">
        <img className="nasaLogo" src={NASA} />
        <div className="homeText">
          <h2 className="headingOne">Preyansh's NASA Image Gallery</h2>
          <h2 className="headingTwo">
            Submission for Shopify's Winter 2022 Intern Challenge{' '}
            {
              <IconButton
                size="large"
                href={'https://github.com/PreyanshK/Shopify-Winter-Challenge'}
              >
                <GitHubIcon />
              </IconButton>
            }
          </h2>
        </div>
      </div>

      <h1 className="galleryHeading">Explore the Universe!</h1>
      <h3 className="gallerySubHeading">
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </h3>

      <div className="inputContainer">
        <input
          className="dateInputBox"
          type="text"
          placeholder={'Enter a start date: YYYY-MM-DD'}
          onChange={(e) => setTempDate(e.target.value)}
        />
        <button
          className="discoverButton"
          onClick={() => validateDate(tempDate)}
        >
          Discover
        </button>
      </div>

      {showImages && <ImageGallery startDate={startDate} />}

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please enter a validate start date!
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Landing;
