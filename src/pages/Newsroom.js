import React, { Component } from 'react';
import Banner from '../components/Banner';
import PressRelease from '../components/PressRelease';
import MediaCoverage from '../components/newsroomPage/MediaCoverage';
import FeaturedVideo from '../components/newsroomPage/FeaturedVideo';
import PressKit from '../components/newsroomPage/PressKit';
import Leadership from '../components/Leadership';
import InvestorRelations from '../components/newsroomPage/InvestorRelations';
import PrivateLabel from '../components/newsroomPage/PrivateLabel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from '../styled-components/global';
import { BreakMod1, BreakMod2, PhotoBreak } from '../styled-components/newsroom';


class Newsroom extends Component {
  constructor(props){
    super(props);
    this.state = {
      tickerData: props.data.tickerData,
      newsroom: props.data.newsroom,
      pressReleaseData: props.data.pressReleaseData,
      mediaCoverage: props.data.mediaCoverage
    }
  }
  render(){
      const { tickerData, newsroom, pressReleaseData, mediaCoverage } = this.state;
      const { pressReleases, pressKit, executiveTeam, boardOfDirectors, featuredVideo, investorRelations, banner, surveyResults } = newsroom;
      return (
          <PageWrapper>
            <Header page="newsroom"/>
            {banner ? <Banner data={banner} /> : ""}
            {pressReleaseData ? <PressRelease data={pressReleases} newsfeedData={pressReleaseData} page={"newsroom"}/> : ""}
            <PhotoBreak className="photo-break">
                <BreakMod1 className="break-mod-1" />
                <BreakMod2 className="break-mod-2" />
            </PhotoBreak>
            {mediaCoverage ? <MediaCoverage data={mediaCoverage} /> : ""}
            {featuredVideo ? <FeaturedVideo data={featuredVideo} /> : ""}
            {pressKit ? <PressKit data={pressKit} /> : ""}
            {executiveTeam ? <Leadership data={executiveTeam} /> : ""}
            {boardOfDirectors ? <Leadership data={boardOfDirectors} /> : ""}
            {investorRelations ? <InvestorRelations data={investorRelations} tickerData={tickerData} /> : ""}
            {surveyResults ? <PrivateLabel data={surveyResults} /> : ""}
            <Footer/>
          </PageWrapper>
      );
  }
}




export default Newsroom;
