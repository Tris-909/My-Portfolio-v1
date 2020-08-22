import React from 'react'
import styled from 'styled-components';

const ButtonContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 2em;
    margin-top: 1em;
`;

export default function ButtonContainer(props) {
    return (
        <ButtonContainerStyled>
            {props.children}
        </ButtonContainerStyled>
    )
}
