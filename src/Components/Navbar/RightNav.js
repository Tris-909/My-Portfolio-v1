import React from 'react'
import styled from 'styled-components';

const NavBarOptions = styled.div`
    flex-grow: 1;
    align-items: center;
    display: flex;
`;

const NavBarMenuItems = styled.div`
    justify-content: flex-end;
    margin-left: auto;

    align-items: center;
    display: flex;

    @media (max-width: 750px) {
        flex-flow: row nowrap;
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        padding-top: 1rem;
        background-color: black;
        justify-content: flex-start;
        transition: all .3s ease-out;
        transform:${({open}) => open ? 'translateY(0%)' : 'translateY(-150%)' };

        display: flex;
        flex-direction: column;
    }
`;

const NavItem = styled.a`
    position: relative;
    padding: 1.25rem 0rem 0.75rem 0rem;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;

    &:not(:last-child) {
        margin-right: 2em;
    }

    @media (max-width: 750px) {
        padding: 1rem;
        margin-right: 0px;
        &:not(:last-child) {
            margin-right: 0px;
        }

        font-size: 2rem;
        text-align: center;
    }
`;

export default function RightNav({open}) {
    return (
    <NavBarOptions>
        <NavBarMenuItems open={open}>
            <NavItem href="#Projects">Projects</NavItem>
            <NavItem href="#Aboutme">About Me</NavItem>
            <NavItem href="#Contact">Contact</NavItem>
        </NavBarMenuItems>
    </NavBarOptions>
    )
}
