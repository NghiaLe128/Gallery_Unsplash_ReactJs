import React from 'react';
import { Header, H1, Input, Button, ViewButton, ButtonContainer, Description } from '../../styles/Heading.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';

export const Heading = ({ setViewType }) => {
  return (
    <Header>
      <H1>ImageInsight</H1>
      <Description>The internet’s source of freely usable images. Powered by creators everywhere.</Description>
      <form>
        <Input type="text" placeholder="Search photos" />
        <Button>Search</Button>
      </form>
      <ButtonContainer>
        <ViewButton onClick={() => setViewType('grid')} title="Grid View">
          <FontAwesomeIcon icon={faTh} />
        </ViewButton>
        <ViewButton onClick={() => setViewType('list')} title="List View">
          <FontAwesomeIcon icon={faList} />
        </ViewButton>
      </ButtonContainer>
    </Header>
  );
};
