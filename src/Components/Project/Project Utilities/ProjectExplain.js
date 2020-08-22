import React from 'react'
import styled from 'styled-components';

const ProjectExplainStyled = styled.div`
    font-size: 1.5em;
    margin-top: 1rem;
`;

export default function ProjectExplain(props) {
    return (
        <ProjectExplainStyled>
            {props.children}
        </ProjectExplainStyled>
    )
}
