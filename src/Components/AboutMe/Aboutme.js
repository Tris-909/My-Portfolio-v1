import React from 'react'
import styled from 'styled-components';

import project1 from './SocialApp.png';
import Button from '../Button/Button';

const Container = styled.div`
    background-color: black;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-start;
    justify-content: center;


`;

const AboutMeText = styled.div`
    margin: auto;
    color: white;
    border-radius: 10px;
    font-size: 3.75em;
    margin-bottom: 0px;
`;

const ProjectContainer = styled.div`
    width: 80%;
    height: 55%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "img text"
                         "button button";

    margin: auto;

    border: 6px double #FFFFFF;
    padding: 40px 40px 80px 40px;
    border-radius: 0px 40px 0px 40px;
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden; 
`;

const ProjectExplainContainer = styled.div`
    font-size: 1.5em;
    color: white;
    margin-left: 1em;

    display: flex;
    flex-direction: column;
`;

const Text = styled.p`
    margin: 0px;
    text-align: initial;
`;

const HeaderExplain = styled.p`
    font-weight: 700;
    text-decoration: underline;
    text-align: initial;
    margin: 0px;
`;

const ButtonContainer = styled.div`
    margin-top: 1%;
    grid-area: button;
    
`;

export default function Aboutme() {
    return (
        <Container>
            <AboutMeText> My Projects </AboutMeText>
            <ProjectContainer>
                <ProjectImage>
                    <Image src={project1} alt="project 1" />
                </ProjectImage>
                <ProjectExplainContainer>
                    <HeaderExplain>What I have done :</HeaderExplain>
                    <Text>1/ The app is built using React for the frontEnd and Firebase ( NOSQL ) Database for BackEnd</Text>
                    <Text>2/ Working with Restful API which I built for many funcionalities</Text>
                    <Text>3/ Fully Responsive Web-Application</Text>
                    <Text>4/ State Management with React Redux and many more...</Text>
                    <HeaderExplain>What can the user do ?</HeaderExplain>
                    <Text>1/ Users can create and logIn to their own account</Text>
                    <Text>2/ Users can post a post, like someone post, comment on a post, edit their post, or delete their own post</Text>
                    <Text>3/ Users can update their profile information</Text>
                    <Text>4/ Get Notifications when somone like or comment on their post</Text>
                </ProjectExplainContainer>
                <ButtonContainer>
                    <Button link="https://github.com/Tris-909/SocialMedia-Clone" content="View Code" />
                    <Button link="https://socialapp-2c8b0.firebaseapp.com/login" content="Demo" />
                </ButtonContainer>
            </ProjectContainer>
        </Container>
    )
}
