import styled from 'styled-components';
import {Container} from '../../globalStyles';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`

    background: #fff;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    font-size: 1.2rem;
    top: 0;
    z-index: 999;

`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
`;

export const NavLogo = styled(Link)`
   color: #06B79E;
   justify-self: flex-start;
   text-decoration: none;
   font-size: 1.4rem;
   align-items: center;
   display: flex;
   font-weight: bold;
   letter-spacing: 0.7px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1180px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    opacity: 1;
    position: absolute;
    top: 60px;
    background: #fff;
    transition: all .5s ease;
    left: ${({click}) => (click ? 0 : '-100%')};

  }

`;

export const NavItems = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;
  &:hover{
    border-bottom: 2px solid #06B79E;
  }

  @media screen and (max-width: 850px){
     margin: 0.3em;
  }
`;

export const NavLinks = styled(Link)`
  color: #242D33;
  display: flex;
  font-size: 1rem;
  text-decoration: none;
  align-items: center;
  height: 100%;
  padding: .5rem 1rem;
`;


export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 850px){
       display: block;
       position: absolute;
       top: 0;
       right: 0;
       font-size: 1.8rem;
       color: #000;
       transform: translate(-100%,60%);
       cursor: pointer;
   }
`;