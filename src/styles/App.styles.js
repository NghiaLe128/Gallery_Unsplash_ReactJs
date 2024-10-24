import styled from 'styled-components';

export const WrapperImages = styled(({ viewType, ...rest }) => <section {...rest} />)`
  max-width: 80rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: ${({ viewType }) => viewType === 'grid' ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr'};
  grid-auto-rows: ${({ viewType }) => viewType === 'grid' ? '350px' : 'auto'};
  padding: 0 1.5em;

  @media (max-width: 768px) {
    grid-template-columns: ${({ viewType }) => viewType === 'grid' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr'};
  }
`;
