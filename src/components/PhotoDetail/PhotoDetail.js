import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { WrapperDetail, ImageContainer, InfoContainer, BackIcon } from '../../styles/PhotoDetail.styles';
import { FaArrowLeft } from 'react-icons/fa'; 

const PhotoDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate to go back
  const { image } = location.state || {};

  if (!image) {
    return <p>Photo not found.</p>;
  }

  const photoDescription = image.description || image.alt_description || `A beautiful image captured by ${image.user.name}`;
  const photoTitle = image.title || `Photo by ${image.user.name} on Unsplash`;

  return (
    <WrapperDetail>
      <ImageContainer>
        <BackIcon onClick={() => navigate(-1)}>
          <FaArrowLeft size={24} color="#007bff" /> {/* Use the back icon */}
        </BackIcon>
        <img src={image.urls.full} alt={photoDescription} />
      </ImageContainer>
      <InfoContainer>
        <h1>{photoTitle}</h1>
        <h2>By {image.user.name}</h2>
        <p>{photoDescription}</p>
      </InfoContainer>
    </WrapperDetail>
  );
};

export default PhotoDetail;
