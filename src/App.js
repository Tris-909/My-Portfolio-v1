import React from 'react';
import styled from 'styled-components';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/ProjectSection/ProjectSection';
import Aboutme from './Components/Aboutme/Aboutme';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

const Background = styled.div`
  background-color: #141414;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: -2em;
  font-family: 'Open Sans Condensed', sans-serif;

  @media (max-width: 870px) {
    margin-top: 0px;
  }
`;

function App() {
  return (
  <Background>
    <Navbar /> 
    <Home />
    <Projects /> 
    <Aboutme/>
    <ContactMe /> 
    <Footer />
  </Background>
  );
}

export default App;
