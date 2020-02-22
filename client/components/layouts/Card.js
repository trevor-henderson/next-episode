import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  background-color: aqua;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const StyledDescription = styled.p`
  color: white;
`;

const Card = ({ title, description }) => (
  <StyledCard>
    <Title isMain={false} text={title} />
    <StyledDescription>{description}</StyledDescription>
  </StyledCard>
);

export default Card;
