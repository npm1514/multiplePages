import styled from 'styled-components';

export const PageWrapper = styled.div`
    min-width: 320px;
`;

export const SectionContainer = styled.div`
    width: calc(100% - 24px);
    padding: 0 12px;
    margin: auto;
    text-align: center;
    max-width: 600px;
    & #featuredVideo {
      width: 100%;
      height: 300px;
      margin-bottom: 40px;
    }
    @media (min-width: 767px){
      width: 100%;
      padding: 0;
      & #featuredVideo {
        height: 400px;
      }
    }
    @media (min-width: 1024px){
      max-width: 800px;
    }
    @media (min-width: 1540px){
      max-width: 1100px;
    }
`;

export const Heading = styled.h2`
    line-height: 20px;
    color: #545658;
    text-align: center;
    font-stretch: 100%;
    font-size: 36px;
    font-weight: 200;
    margin-bottom: 15px;
    margin-top: 50px;
`;

export const BlurbP = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin: 0 auto;
    font-weight: 100;
    color: #545658;
    padding: 0 0 15px;
    @media (min-width: 769px){
      width: 600px;
    }
`;

export const ViewAllButton = styled.div`
    background-color: #f7f8f9;
    border: 1px solid #dadcdf;
    border-radius: 3px;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    margin: 30px auto 50px;
    padding: 8px 20px;
    color: #4d4d4d;
    text-decoration: none;
`;

export const HeroImg = styled.div`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent 75%), url("https://ak1.ostkcdn.com/img/mxc/20180604_newsroom_hero_bg.png") no-repeat center;
    background-size: cover;
    height: 300px;
    display: flex;
    justify-content: center;
    align-content: center;
    @media (min-width: 568px){
        height: 500px;
    }
`;

export const HeroImgH1 = styled.div`
    align-self: center;
    font-weight: lighter;
    font-size: 40px;
    line-height: 1.25;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.34);
`;
