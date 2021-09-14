import React, { useState } from 'react';
import NASA from '../images/NASA_logo.png';
import ImageGallery from './ImageGallery';
import '../styles/Landing.css';

const Landing = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <section className="homeContainer" id="home">
      <div className="titleWrapper">
        <img className="nasaLogo" src={NASA} />
        <div className="homeText">
          <h2 className="headingOne">Preyansh's NASA Image Gallery</h2>
          <h2 className="headingTwo">
            Submission for Shopify's Winter 2022 Intern Challenge
          </h2>
        </div>
      </div>

      <h1 className="galleryHeading">Explore the Universe!</h1>
      <h3 className="gallerySubHeading">
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </h3>
      <button className="discoverButton" onClick={() => setShowImages(true)}>
        Discover
      </button>

      {showImages && <ImageGallery />}
    </section>
  );
};

export default Landing;
