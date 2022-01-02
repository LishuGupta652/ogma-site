import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../styles/globalStyled";

const Banner = () => {
  return (
    <BannerStyled>
      <Container>
        <Flex>
          <Left>
            <h3>
              The Ogma is a Personality Development Club. The word Ogma is
              driven from the Greek goddess who blessed human race with blessing
              of communication. "THE OGMA" aims at enhancing the soft skills of
              the students. It conducts workshop and events for the young
              aspirants to furnish their communication skills and get over their
              stage fear. The workshop includes different fun activities to make
              them realize the importance of concepts like team work.
            </h3>
          </Left>
          <Right>
            <h3>
              The Ogma is a Personality Development Club. The word Ogma is
              driven from the Greek goddess who blessed human race with blessing
              of communication. "THE OGMA" aims at enhancing the soft skills of
              the students. It conducts workshop and events for the young
              aspirants to furnish their communication skills and get over their
              stage fear. The workshop includes different fun activities to make
              them realize the importance of concepts like team work.
            </h3>
          </Right>
        </Flex>
      </Container>
    </BannerStyled>
  );
};

export default Banner;

const BannerStyled = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Left = styled.div`
  h3 {
    width: 500px;
    font-size: 1.5rem;
  }
`;
const Right = styled.div``;
