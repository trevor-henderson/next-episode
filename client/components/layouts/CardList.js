import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Title from "./Title";

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = ({articleArray}) => {
    return (
        <>
            <Title isMain={true} text='List of Articles'/>
            <StyledCardList>
                {articleArray.map(article => (
                    <Card title={article.title} description={article.description}/>
                ))}
            </StyledCardList>
        </>
    );
};

export default CardList;