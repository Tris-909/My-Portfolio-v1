import React from 'react'
import styled from 'styled-components';

import Button from '../Button/Button';
import ProjectImage from '../Project/ProjectImage/ProjectImage';

import project1 from './SocialApp.png';

const Container = styled.div`
    background-color: #141414;
    height: 1500px;
    width: 100%;
`;

const IntroText = styled.div`
    color: white;
    border-radius: 10px;
    font-size: 3.75em;
    margin-bottom: 55px;
    margin-left: 10%;
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 35%;
    position: relative;
    margin: 0% 10% 5% 10%;
`;

const ProjectCard = styled.div`
    background-color: #30302e;
    height: 100%;
    width: 65%;
    border-radius: 15px;
`;

const ProjectTextMargin = styled.div`
    margin: 7%;
    width: 60%;
    height: 70%;
    color: white;
`;

const ProjectName = styled.div`
    font-size: 3.5em;
    font-weight: 600;
`;

const ProjectExplain = styled.div`
    font-size: 1.5em;
    margin-top: 1rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 2em;
    margin-top: 1em;
`;

export default function Projects() {
    return (
        <Container>
            <IntroText> My Projects :</IntroText>
            
            <ProjectContainer>
                <ProjectCard>
                    <ProjectTextMargin>
                        <ProjectName>
                            FREII SOCIAL MEDIA APP
                        </ProjectName>
                        <ProjectExplain>
                            _This is a full-stack project clone popular social media app like: facebook, twitter.
                        </ProjectExplain>
                        <ProjectExplain>
                            _This websites is built using React for Front-End and Firebase for both Database and Server-Side. 
                            This websites is designed and built by me to demonstrate my React skills 
                            as well as the ability to work with complicated web-app that intereact with database, Restful API, State Management...
                        </ProjectExplain>
                        <ButtonContainer>
                            <Button link="" content="View Code" />
                            <Button link="" content="Live Demo" />
                        </ButtonContainer>
                    </ProjectTextMargin>
                    <ProjectImage src={project1} width="60%" height="85%" top="4%" left="47%"/>
                </ProjectCard>
            </ProjectContainer>
        </Container>
    )
}
