import React from 'react'
import styled from 'styled-components';

const ProjectContainerComponent = styled.div`
    width: 80%;
    height: 55%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "img text"
                         "button button";
    margin: auto;
    border: 6px double #FFFFFF;
    padding: 40px 40px 80px 40px;
    border-radius: 0px 40px 0px 40px;
`;


export default function ProjectContainer(props) {
    return (
        <ProjectContainerComponent>
            {props.children}
        </ProjectContainerComponent>
    )
}
