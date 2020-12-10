import React from 'react'

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectText from '../ProjectText/ProjectText';
import ProjectImage from '../ProjectImage/ProjectImage';
import ProjectExplainMobile from '../ProjectExplainMobile/ProjectExplainMobile';

import ProjectName from '../Project Utilities/ProjectName';
import ProjectExplain from '../Project Utilities/ProjectExplain';
import ProjectContainer from '../Project Utilities/ProjectContainer';
import ButtonContainer from '../Project Utilities/ButtonContainer';

import Button from '../../Button/Button';

export default function ProjectLeft({ 
    projectName,
    ProjectExplainForMobile,
    ProjectExplainOne,
    ProjectExplainTwo,
    ViewCodeLink,
    LiveDemoLink,
    ProjectPicture, 
    }) {
    return (
    <ProjectContainer>
        <ProjectCard top="0" left="40%">
            <ProjectImage 
                src={ProjectPicture} 
                width="80%"  
                height="75%"  
                top="7%"
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
                <ButtonContainer>
                    <Button link={ViewCodeLink} content="View Code" />
                    <Button link={LiveDemoLink} content="Live Demo" />
                </ButtonContainer>
            </ProjectText>
        </ProjectCard>
    </ProjectContainer>
    )
}
