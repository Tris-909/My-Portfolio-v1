import React from 'react'
import styled from 'styled-components';

const AboutMeContainer = styled.div`
    width: 80%;
    height: 600px;
    border-radius: 15px;
    margin: 0% 10% 5% 10%;
    z-index: 1;
    position: relative;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    grid-template-areas: "White Black";
`;

const WhiteBackground = styled.div`
    grid-area: White;
    background-color: #f7faff;
`;

const TextArea = styled.div`
    width: 80%;
    height: 80%;
    position: relative;
    top: 5%;
    left: 10%;
`;

const BlackBackground = styled.div`
    grid-area: Black;
    background-color: #30302e;

    diplay: flex;
    flex-direction: column;
`;

const BlackText = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    color: black;
    font-size: 32px;
    margin-bottom: 20px;
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`;

const SubTitle = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    color: white;
    font-size: 38px;
    text-decoration: underline;
    font-weight: 600;
`;

const WhiteText = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    color: white;
    font-size: 28px;
`; 

const Title = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    width: 100%;
    text-align: center;
    font-size: 56px;
    margin-bottom: 10px;
`;

export default function Aboutme() {
    return (
        <AboutMeContainer id="Aboutme">
            <WhiteBackground>
                <TextArea>
                    <Title>About me :</Title>
                    <BlackText><i className="fas fa-angle-right"></i> Hi Again, My full name Tri Minh Tran and I love technologies.</BlackText>
                    <BlackText><i className="fas fa-angle-right"></i> I am a Front End Developer and I have experience of building websites or web-app using HTML, SCSS, React, ...</BlackText>
                    <BlackText><i className="fas fa-angle-right"></i> I am always open to new opportunities to improve myself as a developer.</BlackText>
                </TextArea>
            </WhiteBackground>
            <BlackBackground>
                <TextArea style={{width: '90%'}}>
                    <Title style={{ color: 'white' }}>My Skills :</Title>
                    <SubTitle> Front-End : </SubTitle>
                    <SkillsContainer>
                        <WhiteText>_ HTML</WhiteText>
                        <WhiteText>_ CSS, SCSS, SASS</WhiteText>
                        <WhiteText>_ JS (ES6+)</WhiteText>
                        <WhiteText>_ React, React-Router, Redux</WhiteText>
                        <WhiteText>_ AJAX, RESTful API</WhiteText>
                        <WhiteText>_ Git/ Github</WhiteText>
                        <WhiteText>_ Responsive Layout</WhiteText>
                        <WhiteText></WhiteText>
                    </SkillsContainer>
                    <WhiteText>_ Experience with some CSS framework : Styled-Components, Material-UI,...</WhiteText>

                    <SubTitle> Basic Back-End : </SubTitle>
                        <WhiteText>_ No SQL Database : Firebase</WhiteText>
                        <WhiteText>_ SQL Database : Postgres</WhiteText>
                        <WhiteText>_ Query Language : MySQL</WhiteText>
                </TextArea>
            </BlackBackground>
        </AboutMeContainer>
    )
}
