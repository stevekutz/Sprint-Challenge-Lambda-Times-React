//import React, { Component } from 'react';
import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import CarouselPlayer from './components/Carousel/CarouselPlayer';
import Carousel from './components/Carousel/Carousel';
import Authenticate from './components/Authenticate';
import styled from 'styled-components';

const App = () => {

  const MainApp = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #f1f1f1;
        color: #333;
        font-family: 'PT Sans', sans-serif;
   
  `;


  return (
    <MainApp>
      <TopBar />
      <Header />
      <Carousel />
      <Content />
    </MainApp>
  );
};

export default Authenticate(App);
