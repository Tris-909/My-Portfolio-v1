import React from 'react'
import styled from 'styled-components';

const ProjectImageContainer = styled.div`
    position: absolute; 
    border: 5px solid white;
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden; 
`;

export default function ProjectImage({ src, width, height, top, left }) {
    return (
        <ProjectImageContainer style={{width: width,height: height,top: top,left: left}}>
            <Image src={src} alt="project 1" />
        </ProjectImageContainer>
    );
}
