import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AuthorName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5em 0.5em;
  text-align: left;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 0.05em;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;

  ${ImageWrapper}:hover & {
    background: rgba(0, 0, 0, 0.85);
  }
`;

export const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  vertical-align: middle;
`;
