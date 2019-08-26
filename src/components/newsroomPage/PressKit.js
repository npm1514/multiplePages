import React, { Component } from 'react';
import { shape } from 'prop-types';
import { PressKitSection } from '../../styled-components/newsroom';
import { SectionContainer, Heading, BlurbP, ViewAllButton } from '../../styled-components/global';

class PressKit extends Component {
  render(){
    const { data } = this.props;
    return (
      <PressKitSection className="press-kit-section blurb-section">
        <SectionContainer>
          <Heading className="heading">{data.heading}</Heading>
          <BlurbP className="blurb-p">{data.blurb}</BlurbP>
          <ViewAllButton className="view-all-button" role="button">
              <a href={"https://www.overstock.com" + data.downloadButtonUrl} rel="noopener noreferrer" target="_blank">{data.downloadButtonText}</a>
          </ViewAllButton>
          <div className="blurb-sub-text">
            <p>{data.blurbSubtext}</p>
            <p>
              <a
                href={data.blurbLinkUrl}
                style={{textDecoration: 'underline'}}
              >
                {data.blurbLinkText}
              </a>
            </p>
          </div>
        </SectionContainer>
      </PressKitSection>
    );
  }
}

export default PressKit;
