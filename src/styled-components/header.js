import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    background: #fff;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 999;
    height: 60px;
    @media (min-width: 767px) {
        padding: 0 10px;
        justify-content: space-between;
    }
`;

export const NavigationIcon = styled.div`
    display: block;
    margin: 15px;
    & svg {
      height: 25px;
      width: 25px;
    }
    @media (min-width: 767px) {
        display: none;
    }
`;

export const AboutLogo = styled.div`
    & a {
      display: flex;
      flex-direction: row;
    }
    & .overstock-logo {
      height: 32px;
      width: 32px;
    }
    & .overstock-logo-text {
      display: none;
      margin-left: 10px;
      height: 28px;
      width: 152px;
    }
    @media (min-width: 767px) {
      & .overstock-logo-text {
        display: block;
      }
    }
`;


export const TopNavigation = styled.nav`
    display: none;

    & a {
        color: #4d4d4d;
    }

    @media (min-width: 767px) {
      background: transparent;
      display: block;
    }
    @media (min-width: 991px) {
      position: absolute;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
    }
`;


export const NavLinks = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    & .pageSelected {
      color: red;
    }
    & li {
        margin: 0 10px;
    }
    & a:hover {
      color: red;
    }
`;
export const MobileNavWrapper = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0009;
    z-index: 99;
    @media (min-width: 768px){
      display: none;
    }
`;

export const MobileNav = styled.div`
    height: 100%;
    width: 62%;
    background: #fff;
    top: 0;
    z-index: 9999;
    border-right: solid 1px #dadcdf;
    display: block;
    position: absolute;
    & ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    & li {
        border-bottom: solid 1px #d9dde0;
        padding: 15px 0px 10px 15px;
    }
    & a {
        padding: 10px 0 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        color: #4d4d4d;
    }
`;
