import React from 'react';
import '../styles/Landing.css';
import NASA from '../images/NASA_logo.png';

const Landing = () => {
  return (
    <section className="homeContainer" id="home">
      <div className="homeWrapper">
        <img className="nasaLogo" src={NASA} />
        <div className="homeText">
          <h2 className="headingOne">Preyansh's NASA Image Gallery</h2>
          <h2 className="headingTwo">
            Submission for Shopify's Winter 2022 Intern Challenge
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Landing;
