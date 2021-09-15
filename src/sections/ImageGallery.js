import React, { useState, useEffect } from 'react';
import ImageCard from '../components/ImageCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/ImageGallery.css';

const apiKey = process.env.REACT_APP_NASA_KEY;

const ImageGallery = ({ startDate }) => {
  const [photoData, setPhotoData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNASAImages = async () => {
    setLoading(true);

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?start_date=${startDate}&api_key=${apiKey}`
    );

    const data = await response.json();

    setLoading(false);
    setPhotoData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchNASAImages();
  }, [startDate]);

  //incase the API doesn't return any response
  if (!photoData) return <div />;

  if (loading) {
    return (
      <div className="loadingIndicator">
        <CircularProgress color="inherit" />
      </div>
    );
  } else {
    return (
      <section className="imageGalleryContainer">
        <div className="imagesContainer">
          {photoData.map((image) => {
            return <ImageCard image={image} />;
          })}
        </div>
      </section>
    );
  }
};

export default ImageGallery;
