import styled from 'styled-components';

export const OurHistory = styled.section`
    background-color: #f9fafb;
    padding: 20px;
    @media (min-width: 768px) {
        padding: 24px 0;
    }
`;

export const MobileSelect = styled.select`
        display: block;
        width: 100%;
        height: 35px;
        background: #fff;
        margin: 0 auto;
        box-shadow: 0 2px 0 0 rgba(84, 86, 88, 0.06);
        font-size: 14px;
        max-width: 700px;
        @media (min-width: 768px) {
            display: none;
        }
`;

export const Timeline_Div = styled.div`
    margin: 30px auto 0 auto;
    width: 100%;
    height: 56px;
    overflow: scroll;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
        display: none;
    }
    & li {
        margin: 12px 15px 12px 15px;
        list-style: none;
    }
    @media (max-width: 768px) {
        display: none;
    }

`;

export const YearsList = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0px;
    width: max-content;
    margin: auto;
    position: relative;
    & li {
      z-index: 9;
    }
`;

export const TimelineBubble = styled.div`
    height: 20px;
    width: 20px;
    margin: 5px auto;
    border-radius: 10px;
    background: #d8d8d8;
    display: flex;
    justify-content: center;
    cursor: pointer;
    & .active-bubble {
        height: 12px;
        width: 12px;
        border-radius: 7px;
        align-self: center;
        background: #545658;
    }
`;

export const HistoryListContainer = styled.section`
    max-width: 1000px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    -webkit-animation: fadeinout .35s linear forwards;
    animation: fadeinout .35s linear forwards;
    @media (min-width: 768px) {
        flex-direction: row;
        margin: 20px;
    }
    @media (min-width: 1040px) {
        margin: 20px auto;
    }
`;

export const HistoryImage = styled.img`
    order: 0;
    align-self: center;
    padding-top: 40px;
    height: auto;
    width: 100%;
    @media (min-width: 768px){
        width: 50%;
        order: 3;
        align-self: flex-start;
    }
`;

export const HistoryList = styled.div`
    margin-right: 40px;
    text-align: left;
    color: #4d4d4d;
    & ul {
        padding: 0;
        font-size: 14px;
    }
    & h2 {
        font-weight: normal;
    }
    & .history-list-item {
        list-style: none;
        padding-bottom: 5px;
        & h4 {
            font-weight: normal;
            text-decoration: underline;
        }
        & a {
            text-decoration: underline;
        }
    }
`;

export const Timeline_Line = styled.div`
    z-index: 0;
    position: absolute;
    bottom: 24px;
    left: 29px;
    width: calc(100% - 30px - 24px);
    height: 5.6px;
    border-radius: 3px;
    margin: -29px auto 0 auto;
    background-color: #d8d8d8;
`;
