import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import BurgerIcon from './BurgerIcon';
import { Link } from 'react-scroll';

const FixedNavBar = styled.nav`
    width: 100%;
    height: 10%;
    align-items: center;
    display: flex;

    position: fixed;
    left: 0;
    right: 0;
    top: ${props => props.visible ? 0 : '-10%'};
    transition: top 0.6s;

    z-index: 999;
    background-color: #000;
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
`;

const NavBarContainer = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;

    padding-right: 3vw;
    padding-left: 3vw;

    margin-right: auto;
    margin-left: auto;
`;

const NavBarBrand = styled.div`
    display: flex;
`;

const Brand = styled(Link)`
    padding: 1.25rem 0rem 1rem 0rem;
    font-size: 2vw;
    color: white;
    cursor: pointer;
    text-decoration: none;
`;

export default function Navbar() {
    const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;
        const Newvisibility = currentScrollPosition < prevScrollPosition;
        setPrevScrollPosition(currentScrollPosition);
        setVisible(Newvisibility);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [window.pageYOffset])

    return (
        <FixedNavBar visible={visible}>
            <NavBarContainer> 
                <NavBarBrand>
                    <Brand activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>TriTran</Brand>
                </NavBarBrand>
                <BurgerIcon />
            </NavBarContainer>
        </FixedNavBar>
    )
}
