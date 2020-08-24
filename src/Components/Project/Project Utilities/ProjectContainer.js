import React from 'react'
import styled from 'styled-components';

const ProjectContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 525px;
    position: relative;
    margin: 0% 10% 5% 10%;
`;

export default function ProjectContainer(props) {
    return (
        <ProjectContainerStyled>
            {props.children}
        </ProjectContainerStyled>
    )
}
