import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, H1, ViewButton, ButtonContainer, Description } from '../../styles/Heading.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';

export const Heading = () => {
  const navigate = useNavigate();

  const handleViewChange = (viewType) => {
    if (viewType === 'grid') {
      navigate('/');
    } else if (viewType === 'list') {
      navigate('/photos');
    }
  };

  return (
    <Header>
      <H1>ImageInsight</H1>
      <Description>
        Discover a stunning collection of photos with our gallery, powered by the Unsplash API and ReactJS. Explore and find the perfect images for your needs.
      </Description>

      <ButtonContainer>
        <ViewButton onClick={() => handleViewChange('grid')} title="Grid View">
          <FontAwesomeIcon icon={faTh} />
        </ViewButton>
        <ViewButton onClick={() => handleViewChange('list')} title="List View">
          <FontAwesomeIcon icon={faList} />
        </ViewButton>
      </ButtonContainer>
    </Header>
  );
};
