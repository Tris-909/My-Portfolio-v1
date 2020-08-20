import React from 'react';
import styled from 'styled-components';
import TextLoop from "react-text-loop";

import Aboutme from './Components/ProjectSection/ProjectSection';

const Background = styled.div`
  height: 90vh;
  background-color: #0a0808;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: -2em;
  font-family: 'Open Sans Condensed', sans-serif;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #0a0808;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  color: white;
  font-size: 3.75em;
  display: block;
`;

const SmallerText = styled.div`
  color: white;
  font-size: 2em;
`;

function App() {
  return (
  <Background>
    <TextContainer>
        <FlexContainer>
          <Text>Hello, I am <TextLoop interval={3500} adjustingSpeed={300}>
              <span>Tri Tran</span>
              <span>a Front End Developer</span>
          </TextLoop></Text> 
          <SmallerText>I have passion for web development and technologies</SmallerText>
        </FlexContainer>
    </TextContainer>
    <Aboutme />
  </Background>
  );
}

export default App;
