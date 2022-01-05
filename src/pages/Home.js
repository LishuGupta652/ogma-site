import React from "react";
import styled from "styled-components";
import Attraction from "../components/Attraction";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <HomeStyled>
        <Header />
        <Banner />
        <Attraction />
      </HomeStyled>
    </>
  );
};

export default Home;

const HomeStyled = styled.div`
  position: relative;
`;
