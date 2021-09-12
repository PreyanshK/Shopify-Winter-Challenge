import React, { useState, useEffect } from 'react';
import ImageCard from '../components/ImageCard';
import '../styles/ImageGallery.css';

const apiKey = process.env.REACT_APP_NASA_KEY;

const ImageGallery = () => {
  const [photoData, setPhotoData] = useState(null);

  const fetchNASAImages = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?start_date=2021-09-02&api_key=${apiKey}`
    );

    const data = await response.json();

    setPhotoData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchNASAImages();
  }, []);

  //incase the API doesn't return any response display an error
  if (!photoData) return <div />;

  return (
    <section className="imageGalleryContainer">
      <h1 className="galleryHeading">Explore the Universe!</h1>

      <div className="imagesContainer">
        {photoData.map((image) => {
          return <ImageCard image={image} />;
        })}
      </div>
    </section>
  );
};

export default ImageGallery;
