import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../styles/globalStyled";

import AppLogo from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <img src={AppLogo} alt="logo" />
          </Logo>
          <NavItems>
            <span></span>
            <span></span>
          </NavItems>
        </Flex>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  position: absolute;
  width: 100%;
  top: 72px;
`;
const Logo = styled.div`
  img {
    width: 250px;
    height: 100%;
  }
`;
const NavItems = styled.div`
  display: block;
  span {
    display: block;
    background-color: #121212;
    width: 32px;
    height: 6px;
    margin-top: 5px;
  }
`;
