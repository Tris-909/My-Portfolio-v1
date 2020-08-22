import React from 'react';
import styled from 'styled-components';

import Navbar from './Components/Navbar/Navbar';

const Background = styled.div`
  height: 2500px;
  background-color: #141414;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: -2em;
  font-family: 'Open Sans Condensed', sans-serif;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;
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
`;

const SmallerText = styled(Text)`
  font-size: 4em;
`;

const MainText = styled(Text)`
  font-size: 7em;
  letter-spacing: 5px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
`;

function App() {
  return (
  <Background>
    <Navbar /> 
    <TextContainer>
        <FlexContainer>
          <MainText>Hello, I'm Tri Tran</MainText> 
          <SmallerText>Front End Developer</SmallerText> 
          <IconContainer>
            <i className="fab fa-linkedin" style={{color: 'white', fontSize: '2.5rem', cursor: 'pointer'}}></i>
            <i className="fab fa-github" style={{color: 'white', fontSize: '2.5rem', cursor: 'pointer'}}></i>
          </IconContainer>
        </FlexContainer>
    </TextContainer>
  </Background>
  );
}

export default App;
