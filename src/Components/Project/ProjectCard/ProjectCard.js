import React from 'react'
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
    background-color: #30302e;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 65%;
    border-radius: 15px;
`;

export default function ProjectCard(props) {
    return (
        <ProjectCardContainer style={{top: props.top, left: props.left}}>
            {props.children}
        </ProjectCardContainer>
    )
}
