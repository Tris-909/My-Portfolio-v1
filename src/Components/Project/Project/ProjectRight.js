import React, {useState} from 'react'

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectText from '../ProjectText/ProjectText';
import ProjectImage from '../ProjectImage/ProjectImage';
import ProjectExplainMobile from '../ProjectExplainMobile/ProjectExplainMobile';
import TabBar from './Tab-Bar';
import ProjectName from '../Project Utilities/ProjectName';
import ProjectExplain from '../Project Utilities/ProjectExplain';
import ProjectContainer from '../Project Utilities/ProjectContainer';
import ButtonContainer from '../Project Utilities/ButtonContainer';
import ProjectTachStack from '../ProjectTechStack/ProjectTechStack';

import Button from '../../Button/Button';

export default function ProjectRight({ 
    projectName,
    ProjectExplainForMobile,
    ProjectExplainOne,
    ProjectExplainTwo,
    ViewCodeLink,
    LiveDemoLink,
    ProjectPicture, 
    }) {

    const [descriptionIsActive, setDescriptionIsActive] = useState(true);

    const toggleDescriptionActive = (value) => {
        if (descriptionIsActive === true && value === 'description') {
            setDescriptionIsActive(true);
        } else if (descriptionIsActive === true && value === 'tech-stacks') {
            setDescriptionIsActive(false);
        } else if (value === 'description' && descriptionIsActive === false) {
            setDescriptionIsActive(true);
        }
    }

    return (
    <ProjectContainer>
        <ProjectCard top="0"  left="0">
            <ProjectImage 
                imageArray={ProjectPicture} 
                width="80%" 
                height="70%" 
                top="10%"
                left="70%" />
            <ProjectText margin="7%">
                {
                    projectName === 'SOCIAL MEDIA APP' ? (
                        <TabBar descriptionActiveProshop={descriptionIsActive} 
                        toggleActiveDescription={(value) => toggleDescriptionActive(value)} />
                    ) : null
                }
                {
                    descriptionIsActive ? (
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
