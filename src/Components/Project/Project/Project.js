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

export default function SocialApp({ 
    projectCard_top, 
    projectCard_left,
    projectText_margin,
    projectName,
    ProjectExplainForMobile,
    ProjectExplainOne,
    ProjectExplainTwo,
    ViewCodeLink,
    LiveDemoLink,
    ProjectPicture,
    ProjectPicture_width,
    ProjectPicture_height,
    ProjectPicture_top,
    ProjectPicture_left    
    }) {
    return (
    <ProjectContainer>
        <ProjectCard top={projectCard_top} left={projectCard_left}>
            <ProjectImage 
                src={ProjectPicture} 
                width={ProjectPicture_width} 
                height={ProjectPicture_height} 
                top={ProjectPicture_top} 
                left={ProjectPicture_left} />
            <ProjectText margin={projectText_margin}>
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
