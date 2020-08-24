import React from 'react'
import styled from 'styled-components';

import SocialApp from './SocialApp.png';
import FaceRecognition from './FaceRecognition.png';
import HandmadePottery from './HandmadePottery.png';

import Project from '../Project/Project/Project';

const Container = styled.div`
    background-color: #141414;
    height: 2000px;
    width: 100%;
`;

const IntroText = styled.div`
    color: white;
    border-radius: 10px;
    font-size: 3.75em;
    margin-bottom: 55px;
    margin-left: 10%;
`;

export default function Projects() {
    return (
        <Container>
            <IntroText id="Projects"> My Projects :</IntroText>
            
            <Project 
                projectCard_top="0" 
                projectCard_left="0"
                projectText_margin="7%"
                projectName="FREII SOCIAL MEDIA APP" 
                ProjectExplainOne="_This is a full-stack project clone popular social media app like: facebook, twitter." 
                ProjectExplainTwo="_This websites is built using React for Front-End and Firebase for both Database and Server-Side. 
                This websites is designed and built by me to demonstrate my React skills 
                as well as the ability to work with complicated web-app that intereact with database, Restful API, State Management Tool,..." 
                ViewCodeLink="https://github.com/Tris-909/SocialMedia-Clone" 
                LiveDemoLink="https://socialapp-2c8b0.firebaseapp.com/login" 
                ProjectPicture={SocialApp} 
                ProjectPicture_width="60%" 
                ProjectPicture_height="85%" 
                ProjectPicture_top="4%"
                ProjectPicture_left="47%" />

            <Project 
                projectCard_top="0" 
                projectCard_left="40%"
                projectText_margin="7% 7% 7% 35%"
                projectName="FACE RECOGNITION" 
                ProjectExplainOne="_This is a full-stack project that work with 3rd company API that allow user to do face-recognition on their picture." 
                ProjectExplainTwo="_This project is a combination between React for front-end and Postgres SQL for backend + NodeJS for serverside." 
                ViewCodeLink="https://github.com/Tris-909/Face-Recognition" 
                LiveDemoLink="https://face-recognition-tris909.herokuapp.com/" 
                ProjectPicture={FaceRecognition} 
                ProjectPicture_width="60%" 
                ProjectPicture_height="85%" 
                ProjectPicture_top="4%"
                ProjectPicture_left="0%" />
            
            <Project 
                projectCard_top="0" 
                projectCard_left="0%"
                projectText_margin="7%"
                projectName="HANDMADE POTTERY LANDING PAGE" 
                ProjectExplainOne="_This is a landing page designed by Designer Tran Ngoc Phuong Uyen on Figma and built by Front End Developer Tri Tran" 
                ProjectExplainTwo="_In this project, I have to work closely with the designer to turn a sketch to a live landing page that is fully responsive" 
                ViewCodeLink="https://github.com/Tris-909/HandmadePottery-LandingPage" 
                LiveDemoLink="https://tris-909.github.io/HandmadePottery-LandingPage/HandPottery.html" 
                ProjectPicture={HandmadePottery} 
                ProjectPicture_width="60%" 
                ProjectPicture_height="85%" 
                ProjectPicture_top="4%"
                ProjectPicture_left="47%" />

        </Container>
    )
}
