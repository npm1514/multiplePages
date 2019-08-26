import styled from 'styled-components';

export const OurLeaders = styled.section`
    max-width: 1200px;
    margin: 0 auto;
`;

export const BlurbSection = styled.div`
    height: auto;
    text-align: center;
    width: 100%;
`;

export const LeaderGrid = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    color: #fff;
    padding: 0;
    -webkit-animation: fadeinout .1s linear forwards;
    animation: fadeinout .1s linear forwards;
`;

export const LeaderTile = styled.li`
    background-size: cover;
    height: 265px;
    width: 275px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    cursor: pointer;
    padding-left: 10px;
    position: relative;
    margin: 15px;
    list-style: none;
    &:hover .leader-tile-overlay {
      display: block;
      height: 265px;
      width: 275px;
      margin-left: -10px;
      background: #00000080;
    }
    &:hover .leader-hoverBio {
      display: block;
    }
`;

export const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 820px;
    padding: 0 10px;
`;

export const LeaderTileOverlay = styled.div`
    color: #fff;
    text-align: left;
    margin: 0;

    & > h4 {
      font-size: 16px;
      line-height: 1;
      letter-spacing: -.5px;
      margin: 0;
      padding: 12px 0 5px 0;
      font-weight: 400;
    }
    & > p {
      line-height: 1.3;
      font-size: 12px;
      margin: 0;
      padding: 0 0 5px 0;
      font-weight: 400;
    }
    @media (min-width: 569px){
      padding: 5px 3px 5px 7px;
      & > h4 {
        font-size: 18px;
      }
      & > p {
        font-size: 15px;
      }
    }
`;
export const LeaderHoverBio = styled.div`
    display: none;
    & > p {
      margin: 0;
      padding-bottom: 5px;
    }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0009;
  overflow: scroll;
  z-index: 997;
  &.is-hidden {
    display: none;
  }
`;

export const ModalContent = styled.div`
    width: 100%;
    position: relative;
    min-height: 300px;
    margin: 0 auto 30px;
    top: 100px;
    background: #fff;
    color: #4d4d4d;
    overflow: scroll;
    max-width: 600px;
`;

export const ButtonClose = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #fff;
    z-index: 998;
    font-size: 20px;
`;

export const ModalTop = styled.div`
    height: 250px;
    background-size: cover;
    background-position: 50% 25%;
    position: relative;
    & .modal-header-info {
      position: absolute;
      bottom: 10px;
      left: 0;
      & p {
        font-size: 20px;
        font-weight: 400;
        line-height: 1;
        margin: 0;
        color: #fff;
        padding: 5px 30px;
        margin: 5px 0;
      }
    }
`;

export const ModalBio = styled.div`
    padding: 5px 30px;
    margin-top: 5px;
    line-height: 1.3;
    margin-bottom: 5px;
    font-weight: 400;
`;

export const BlurbSubsection = styled.div`
    display: inline-block;
    padding: 30px;
    width: 50%;
    p {
        text-align: left;
        width: 100%;
    }

    .view-all-button {
        left: 0;
        margin: 15px 0;
    }

    &.text-subsection { text-align: left; }
`;

export const DownloadHeadshot = styled.div`
    padding: 30px 0 50px 30px;
`;
