import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchPhotoById } from '../../services/unsplashApi';
import { WrapperDetail, ImageContainer, InfoContainer, BackIcon } from '../../styles/PhotoDetail.styles';
import { FaArrowLeft } from 'react-icons/fa';

const PhotoDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(location.state?.image || null);

  useEffect(() => {
    const loadPhoto = async () => {
      if (!photo) {
        try {
          const fetchedPhoto = await fetchPhotoById(id);
          setPhoto(fetchedPhoto);
        } catch (error) {
          console.error("Error loading photo:", error);
        }
      }
    };
    loadPhoto();
  }, [id, photo]);

  if (!photo) {
    return <p>Loading photo...</p>;
  }

  const photoDescription = photo.description || photo.alt_description || `A beautiful image captured by ${photo.user.name}`;
  const photoTitle = photo.title || `Photo by ${photo.user.name} on Unsplash`;

  return (
    <WrapperDetail>
      <ImageContainer>
        <BackIcon onClick={() => navigate(-1)}>
          <FaArrowLeft size={24} color="#007bff" />
        </BackIcon>
        <img src={photo.urls.full} alt={photoDescription} />
      </ImageContainer>
      <InfoContainer>
        <h1>{photoTitle}</h1>
        <h2>By {photo.user.name}</h2>
        <p>{photoDescription}</p>
      </InfoContainer>
    </WrapperDetail>
  );
};

export default PhotoDetail;
