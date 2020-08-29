import React from 'react'
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';

const FadeInLeftAnimation = keyframes`${fadeInLeft}`;
const FadeInRightAnimation = keyframes`${fadeInRight}`;

const TextContainer = styled.div`
  width: 100%;
  height: 110vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media (max-width: 750px) {
    position: relative;
    height: 100vh;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 750px) {
    position: relative;
    top: 5%;
    display: flex;
    align-items: flex-start;
  }
`;

const Text = styled.div`
  color: white;
`;

const SmallerText = styled(Text)`
  font-size: 4em;
  animation: 1.25s ${FadeInRightAnimation} ease-out;

  @media (max-width: 750px) {
    font-size: 9vw;
    margin-left: 10%;
  }
`;

const MainText = styled(Text)`
  font-size: 7em;
  letter-spacing: 5px;
  animation: 1.25s ${FadeInLeftAnimation} ease-out;

  @media (max-width: 750px) {
    font-size: 17vw;
    letter-spacing: 5px;
    margin-left: 10%;

    & span {
      display: block;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  a {
    margin-right: 25%;
  }

  @media (max-width: 750px) {
    margin-left: 10%;

  }
`;

export default function Home() {
    return (
    <TextContainer id="Home">
        <FlexContainer>
          <MainText>Hello,<span>I'm Tri Tran</span></MainText> 
          <SmallerText>Front End Developer</SmallerText> 
          <IconContainer>
            <a href="https://www.linkedin.com/in/tr%C3%AD-tr%E1%BA%A7n-6861331a4/" target="_blank" rel="noopener noreferrer">
              <i  className="fab fa-linkedin" style={{color: 'white', fontSize: '2.5rem', cursor: 'pointer'}}></i>
            </a>
            <a href="https://github.com/Tris-909" target="_blank" rel="noopener noreferrer">
              <i  className="fab fa-github" style={{color: 'white', fontSize: '2.5rem', cursor: 'pointer'}}></i>
            </a>
          </IconContainer>
        </FlexContainer>
    </TextContainer>
    )
}
