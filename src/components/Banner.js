import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../styles/globalStyled";

const Banner = () => {
  return (
    <BannerStyled>
      <Container>
        <Wrapper>
          <Left
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 72, opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
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
        </Wrapper>
      </Container>
    </BannerStyled>
  );
};

export default Banner;

const BannerStyled = styled.div`
  width: 100vw;
  height: calc(100vh - 72px);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Left = styled(motion.div)`
  h3 {
    max-width: 1100px;
    font-size: 1.5rem;
  }
`;
const Right = styled.div``;
