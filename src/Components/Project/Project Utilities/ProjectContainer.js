import React from 'react'
import styled from 'styled-components';

const ProjectContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0% 10% 5% 10%;

    @media (max-width: 1400px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0% 0% 5% 0%;
        height: initial;
    }
`;

export default function ProjectContainer(props) {
    return (
        <ProjectContainerStyled>
            {props.children}
        </ProjectContainerStyled>
    )
}
