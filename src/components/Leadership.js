import React, { Component } from 'react';
import CloseIcon from '../utils/closeIcon';
import {
  OurLeaders,
  BlurbSection,
  LeaderGrid,
  LeaderTile,
  SectionContainer,
  LeaderTileOverlay,
  LeaderHoverBio,
  Overlay,
  ModalContent,
  BlurbSubsection,
  ButtonClose,
  ModalTop,
  ModalBio,
  DownloadHeadshot
} from '../styled-components/leadership';
import { Heading } from '../styled-components/global';

class Leadership extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalShowing: ''
    }
  }
  unhideModal(id,e){
    if(this.state.modalShowing && (e.target.className.indexOf('overlay') != -1 || e.target.className.indexOf('button-close') != -1 )){
      this.setState({
        modalShowing: ""
      })
    } else {
      this.setState({
        modalShowing: id
      })
    }
  }

  render(){
    const { data } = this.props;
    const { modalShowing } = this.state;
    return (
        <OurLeaders className="our-leaders" id="leader-heading">
          <BlurbSection className="blurb-section">
            {
              data.subheading &&
              <div className="leader-nav">
                <Heading className="heading activeLeaders" data-team="executive-team">{data.subheading}</Heading>
              </div>
            }
          </BlurbSection>
          <LeaderGrid id="executive-team" className="leader-grid">
            {
              data.tiles.map((tile, index) => {
                let id = data.subheading + index;
                return (
                  <LeaderTile
                    key={index}
                    className="leader-tile"
                    style={{backgroundImage: `url("${tile.smallImage}")`}}
                    onClick={(e) => {this.unhideModal((data.subheading + index), e)}}
                  >
                    <LeaderTileOverlay className="leader-tile-overlay">
                        <h4>{tile.name}</h4>
                        <p className="leader-position">{tile.title}</p>
                        <LeaderHoverBio className="leader-hoverBio">
                            <p>{tile.blurb}</p>
                            <p>Read More ›</p>
                        </LeaderHoverBio>
                    </LeaderTileOverlay>
                    <Overlay className={"overlay" + (modalShowing == id ? "" : " is-hidden")}>
                      <ModalContent className="modal-content">
                          <ButtonClose className="button-close">
                              <CloseIcon />
                          </ButtonClose>
                          <ModalTop
                            className="modal-top"
                            style={{backgroundImage: `linear-gradient(0deg, #00000080, #0000 75%), url("${tile.bigImage}")`}}
                          >
                            <div className="modal-header-info">
                                <p>{tile.name}</p>
                                <p>{tile.title}</p>
                            </div>
                          </ModalTop>

                          {tile.bio.map((bio, index) => (
                              <ModalBio key={index}>{bio}</ModalBio>
                          ))}
                          <DownloadHeadshot className="download-headshot">
                              <a href={tile.bigImage} target="_blank" rel="noopener noreferrer" download="">Download Headshot</a>
                          </DownloadHeadshot>
                      </ModalContent>
                    </Overlay>
                    </LeaderTile>
                  )
                }
              )
            }
          </LeaderGrid>
        </OurLeaders>
    );
  }
}

export default Leadership;
