import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color: ${props => (props.isMain ? "black": "red")};
`;

const Title = ({text, isMain}) => {
    return (
    <StyledTitle isMain>{text}</StyledTitle>
    );
};

export default Title;