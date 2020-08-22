import React from 'react'
import styled from 'styled-components';

const TextContainer = styled.div`
  width: 100%;
  height: 110vh;
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

export default function Home() {
    return (
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
    )
}
