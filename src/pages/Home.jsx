import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return <HomeStyled>
    <Header />
    <Banner />
  </HomeStyled>
};

export default Home;

const HomeStyled = styled.div`
  position: relative;
`
