import React, { Component } from 'react';
import { SectionContainer, Heading } from '../../styled-components/global';

class FeaturedVideo extends Component {
  render(){
    const { data } = this.props;
    return (
        <SectionContainer id="featuredVideoWrapper">
          <Heading id="featVidHeading" className="heading" style={{lineHeight: '1.2'}}>{data.heading}</Heading>
          <iframe
            id="featuredVideo"
            title={data.heading}
            src={data.videoSource}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </SectionContainer>
    );
  }
}

export default FeaturedVideo;
