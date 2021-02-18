import React, {useState} from 'react'
import styled from 'styled-components';

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectText from '../ProjectText/ProjectText';
import ProjectImage from '../ProjectImage/ProjectImage';
import ProjectExplainMobile from '../ProjectExplainMobile/ProjectExplainMobile';
import ProjectTachStack from '../ProjectTechStack/ProjectTechStack';
import ProjectName from '../Project Utilities/ProjectName';
import ProjectExplain from '../Project Utilities/ProjectExplain';
import ProjectCredential from '../Project Utilities/ProjectCredential';
import ProjectContainer from '../Project Utilities/ProjectContainer';
import ButtonContainer from '../Project Utilities/ButtonContainer';

import Button from '../../Button/Button';

const Absolute = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
`;

const ProjectTab = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: "description tech-stacks";
`;

const Tab = styled.div`
    grid-area: ${props => props.category === 'description' ? 'description' : 'tech-stacks'};
    color: white;
    background-color: #30302e;
    
    cursor: pointer;
    border-radius: 15px;
    padding: 1rem;

    text-align: center;
    font-size: 1.7rem;
    font-weight: 700;

    @media (max-width: 1175px) {
        display: none;
    }
`;

const BorderBottom = styled.div`
    padding-bottom: 0.5rem;
    border-bottom: ${props => props.isActive === true ? '3px solid #ff2e2e;' : 'none'}; 
    transition: border 0.1s;
`;


export default function ProjectLeft({ 
    projectName,
    ProjectExplainForMobile,
    ProjectExplainOne,
    ProjectExplainTwo,
    ProjectCredentials,
    ViewCodeLink,
    LiveDemoLink,
    ProjectPicture, 
    ProjectAdminCredential
    }) {
    
    const [descriptionActiveProshop, setDescriptionActiveProshop] = useState(true);

    const toggleActiveDescription = (value) => {
        if (descriptionActiveProshop === true && value === 'description') {
            setDescriptionActiveProshop(true);
        } else if (value === 'tech-stacks' && descriptionActiveProshop === true) {
            setDescriptionActiveProshop(false);
        } else if (value === 'description' && descriptionActiveProshop === false) {
            setDescriptionActiveProshop(true);
        }
    }

    return (
    <ProjectContainer >
        <ProjectCard top="0" left="35%">
            <ProjectImage 
                imageArray={ProjectPicture} 
                width="80%"  
                height="75%"  
                top="15%"
                left="-50%" />
            <ProjectText margin="7% 7% 7% 35%">
            <Absolute project={projectName}>
                <ProjectTab>
                    <Tab 
                        category='description' 
                        onClick={() => toggleActiveDescription('description')}>
                        <BorderBottom isActive={descriptionActiveProshop}>Description</BorderBottom>
                    </Tab>
                    <Tab 
                        category='tech-stacks' 
                        onClick={() => toggleActiveDescription('tech-stacks')}>
                        <BorderBottom isActive={!descriptionActiveProshop}>Tech-Stacks</BorderBottom>
                    </Tab>
                </ProjectTab>
            </Absolute>
                {
                    descriptionActiveProshop ? (
                        <>
                            <ProjectName>
                                {projectName}
                            </ProjectName>
                            <ProjectExplainMobile>
                                {ProjectExplainForMobile}
                            </ProjectExplainMobile>
                            <ProjectExplain>
                                {ProjectExplainOne}
                            </ProjectExplain>
                            <ProjectExplain>
                                {ProjectExplainTwo}
                            </ProjectExplain>
                            <ProjectCredential isShow={projectName === "E-Commerce Proshop" ? true : false}>
                                <span style={{ fontWeight: 700 }}>Paypal Testing Account :</span> 
                                <p style={{ marginTop: '6px', marginBottom: '12px' }}>{ProjectCredentials}</p>
                                <span style={{ fontWeight: 700 }}>Admin Account :</span> 
                                <p style={{ marginTop: '3px', marginBottom: '0px' }}>{ProjectAdminCredential}</p>
                            </ProjectCredential>
                            <ButtonContainer>
                                <Button link={ViewCodeLink} content="View Code" />
                                <Button link={LiveDemoLink} content="Live Demo" />
                            </ButtonContainer>
                        </>
                    ) : (
                        <ProjectTachStack projectName={projectName} />
                    )
                }
            </ProjectText>
        </ProjectCard>
    </ProjectContainer>
    )
}
