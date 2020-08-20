import React from 'react'
import styled from 'styled-components';

const ProjectExplainContainer = styled.div`
    font-size: 1.5em;
    color: white;
    margin-left: 1em;

    display: flex;
    flex-direction: column;
`;

export default function ProjectText(props) {
    return (
        <ProjectExplainContainer>
            {props.children}
        </ProjectExplainContainer>
    )
}
