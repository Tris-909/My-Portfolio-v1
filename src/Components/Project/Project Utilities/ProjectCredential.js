import React from 'react'
import styled from 'styled-components';

const ProjectCredentials = styled.div`
    font-size: 1.5em;
    margin-top: 1rem;
    background-color: #fff;
    clip-path: polygon(88% 0%, 100% 50%, 88% 100%, 0% 100%, 0 51%, 0% 0%);
    color : black;
    padding: 10px;
    width: 112%;

    @media (max-width: 550px) {
        display: none;
    }
`;

export default function ProjectCredential(props) {
    if (props.isShow) {
        return (
            <ProjectCredentials>
                {props.children}
            </ProjectCredentials>
        );
    }
    return null;
}
