import React from 'react'
import styled from 'styled-components';

const ProjectImageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden; 
`;

export default function ProjectImage({ src }) {
    return (
        <ProjectImageContainer>
            <Image src={src} alt="project 1" />
        </ProjectImageContainer>
    );
}
