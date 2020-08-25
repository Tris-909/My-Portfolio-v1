import React from 'react'
import styled from 'styled-components';

const ProjectImageContainer = styled.div`
    position: absolute; 
    top: ${props => props.top};
    left: ${props => props.left};
    width: ${props => props.width};
    height: ${props => props.height};
    border: 5px solid white;
    z-index: 10;

    @media (max-width: 1400px) {
        position: relative;
        top: 0%;
        left: 0%;
        margin-top: 5%;

        width: 85%;
    }
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden; 
`;

export default function ProjectImage({ src, width, height, top, left }) {
    return (
        <ProjectImageContainer top={top} width={width} left={left} height={height}>
            <Image src={src} alt="project 1" />
        </ProjectImageContainer>
    );
}
