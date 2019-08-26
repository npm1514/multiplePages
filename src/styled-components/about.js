import styled from 'styled-components';

export const AboutPage = styled.div`
    & .grid {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    & .ost-cares-grid {
        max-width: 1000px;
        margin: 0 auto;
        background-color: #f9fafb;
    }
    @media (max-width: 768px){
        & .grid {
            margin-top: 20px;
        }
    }
    & .overstock-cares {
        background-color: #f9fafb;
        padding-bottom: 20px;
        padding-top: 10px;
    }
    & .timeline {
      margin: 0;
    }
`;

export const BlurbSection = styled.section`
  margin-bottom: 24px;
  text-align: center;
  & .blurb-p {
    text-align: center;
    width: 80%;
    max-width: 600px;
  }
  & .awards {
    display: flex;
    max-width: 800px;
    margin: 30px auto 80px;
    justify-content: space-between;
  }
  & .awards img {
      height: 60px;
  }
  @media only screen and (max-width: 375px){
    & .awards {
        width: 50%;
    }
    & .awards-title {
      line-height: 1.2;
    }
  }
  @media only screen and (max-width: 568px){
    & .awards {
        width: 75%;
        margin: 0 auto 50px;
        justify-content: center;
        flex-wrap: wrap;
    }
    & .awards img {
        padding: 20px;
    }
  }


  @media only screen and (max-width: 768px){
    & .awards {
        width: 75%;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 60px;
    }
    & .awards img {
        padding: 30px;
    }
  }
`;

export const GridBox = styled.section`
    width: 300px;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.06);
    border: solid 1px #dadcdf;
    margin: 45px 10px;
    & .grid-img {
        height: 200px;
        width: 300px;
    }
    & h4 {
        margin-bottom: 3px;
        line-height: 1.5;
        font-size: 14px;
        color: #4d4d4d;
    }
    & p {
        width: 285px;
        margin: 0 auto;
        font-size: 16px;
        line-height: 1.5;
        padding: 10px;
        color: #4d4d4d;
    }
    @media (max-width: 768px){
        width: 100%;
        margin: 0px;
        box-shadow: none;
        border: none;
        & .grid-img {
            height: auto;
            width: 100%;
        }
    }
`;

export const OstCaresGridBox = styled.section`
    width: 45%;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.06);
    border: solid 1px #dadcdf;
    margin: 20px 10px;
    text-align: left;
    & a {
      text-decoration: none;
    }
    & img {
        width: 100%;
    }
    & .ost-cares-grid-content {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        color: #4d4d4d;
        height: 200px;
        padding-left: 25px;
        & h4 {
            font-size: 18px;
            margin-bottom: 0px;
            margin-top: 5px;
        }
        & p {
            width: 85%;
            height: 125px;
            font-size: 16px;
            letter-spacing: -0.5px;
            line-height: 1.4;
        }
        & .ost-cares-learn {
            text-decoration: none;
            color: #4d4d4d;
            padding-bottom: 20px;
        }
    }
    @media (max-width: 932px){
      & .ost-cares-grid-content {
          height: 220px;
      }
    }
    @media (max-width: 768px){
        & .ost-cares-grid-content {
            height: 200px;
            padding-left: 5px;
            & h4 {
                font-size: 16px;
                margin-bottom: 0px;
                margin-top: 5px;
            }
            & p {
                width: 85%;
                height: 125px;
                margin: 0 auto;
                font-size: 14px;
                letter-spacing: -0.5px;
                line-height: 1.4;
                padding: 10px;
            }
            & .ost-cares-learn {
              padding-left: 10px;
            }
        }
    }

    @media (max-width: 568px) {
        margin: 5px;
        & .ost-cares-grid-content {
            height: 50px;
            text-align: center;
            & h4 {
                display: block;
                font-weight: lighter;
            }
            & p {
                display: none;
            }
            & .ost-cares-learn {
              display: none;
            }
        }
    }
`;
