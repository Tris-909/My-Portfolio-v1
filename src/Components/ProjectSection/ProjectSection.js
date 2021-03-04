import React, {useState} from 'react'
import styled from 'styled-components';

import ProjectLeft from '../Project/Project/ProjectLeft';
import ProjectRight from '../Project/Project/ProjectRight';
import Seemore from '../Button/Seemore';

//TODO: ProShop Image
import ProShop1 from './ProShop Image/ProShop1-min.PNG';
import ProShop2 from './ProShop Image/ProShop2-min.PNG';
import ProShop3 from './ProShop Image/ProShop3-min.PNG';
import ProShop4 from './ProShop Image/ProShop4-min.PNG';
import ProShop5 from './ProShop Image/ProShop5-min.PNG';
import ProShop6 from './ProShop Image/ProShop6-min.PNG';
import ProShop7 from './ProShop Image/ProShop7-min.PNG';

//TODO: Social Clone Image
import Pic1 from './Social Clone/Pic1.PNG';
import Pic2 from './Social Clone/Pic2.PNG';
import Pic3 from './Social Clone/Pic3.PNG';
import Pic4 from './Social Clone/Pic4.PNG';

//TODO: CMS
import CMS_PHP1 from './CMS/CMS-PHP.PNG';
import CMS_PHP2 from './CMS/CMS_2-min.PNG';
import CMS_PHP3 from './CMS/CMS_3-min.PNG';
import CMS_PHP4 from './CMS/CMS_4-min.PNG';

//TODO: LandingPage
import LP_1 from './LandingPage/LDP1.png';
import LP_2 from './LandingPage/LDP2-min.PNG';
import LP_3 from './LandingPage/LDP3-min.PNG';
import LP_4 from './LandingPage/LDP4-min.PNG';

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
                <ProjectLeft 
                    projectName="E-Commerce Proshop" 
                    ProjectExplainForMobile="FullStack E-Commerce Websites built using React and NodeJS, MongoDB. I go to famous retailer websites like JB-Hifi, TheGoodGuy to implement features on their websites."
                    ProjectExplainOne="This is a MERN project. I go to famous retailer websites like JB-Hifi, TheGoodGuy to implement features on their websites to build real-world features and improve my React skill." 
                    ProjectExplainTwo="The Site is a combination between a content management system (admin page) and an e-commerce websites. Admin can perform CRUD operations through interfaces (Content Management System)." 
                    ProjectCredentials="sb-uj3sb3898726@personal.example.com - ZRy:}9n+"
                    ProjectAdminCredential="admin@email.com - 123"
                    isShow={true}
                    ViewCodeLink="https://github.com/Tris-909/Ecommerce-BradTraversy" 
                    LiveDemoLink="https://proshop-tris.herokuapp.com/" 
                    ProjectPicture={[ProShop1, ProShop2, ProShop3 , ProShop4, ProShop5, ProShop6, ProShop7]} 
                />
            </FadeAnimation>

            <FadeAnimation>
                <ProjectRight 
                    projectName="SOCIAL MEDIA APP" 
                    ProjectExplainForMobile="This is a full-stack web-app built using React + Material-UI and Firebase."
                    ProjectExplainOne="This is a full-stack project clone popular social media app like: facebook, twitter." 
                    ProjectExplainTwo="This websites is built using React for Front-End and Firebase for both Database and Server-Side. 
                    This websites is designed and built by me to demonstrate my React skills 
                    and ability to work with complicated web-app that intereact with database, API, Redux , Material-UI,..." 
                    ViewCodeLink="https://github.com/Tris-909/SocialMedia-Clone" 
                    LiveDemoLink="https://socialapp-2c8b0.firebaseapp.com/login" 
                    ProjectPicture={[Pic1, Pic2, Pic3, Pic4]} 
                />
            </FadeAnimation>

            <Hidden hidden={hidden}> 
            <FadeAnimation>
                <ProjectLeft 
                    projectName="Blog CMS (PC Version)" 
                    ProjectExplainForMobile="Full-stack CMS Blogs websites built using PHP and mySQL."
                    ProjectExplainOne="This is a PHP + mySQL project. I used MAMP and phpMyAdmin to create this web-application then deployed it to heroku." 
                    ProjectExplainTwo="This project allow users to sign in create blogs and if they are admin, they will have a separated page to see and control all the blogs..." 
                    ProjectAdminCredential="tranminhtri9090 - Minhtri1"
                    ViewCodeLink="https://github.com/Tris-909/CMS-PHP" 
                    LiveDemoLink="https://shrouded-springs-90128.herokuapp.com/" 
                    ProjectPicture={[CMS_PHP1, CMS_PHP2, CMS_PHP3, CMS_PHP4]} 
                />
            </FadeAnimation>
            </Hidden>

            <Hidden hidden={hidden}> 
                <FadeAnimation>
                    <ProjectRight 
                        projectName="WORKSHOP LANDING PAGE" 
                        ProjectExplainForMobile="In this project, I have to work with a designer to turn a design from a sketch to a live website that fully responsive."
                        ProjectExplainOne="This is a landing page designed by Designer Tran Ngoc Phuong Uyen on Figma and built by Front End Developer Tri Tran" 
                        ProjectExplainTwo="In this project, I have to work closely with the designer to turn a sketch to a live landing page that is fully responsive" 
                        ViewCodeLink="https://github.com/Tris-909/HandmadePottery-LandingPage" 
                        LiveDemoLink="https://tris-909.github.io/HandmadePottery-LandingPage/HandPottery.html" 
                        ProjectPicture={[LP_1, LP_2, LP_3, LP_4]} 
                    />
                </FadeAnimation>
            </Hidden>

            <Seemore hiddenHandler={hiddenHandlerFunc} hidden={hidden} />
        </Container>
    );
}
