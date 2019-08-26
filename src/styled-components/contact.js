import styled from 'styled-components';

export const BlurbSection = styled.div`
  & .blurb-p {
    text-align: center;
    width: 80%;
    max-width: 600px;
  }
`;


export const ContactUsGrid = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const ContactColumn = styled.section`
  margin: 30px 2.5%
  text-align: center;
  & div {
    margin-bottom: 50px;
  }
  & h4 {
    margin-bottom: 0px;
    font-size: 14px;
    color: #4d4d4d;
  }
  & p {
    margin: 7px;
    max-width: 300px;
    line-height: 1.5;
    font-size: 14px;
    color: #4d4d4d;
  }
  & a {
    color: #4d4d4d;
  }
  &:first-child {
    margin-left: 2%;
  }
  @media (max-width: 768px) {
    margin-left: 0%;
    margin-top: 0px;
    text-align: center;
    & div {
      margin-bottom: 40px;
    }
    & h4 {
      margin: 0px;
      margin-bottom: 0px;
    }
    & p {
      margin: 0px;
      max-width: none;
      line-height: 1.5;
    }
    &:first-child {
      margin-left: 0%;
    }
  }
  @media (max-width: 568px) {
    & div {
      margin-bottom: 30px;
    }
  }
`;

export const LinkDecoration = styled.a`
  text-decoration: underline;
`;
