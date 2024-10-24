import React from 'react';
import { Img, AuthorName, ImageWrapper } from '../../styles/UnsplashImage.styles';

export const UnsplashImage = ({ url, author }) => {
  return (
    <ImageWrapper>
      <Img src={url} alt={author} />
      <AuthorName>Photo by {author}</AuthorName>
    </ImageWrapper>
  );
};
