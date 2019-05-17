import '../css/ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} /> // dung quen phai co id nua dit me
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
