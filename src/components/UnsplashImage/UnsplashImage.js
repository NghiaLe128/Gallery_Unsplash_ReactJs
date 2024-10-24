import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Img, AuthorName, ImageWrapper, Thumbnail } from '../../styles/UnsplashImage.styles';

export const UnsplashImage = ({ url, author, thumbnail, image }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleImageClick = () => {
    navigate('/photo-detail', { state: { image } }); // Navigate to detail page with image data
  };

  return (
    <ImageWrapper onClick={handleImageClick}> {/* Add onClick to the ImageWrapper */}
      <Img src={url} alt={author} />
      <AuthorName>
        <Thumbnail src={thumbnail} alt={`${author}'s thumbnail`} />
        Photo by {author}
      </AuthorName>
    </ImageWrapper>
  );
};
