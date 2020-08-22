import React from 'react'
import styled from 'styled-components';

const ProjectTextMargin = styled.div`
    margin: 7%;
    width: 60%;
    height: 70%;
    color: white;
`;

export default function ProjectText(props) {
    return (
        <ProjectTextMargin style={{ margin: props.margin }}>
            {props.children}
        </ProjectTextMargin>
    )
}
