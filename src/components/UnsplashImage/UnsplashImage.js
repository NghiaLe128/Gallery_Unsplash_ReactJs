import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Img, AuthorName, ImageWrapper, Thumbnail } from '../../styles/UnsplashImage.styles';

export const UnsplashImage = ({ url, author, thumbnail, image }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/photos/${image.id}`, { state: { image } }); 
  };

  return (
    <ImageWrapper onClick={handleImageClick}>
      <Img src={url} alt={author} />
      <AuthorName>
        <Thumbnail src={thumbnail} alt={`${author}'s thumbnail`} />
        Photo by {author}
      </AuthorName>
    </ImageWrapper>
  );
};
