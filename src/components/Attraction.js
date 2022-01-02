import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../styles/globalStyled";

const Attraction = () => {
  return (
    <AttractionStyled>
      <Container>
        <CardContainer>
          <Card>
            <CardTitle>Creativity</CardTitle>
            <CardText>
              The Comfort Zone is the great enemy to Creativity.So Explore more
              and let your creativity flow.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Motivation</CardTitle>
            <CardText>
              Do you panic when you think about getting in front of a bunch of
              people? Whether it's a speech at a professional meeting, a wedding
              toast, or a sports competition. If yes then be part of our club
              and overcome this fright.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Time Management</CardTitle>
            <CardText>
              Do you want to manage your time to work efficiently and
              effectively? If yes then attend workshops of our club and use your
              time wisely.
            </CardText>
          </Card>
        </CardContainer>
      </Container>
    </AttractionStyled>
  );
};

export default Attraction;

const AttractionStyled = styled.div`
  position: relative;

  background-color: rgba(50, 80, 100, 0.1);
  padding: 100px 0;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 50px;
`;
const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  /* From https://css.glass */
  background: rgba(243, 232, 232, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border: 1px solid rgba(243, 232, 232, 0.3);
`;
const CardTitle = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 900;
  color: #121212;
  margin-bottom: 10px;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const CardText = styled.div`
  font-size: 1rem;
  color: #121212;
  padding: 10px 20px;
`;
