import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../styles/globalStyled";

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Flex spaceBetween>
          <div className="left">
            <Logo>
              Made with <span>❤</span> for <span>@Theogma</span>
            </Logo>
          </div>
          <div className="right"></div>
        </Flex>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  background-color: #121212;
  color: #fff;
  padding: 50px 0;
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
  span {
    color: red;
  }
  img {
    width: 250px;
    height: 100%;
  }
`;
