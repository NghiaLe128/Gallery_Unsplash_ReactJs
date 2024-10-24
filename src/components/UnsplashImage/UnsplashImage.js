import React from 'react';
import { Img, AuthorName, ImageWrapper, Thumbnail } from '../../styles/UnsplashImage.styles';

export const UnsplashImage = ({ url, author, thumbnail }) => {
  return (
    <ImageWrapper>
      <Img src={url} alt={author} />
      <AuthorName>
        <Thumbnail src={thumbnail} alt={`${author}'s thumbnail`} />
        Photo by {author}
      </AuthorName>
    </ImageWrapper>
  );
};
