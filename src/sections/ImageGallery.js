import React, { useState, useEffect } from 'react';
import ImageCard from '../components/ImageCard';
import '../styles/ImageGallery.css';

const apiKey = process.env.REACT_APP_NASA_KEY;

const ImageGallery = ({ startDate }) => {
  const [photoData, setPhotoData] = useState(null);

  const fetchNASAImages = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?start_date=${startDate}&api_key=${apiKey}`
    );

    const data = await response.json();

    setPhotoData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchNASAImages();
  }, [startDate]);

  //incase the API doesn't return any response
  if (!photoData) return <div />;

  return (
    <section className="imageGalleryContainer">
      <div className="imagesContainer">
        {photoData.map((image) => {
          return <ImageCard image={image} />;
        })}
      </div>
    </section>
  );
};

export default ImageGallery;
