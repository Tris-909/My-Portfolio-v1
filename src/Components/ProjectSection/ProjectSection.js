import React, {useState} from 'react'
import styled from 'styled-components';

import SocialApp from './SocialApp-min.PNG';
import FaceRecognition from './Face_mini.PNG';
import HandmadePottery from './HandmadePottery-min.png';
import WeatherApp from './WeatherApp.PNG';
import CMS_PHP from './CMS-PHP.PNG';

import Project from '../Project/Project/Project';
import Seemore from '../Button/Seemore';

import FadeAnimation from '../Project/ProjectAnimation/FadeBottom';


const Container = styled.div`
    background-color: #141414;
    width: 100%;

    @media (max-width: 1400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        justify-content: flex-start;
    }
`;

const IntroText = styled.div`
    color: white;
    border-radius: 10px;
    font-size: 3.75em;
    margin-bottom: 55px;
    margin-left: 10%;
`;

const Hidden = styled.div`
    display: ${props => props.hidden ? "none" : "block"};
`;

export default function Projects() {
    const [hidden, setHidden] = useState(true);
    
    const hiddenHandlerFunc = () => {
        setHidden(!hidden);
    }

    return (
        <Container>
            <IntroText id="Projects"> My Projects </IntroText>
            
            <FadeAnimation>
                <Project 
                    projectCard_top="0" 
                projectCard_left="0"
                projectText_margin="7%"
                projectName="SOCIAL MEDIA APP" 
                ProjectExplainForMobile="This is a full-stack web-app built using React + Material-UI and Firebase."
                ProjectExplainOne="_This is a full-stack project clone popular social media app like: facebook, twitter." 
                ProjectExplainTwo="_This websites is built using React for Front-End and Firebase for both Database and Server-Side. 
                This websites is designed and built by me to demonstrate my React skills 
                and ability to work with complicated web-app that intereact with database, API, Redux , Material-UI,..." 
                ViewCodeLink="https://github.com/Tris-909/SocialMedia-Clone" 
                LiveDemoLink="https://socialapp-2c8b0.firebaseapp.com/login" 
                ProjectPicture={SocialApp} 
                ProjectPicture_width="80%" 
                ProjectPicture_height="70%" 
                ProjectPicture_top="10%"
                ProjectPicture_left="70%" />
            </FadeAnimation>

            <FadeAnimation>
                <Project 
                    projectCard_top="0" 
                projectCard_left="40%"
                projectText_margin="7% 7% 7% 35%"
                projectName="Blog CMS (PC Version)" 
                ProjectExplainForMobile="Full-stack CMS Blogs websites built using PHP and mySQL."
                ProjectExplainOne="_This is a PHP + mySQL project. I used MAMP and phpMyAdmin to create this web-application then deployed it to heroku." 
                ProjectExplainTwo="_This project allow users to sign in create blogs and if they are admin, they will have a separated page to see and control all the blogs..." 
                ViewCodeLink="https://github.com/Tris-909/CMS-PHP" 
                LiveDemoLink="https://shrouded-springs-90128.herokuapp.com/" 
                ProjectPicture={CMS_PHP} 
                ProjectPicture_width="80%" 
                ProjectPicture_height="75%" 
                ProjectPicture_top="7%"
                ProjectPicture_left="-50%" />
            </FadeAnimation>

            <FadeAnimation>
                <Project 
                    projectCard_top="0" 
                projectCard_left="0"
                projectText_margin="7%"
                projectName="FACE RECOGNITION" 
                ProjectExplainForMobile="This website allows users to do face-recognition by using a 3rd company API"
                ProjectExplainOne="_This is project that work with 3rd company API that allow users to do face-recognition on their picture using imageURL." 
                ProjectExplainTwo="_This was built using ReactJS along with some packages like axios and styled-components..." 
                ViewCodeLink="https://github.com/Tris-909/Face-Recognition" 
                LiveDemoLink="https://face-recognition-tris909.herokuapp.com/" 
                ProjectPicture={FaceRecognition} 
                ProjectPicture_width="80%" 
                ProjectPicture_height="75%" 
                ProjectPicture_top="10%"
                ProjectPicture_left="70%" />
            </FadeAnimation>

            <Hidden hidden={hidden}> 
                <FadeAnimation>
                    <Project 
                        projectCard_top="0" 
                projectCard_left="40%"
                projectText_margin="7% 7% 7% 35%"
                projectName="WORKSHOP LANDING PAGE" 
                ProjectExplainForMobile="In this project, I have to work with a designer to turn a design from a sketch to a live website that fully responsive."
                ProjectExplainOne="_This is a landing page designed by Designer Tran Ngoc Phuong Uyen on Figma and built by Front End Developer Tri Tran" 
                ProjectExplainTwo="_In this project, I have to work closely with the designer to turn a sketch to a live landing page that is fully responsive" 
                ViewCodeLink="https://github.com/Tris-909/HandmadePottery-LandingPage" 
                LiveDemoLink="https://tris-909.github.io/HandmadePottery-LandingPage/HandPottery.html" 
                ProjectPicture={HandmadePottery} 
                ProjectPicture_width="80%" 
                ProjectPicture_height="85%" 
                ProjectPicture_top="4%"
                ProjectPicture_left="-50%" /> 
                </FadeAnimation>
            </Hidden>

            <Hidden hidden={hidden}> 
                <FadeAnimation>
                    <Project 
                        projectCard_top="0" 
                projectCard_left="0"
                projectText_margin="7%"
                projectName="WEATHER APP" 
                ProjectExplainForMobile="This website allows users to see weather forecast of sepcific location"
                ProjectExplainOne="_This is a project that I have been working on when I were learning NodeJS" 
                ProjectExplainTwo="_I use HTML, CSS (boostrap), JS for the client-side and NodeJS + Express for server-side." 
                ViewCodeLink="https://github.com/Tris-909/WeatherApp-Heroku" 
                LiveDemoLink="https://tris-weather-application.herokuapp.com/" 
                ProjectPicture={WeatherApp} 
                ProjectPicture_width="80%" 
                ProjectPicture_height="75%" 
                ProjectPicture_top="10%"
                ProjectPicture_left="70%" />
                </FadeAnimation>
            </Hidden>

            <Seemore hiddenHandler={hiddenHandlerFunc} hidden={hidden} />
        </Container>
    );
}
