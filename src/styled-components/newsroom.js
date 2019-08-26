import styled from 'styled-components';

export const BreakMod1 = styled.div`
    width: 49%;
    background: url("https://ak1.ostkcdn.com/img/mxc/20180709_newsroom_split_one.jpg") no-repeat center center;
    background-size: cover;
    margin-right: 0.5%;
    height: 300px;
    @media (max-width: 568px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;
export const BreakMod2 = styled.div`
    margin-left: 0.5%;
    height: 300px;
    width: 50%;
    background: url("https://ak1.ostkcdn.com/img/mxc/20180604_newsroom_hero_bg_v2.jpg") no-repeat center center;
    background-size: cover;
    @media (max-width: 568px) {
        margin-left: 0;
        width: 100%;
    }
`;

export const PhotoBreak = styled.div`
    display: flex;
    margin-top: 75px;
    @media (max-width: 568px) {
        flex-direction: column;
        margin-top: 50px;
    }
`;

export const PressKitSection = styled.div`
    width: 100vw;
    text-align: center;
    background-color: #f9fafb;
    display: inline-block;
`;

export const FeaturedCarouselWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 45px 0;
    & .slick-slider {
        box-sizing: border-box;
        display: inline-block;
        margin: 0 auto;
        position: relative;
        touch-action: pan-y;
        -ms-touch-action: pan-y;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        width: 100%
        & .slick-list {
            display: inline-block;
            height: auto !important;
            overflow: hidden;
            width: 100%
        }
        & .slick-track {
            display: flex;
            flex-direction: row
        }
        & .slick-slide {
            min-height: 1px;
            min-width: 1px
        }
        & .slick-arrow {
            background: #fff;
            bottom: 0;
            border: 1px solid #ced1d5;
            border-radius: 3px;
            height: 44px;
            margin: auto 0;
            position: absolute;
            top: -44px;
            width: 34px;
            z-index: 1
            display: none;
        }
        & .slick-arrow:after {
            content: "";
            font-size: 24px;
            height: 22px;
            position: absolute;
            top: 10px;
            vertical-align: middle;
            width: 12px;
            z-index: 1
        }
        & .slick-arrow.slick-prev {
            left: -10%;
        }
        & .slick-arrow.slick-prev:after {
            background: url("//ak1.ostkcdn.com/img/mxc/20170619_icon_left_caret.svg") no-repeat;
            left: 9px;
        }
        & .slick-arrow.slick-prev.slick-disabled:after {
            background: url("//ak1.ostkcdn.com/img/mxc/20170619_icon_left_caret_disabled.svg") no-repeat;
            color: #ced1d5;
        }
        & .slick-arrow.slick-next {
            right: -10%;
        }
        & .slick-arrow.slick-next:after {
            background: url("//ak1.ostkcdn.com/img/mxc/20170619_icon_right_caret.svg") no-repeat;
            right: 9px;
        }
        & .slick-arrow.slick-next.slick-disabled:after {
            background: url("//ak1.ostkcdn.com/img/mxc/20170619_icon_right_caret_disabled.svg") no-repeat;
            color: #ced1d5;
        }
        & .carousel-slide {
            display: inline-block;
            padding: 0 10px;
            text-align: left;
            width: calc(100% - 20px);
            box-sizing: border-box;
            & img {
                padding: 0 0 15px;
                height: auto;
                max-width: 150px;
                border: 0;
                vertical-align: middle;
            }
            & .featured-slide-title {
                font-size: 20px;
                padding: 0;
                color: #545658;
                font-weight: 300;
                line-height: 1.2;
                margin: 0;
            }
            & .featured-slide-date, & .featured-slide-content {
                color: #545658;
                font-size: 15px;
                font-weight: 300;
                line-height: 1.2;
                padding: 0 0 15px;
                margin: 0;
            }
            & a {
                color: #444;
                text-decoration: none;
            }
        }
  }
`;

export const BlurbSubsection = styled.div`
    display: inline-block;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    &.chart-container {
        background-color: #f9fafb;
        margin: 20px 0;
        padding-bottom: 20px;
        padding-top: 20px;
        vertical-align: top;
    }
    &.text-subsection {
        text-align: left;
        & .blurb-p {
            width: 100%;
        }
    }
    @media (min-width: 768px){
      width: 50%;
    }
`;

export const ChartHeading = styled.div`
    font-size: 20px;
    padding-bottom: 0;
    padding-left: 10px;
    text-align: left;
    width: 100%;
    color: #545658;
    font-weight: 300;
    line-height: 1.2;
    padding: 0 0 15px;
`;

export const ChartPrice = styled.div`
    font-size: 30px;
    padding-bottom: 0;
    padding-left: 10px;
    text-align: left;
    width: 100%;
    color: #545658;
    font-weight: 300;
    line-height: 1.2;
    padding: 0 0 15px;
`;

export const ChartInfo = styled.div`
    font-size: 12px;
    padding-bottom: 0;
    padding-left: 10px;
    padding-top: 15px;
    text-align: left;
    width: 100%;
    color: #545658;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.2;
    padding: 0 0 15px;
`;

export const TextSection = styled.div`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 100;
    color: rgb(84, 86, 88);
    margin: 0px auto;
    padding: 0px 0px 15px;
    max-width: 560px;
`;

export const ModalsSection = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 700px;
`;

export const ArticleView = styled.div`
    width: 200px;
    height: auto;
    margin: 10px;
    & img {
      width: 100%;
    }
    &:hover {
      cursor: pointer;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    background-color: #00000080;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
    width: 100vw;
    overflow: scroll;
    & .modal-content {
      height: 100%;
      width: 100%;
    }
`;

export const ImgWrap = styled.div`
    position: relative;
    height: max-content;
    width: max-content;
    margin: 24px auto;
    width: 90%;
    max-width: 1500px;
    & img {
      width: 100%;
      max-width: 1500px;
      height: auto;
    }
`;

export const ButtonClose = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
`;

export const ModalText = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    bottom: 20px;
`;

export const VRIframe = styled.iframe`
    height: 350px;
    width: 100%;
    @media (min-width: 767px){
      height: 400px;
    }
    @media (min-width: 1024px){
      height: 600px;
    }
`;
