import React from 'react'
import styled from 'styled-components';

const ProjectNameStyled = styled.div`
    font-size: 3.5em;
    font-weight: 600;
`;

export default function ProjectName(props) {
    return (
        <ProjectNameStyled>
            {props.children}
        </ProjectNameStyled>
    )
}
