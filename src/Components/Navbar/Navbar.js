import React from 'react'
import styled from 'styled-components';
import BurgerIcon from './BurgerIcon';
import { Link } from 'react-scroll';

const FixedNavBar = styled.nav`
    width: 100%;
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

const Brand = styled(Link)`
    padding: 1.25rem 0rem 1rem 0rem;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
`;

export default function Navbar() {
    return (
        <FixedNavBar>
            <NavBarContainer> 
                <NavBarBrand>
                    <Brand activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>TriTran</Brand>
                </NavBarBrand>
                <BurgerIcon />
            </NavBarContainer>
        </FixedNavBar>
    )
}
