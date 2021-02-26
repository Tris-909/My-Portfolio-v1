import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GeneralStyleForMiniContainer = styled.div`
    width: 100%;
    display: grid;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
`;

//! Proshop
const MiniContainer = styled(GeneralStyleForMiniContainer)`
    grid-template-areas: "HTML5 CSS3"
                         "ES6 TypeScript"
                         "React Redux";
    position: relative;


    & #html5 {
        grid-area: HTML5;   
    }

    & #css3 {
        grid-area: CSS3;
    }

    & #es6 {
        grid-area: ES6;
    }

    & #typesctipt {
        grid-area: TypeScript;
    }

    & #react {
        grid-area: React;
    }

    & #redux {
        grid-area: Redux;
    }
`;

const ServerSideContainer = styled(GeneralStyleForMiniContainer)`
    grid-template-areas: "NodeJS Express"
                         "Mongoose MongoDB";
    border-top: 2px solid white;
    padding-top: 1rem;
    padding-bottom: 1rem;

    & .nodejs {
        grid-area: NodeJS;
    }
    & .express {
        grid-area: Express;
    }
    & .mongoose {
        grid-area: Mongoose;
    }
    & .mongoDB {
        grid-area: MongoDB;

    }
`;

const ToolContainer = styled(GeneralStyleForMiniContainer)`
    grid-template-areas: "Git POSTMAN"
                        "Styled-Components React-Boostrap";
    border-top: 2px solid white;
    padding-top: 1rem;

    & .git {
        grid-area: Git;
    }

    & .postman {
        grid-area: POSTMAN;
    }

    & #react-boostrap {
        grid-area: Styled-Components;
    }

    & #styled-components {
        grid-area: React-Boostrap;
    }
`;

//! CMS
const CMSContainer = styled(GeneralStyleForMiniContainer)`
    grid-template-areas:  "HTML CSS"
                          "JavaScript JQuery";

    & #html {
        grid-area: HTML;
    }
    & #css {
        grid-area: CSS;
    }
    & #javascript {
        grid-area: JavaScript;
    }
    & #jquery {
        grid-area: JQuery;
    }
`;
const ServerSideCMS = styled(GeneralStyleForMiniContainer)`
    grid-template-areas:  "PHP . MySQL"
                          ". Apache .";
    border-top: 2px solid white;
    padding-top: 1rem;
    padding-bottom: 1rem;

    & #php {
        grid-area: PHP;
    }

    & #sql {
        grid-area: MySQL;
    }

    & #apache {
        grid-area: Apache;
    }
`;

const ToolCMS = styled(GeneralStyleForMiniContainer)`
    grid-template-areas:  "Git Boostrap";
    border-top: 2px solid white;
    padding-top: 1rem;

    & #cmsgit {
        grid-area: Git;
    }

    & #boostrap {
        grid-area: Boostrap;
    }
`;

//! Social App
const SocialAppContainer = styled(GeneralStyleForMiniContainer)`
    grid-template-areas:   "HTML5 CSS3"
                            "JavaScript6 React"
                            "Firebase Material-UI";
    min-height: 250px;

    & #socialhtml5 {
        grid-area: HTML5;
    }

    & #socialcss3 {
        grid-area: CSS3;
    }

    & #socialjs {
        grid-area: JavaScript6;
    }

    & #socialreact {
        grid-area: React;
    }

    & #firebase {
        grid-area: Firebase;
    }

    & #material-ui {
        grid-area: Material-UI;
    }

    @media (max-width: 1400px) {
        min-height: 150px;
    }
`;

export default function ProjectTechStack({
    projectName
}) {
    if (projectName === "E-Commerce Proshop") {
        return(
            <Container>
                <MiniContainer>
                   <span id="html5">HTML5</span> 
                   <span id="css3">CSS3</span> 
                   <span id="es6">ES6</span> 
                   <span id="typesctipt">TypeScript</span> 
                   <span id="react">React</span> 
                   <span id="redux">Redux</span> 
                </MiniContainer>
                <ServerSideContainer>
                    <span id="nodejs">NodeJS</span>
                    <span id='express'>Express</span>
                    <span id='mongoose'>Mongoose</span>
                    <span id='mongoDB'>NoSQL MongoDB</span>
                </ServerSideContainer>
                <ToolContainer>
                    <span id="git">Git / Github</span>
                    <span id="postman">POSTMAN</span>
                    <span id="react-boostrap">React Boostrap</span>
                    <span id="styled-components">Styled Components</span>
                </ToolContainer>
            </Container>
        )
    } else if (projectName === "Blog CMS (PC Version)") {
        return(
            <Container>
                <CMSContainer>
                    <span id="html">HTML5</span>
                    <span id="css">CSS3</span>
                    <span id="javascript">JavaScript</span>
                    <span id="jquery">JQuery</span>
                </CMSContainer>
                <ServerSideCMS>
                    <span id="php">PHP</span>
                    <span id="sql">MySQL</span>
                    <span id="apache">Apache</span>
                </ServerSideCMS>
                <ToolCMS>
                    <span id="cmsgit">Git</span>
                    <span id="boostrap">Boostrap</span>
                </ToolCMS>
            </Container>
        );
    } else if (projectName === 'SOCIAL MEDIA APP') {
        return(
            <Container>
                <SocialAppContainer>
                    <span id="socialhtml5">HTML5</span>
                    <span id="socialcss3">CSS3</span>
                    <span id="socialjs">JavaScript</span>
                    <span id="socialreact">React</span>
                    <span id="firebase">Firebase</span>
                    <span id="material-ui">Material-UI</span>
                </SocialAppContainer>
            </Container>
        );
    }
}