import React from "react";
import styled from "styled-components";
import { Container, Flex } from "../styles/globalStyled";

import AppLogo from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyled
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 16, opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Container>
        <Flex spaceBetween>
          <Logo>
            THE <span>OGMA</span>
          </Logo>
          <NavItems>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </NavItems>
        </Flex>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled(motion.div)`
  width: 100%;
  z-index: 1;
  margin-top: 30px;
`;
const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  span {
    color: red;
  }
  img {
    width: 250px;
    height: 100%;
  }
`;
const NavItems = styled.div`
  display: block;

  ul {
    display: flex;
    a {
      color: inherit;
      text-decoration: none;
    }
    li {
      list-style: none;
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
  span {
    display: block;
    background-color: #121212;
    width: 32px;
    height: 6px;
    margin-top: 5px;
  }
`;
