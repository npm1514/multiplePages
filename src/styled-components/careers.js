import styled from 'styled-components';

export const BlurbSection = styled.section`
  margin-bottom: 24px;
  text-align: center;
  & .blurb-p {
    text-align: center;
    width: 80%;
    max-width: 600px;
  }
  &.career-benefits {
      background-color: #f9fafb;
      margin-top: 20px;
      padding-top: 1px;
  }
`;

export const CareersPage = styled.div`
  & .photo-break {
      display: flex;
      justify-content: space-between;
  }
  & .careers-culture-mod-1 {
      width: 50%;
      height: 300px;
      margin-right: 12px;
  }
  & .careers-culture-mod-2 {
      width: 50%;
      height: 300px;
      margin-left: 12px;
  }
  & .career-benefits {
      background-color: #f9fafb;
      margin-top: 20px;
      padding-top: 1px;
  }
  & .benefits-list {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 80px;
      margin-top: 30px;
      padding-right: 40px;
  }
  & .benefits-list ul {
      margin-top: 0px;
      margin-left: 50px;
  }
  & .benefits-list li {
      list-style: none;
      line-height: 2.5;
      text-align: left;
  }
  & .benefits-list p {
      margin-top: 0px;
      margin-bottom: 5px;
      font-size: 14px;
      text-align: left;
  }
  & .careers-why-utah {
      background: linear-gradient(to top, #000c, #0000 80%), url(https://ak1.ostkcdn.com/img/mxc/20170817-careers-living-in-utah-banner.png) top no-repeat;
      background-size: cover;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & .heading, & .blurb-p {
        color: #fff;
        text-align: center;
      }
      & .heading {
        font-size: 24px;
      }
  }
  @media (max-width: 568px){
      & .careers-why-utah {
          height: 300px;
      }
      & .benefits-list img{
          width: 100%;
      }
  }
  @media (max-width: 767px){
    & .careers-culture-mod-1, & .careers-culture-mod-2 {
        width: 100%;
        margin: 10px 0 0 0;
    }
    & .photo-break {
        display: block;
    }
  }
  @media (max-width: 992px){
    & .benefits-list {
        flex-wrap: wrap;
        margin-bottom: 30px;
        padding-right: 20px;
        padding-left: 20px;
    }
    & .benefits-list ul {
        padding: 20px 0 0 30px;
        margin-left: 0;
    }
  }
`;
