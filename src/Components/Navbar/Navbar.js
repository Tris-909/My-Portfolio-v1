import React from 'react'
import styled from 'styled-components';

const FixedNavBar = styled.nav`
    align-items: center;
    display: flex;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 999;
    background-color: #000;
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
`;

const NavBarContainer = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;

    padding-right: 2rem;
    padding-left: 2rem;

    max-width: 1440px;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
`;

const NavBarBrand = styled.div`
    display: flex;
`;

const Brand = styled.a`
    padding: 1.25rem 0rem 1rem 0rem;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
`;

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
`;

const NavItem = styled.a`
    position: relative;
    padding: 1.25rem 0rem 0.75rem 0rem;
    margin-right: 2em;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
`;

export default function Navbar() {
    return (
        <FixedNavBar>
            <NavBarContainer>
                
                <NavBarBrand>
                    <Brand href="#Home">TriTran</Brand>
                </NavBarBrand>

                <NavBarOptions>
                    <NavBarMenuItems>
                        <NavItem href="#Projects">Projects</NavItem>
                        <NavItem href="#Aboutme">About Me</NavItem>
                        <NavItem>Contact</NavItem>
                        <NavItem>Resume</NavItem>
                    </NavBarMenuItems>
                </NavBarOptions>

            </NavBarContainer>
        </FixedNavBar>
    )
}
