import React from 'react'

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectText from '../ProjectText/ProjectText';
import ProjectImage from '../ProjectImage/ProjectImage';
import ProjectExplainMobile from '../ProjectExplainMobile/ProjectExplainMobile';

import ProjectName from '../Project Utilities/ProjectName';
import ProjectExplain from '../Project Utilities/ProjectExplain';
import ProjectCredential from '../Project Utilities/ProjectCredential';
import ProjectContainer from '../Project Utilities/ProjectContainer';
import ButtonContainer from '../Project Utilities/ButtonContainer';

import Button from '../../Button/Button';

export default function ProjectLeft({ 
    projectName,
    ProjectExplainForMobile,
    ProjectExplainOne,
    ProjectExplainTwo,
    ProjectCredentials,
    isShow,
    ViewCodeLink,
    LiveDemoLink,
    ProjectPicture, 
    ProjectAdminCredential
    }) {
    return (
    <ProjectContainer>
        <ProjectCard top="0" left="40%">
            <ProjectImage 
                imageArray={ProjectPicture} 
                width="80%"  
                height="75%"  
                top="15%"
                left="-50%" />
            <ProjectText margin="7% 7% 7% 35%">
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
            </ProjectText>
        </ProjectCard>
    </ProjectContainer>
    )
}
