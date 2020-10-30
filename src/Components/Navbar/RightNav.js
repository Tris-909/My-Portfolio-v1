import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll';

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

const NavItem = styled(Link)`
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

    // HOVER ANIMATION
    background-image: linear-gradient(white, white);
    background-size: 0 5px, auto;
    background-repeat: no-repeat;
    background-position: center bottom;
    transition: all .2s ease-out;
    &:hover {
        background-size: 100% 2px, auto;
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
            <NavItem activeClass="active" to="Projects" spy={true} smooth={true} offset={-100} duration={500}>
                Projects
            </NavItem>
            <NavItem activeClass="active" to="Aboutme" spy={true} smooth={true} offset={-100} duration={500}>
                About Me
            </NavItem>
            <NavItem activeClass="active" to="Contact" spy={true} smooth={true} offset={-100} duration={500}>
                Contact
            </NavItem>
        </NavBarMenuItems>
    </NavBarOptions>
    )
}
