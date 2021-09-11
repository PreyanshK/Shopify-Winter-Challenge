import React from 'react';
import ImageCard from '../components/ImageCard';
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  return (
    <section className="imageGalleryContainer">
      <h1 className="galleryHeading">Explore NASA's Images</h1>

      <div className="imagesContainer">
        {/* {projectsData.map((project) => {
              return <ProjectCard project={project} />;
            })} */}
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </section>
  );
};

export default ImageGallery;
