import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Title, {StyledTitle} from "./Title";

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const StyledListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const CardList = ({articleArray}) => {
    return (
        <>
            <StyledListTitle>
                <Title isMain={true} text='List of Articles' />
            </StyledListTitle>
            <StyledCardList>
                {articleArray.map(article => (
                    <Card title={article.title} description={article.description}/>
                ))}
            </StyledCardList>
        </>
    );
};

export default CardList;