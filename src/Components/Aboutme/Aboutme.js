import React from 'react'
import styled from 'styled-components';
import Fade  from 'react-reveal/Fade';

const AboutMeContainer = styled.div`
    width: 90%;
    border-radius: 15px;
    margin: 7% 5% 5% 5%;
    z-index: 1;
    position: relative;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    grid-template-areas: "White Black";

    @media (max-width: 1330px) {
        margin: 7% 5% 5% 5%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "White" 
                             "Black";
    }
`;

const WhiteBackground = styled.div`
    grid-area: White;
    background-color: #f7faff;
`;

const TextArea = styled.div`
    width: 80%;
    height: 80%;
    margin-top: 3%;
    margin-left: 5%;
    margin-bottom: 5%;

    @media (max-width: 1330px) {
        height: 100%;
    }
`;

const BlackBackground = styled.div`
    grid-area: Black;
    background-color: #30302e;

    diplay: flex;
    flex-direction: column;

    @media (max-width: 1330px) {
        height: 100%;
    }
`;

const BlackText = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    color: black;
    font-size: 32px;
    margin-bottom: 20px;

    @media (max-width: 1340px) {
        font-size: 37px;
    }

    @media (max-width: 450px) {
        font-size: 33px;
    }

    @media (max-width: 400px) {
        font-size: 31px;
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    @media (max-width: 650px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
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
    font-size: 26px;

    @media (max-width: 380px) {
        font-size: 24px;
    }
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
        <Fade left>  
        <AboutMeContainer id="Aboutme">
            <WhiteBackground>
                <TextArea>
                    <Title >About me :</Title>
                    <BlackText><i className="fas fa-angle-right"></i> Hi Again, my full name is Tri Minh Tran and I love technologies and coffee.</BlackText>
                    <BlackText><i className="fas fa-angle-right"></i> I have experience of building websites or web-app using HTML, SCSS, React, ...</BlackText>
                    <BlackText><i className="fas fa-angle-right"></i> I am always open to new opportunities to improve myself as a developer.</BlackText>
                </TextArea>
            </WhiteBackground>
            <BlackBackground>
                <TextArea>
                    <Title style={{ color: 'white' }}>My Skills :</Title>
                    <SubTitle> Front-End : </SubTitle>
                    <SkillsContainer>
                        <WhiteText>_ HTML5 </WhiteText>
                        <WhiteText>_ CSS3, SCSS, SASS</WhiteText>
                        <WhiteText>_ JavaScript (ES6+)</WhiteText>
                        <WhiteText>_ React, React-Router, Redux</WhiteText>
                        <WhiteText>_ AJAX, RESTful APIs</WhiteText>
                        <WhiteText>_ Git/ Github</WhiteText>
                        <WhiteText>_ Responsive Layout</WhiteText>
                    </SkillsContainer>
                    <WhiteText>_ Experience with some CSS frameworks : Styled-Components, Material-UI, React-Boostrap,...</WhiteText>

                    <SubTitle> Back-End : </SubTitle>
                        <WhiteText>_ SQL Database : MySQL Queries </WhiteText>
                        <WhiteText>_ Server Side Language : </WhiteText>
                        <WhiteText> + PHP (MAMP) </WhiteText>
                        <WhiteText> + NodeJS (Express + Mongoose) </WhiteText>
                </TextArea>
            </BlackBackground>
        </AboutMeContainer>
        </Fade>
    );
}
