import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background-color: #ddd;
    font-size: 12px;
    height: auto;

    & a {
        color: #4d4d4d;
        text-decoration: none;
    }
`;


export const FooterComponent = styled.footer`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 15px;
`;

export const FooterNav = styled.nav`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterNavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 40px;
    padding: 5px;
    margin-top: 0;
    & li {
        margin: 10px;
        list-style: none;
        border-right: 1px solid #545658;
        padding-right: 20px;
        line-height: 20px;
    }
    & a {
        font-size: 12px;
        text-decoration: none;
    }
    & .last-item-no-border {
      border-right: none;
    }
    @media (min-width: 768px) {
      padding: 0;
    }
`;

export const FooterLine = styled.span`
    display: block;
    width: 75%;
    margin: 0 auto;
    border-top: 1px solid #a3a8b0;
`;

export const FooterIcons = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    color: #4d4d4d;
    & h5 {
      margin: 0px;
      line-height: 20px;
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
`;

export const FooterSocial = styled.ul`
    display: flex;
    padding: 0px;
    margin-bottom: 15px;
    margin-left: 20px;
    & li {
        list-style: none;
        width: 20px;
        margin-right: 40px;
    }
    @media (min-width: 568px) {
      margin-right: 50px;
    }
    @media (min-width: 768px) {
      margin-left: 0;
    }
`;

export const FooterAppIcons = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    & li {
        width: 125px;
        list-style: none;
    }
    & a {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
    }
    & p {
        margin: 0 20px 0 10px;
        font-size: 15px;
        font-weight: 300;
        line-height: 1.2;
        padding: 0 0 15px;
    }
`;


export const FooterConnect = styled.h5`
    &#footer-connect {
      margin: 0 34px;
    }
    @media (min-width: 768px) {
      margin: 0;
    }
`;
