import styled from 'styled-components';

export const PressReleasesWrapper = styled.div`
    padding: 20px 20px 0;
    & ul {
      text-align: left;
    }
    & li {
      padding: 0 0 20px;
    }
    & a:hover {
      text-decoration: none;
    }
    & p {
      margin: 0;
      padding: 0 0 5px;
    }
    & .press-release-date {
      color: #727578;
    }
    & .press-release-title {
      color: #5A5D60;
    }
    & .non-active-date {
      display: none;
    }
`;

export const PressReleasesYearNav = styled.div`
    & h3 {
        margin: 0;
        padding: 0 0 18px;
        line-height: 20px;
        color: rgb(84, 86, 88);
        text-align: center;
        font-stretch: 100%;
        font-size: 36px;
        font-weight: 200;
    }
    & ul {
        padding: 0 0 25px;
        text-align: center;
    }
    & span {
        color: #727578;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        margin: 0;
        padding: 0;

        &:after {
            content: "|";
            padding: 0 5px;
        }

        &:last-child {
            &:after {
                display: none;
            }
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;
