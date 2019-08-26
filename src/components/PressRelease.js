import React, { Component } from 'react';
import { SectionContainer, BlurbP, Heading, ViewAllButton } from '../styled-components/global';
import { PressReleasesWrapper, PressReleasesYearNav } from '../styled-components/pressReleases';

class PressRelease extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date().getFullYear().toString(),
            years: this.mapYears()
        };
    }

    mapYears(startDate){
      var firstDate = new Date().getFullYear();
      var lastDate = 2000;
      var yearList = []
      for(var i = firstDate; i >= lastDate; i--){
        yearList.push(i.toString());
      }
      return yearList;
    }
    switchYear(year) {
        this.setState({
            currentDate: year
        });
    }

    render() {
        const { data, page, newsfeedData, data: { heading, blurb, options, blurbButtonUrl, blurbButtonText } } = this.props;
        const { currentDate } = this.state;
        let newsfeed = newsfeedData;
        newsfeed = page == "newsroom" ? newsfeed.slice(0,options.limit) : newsfeed;
        return (
            <div className="press-releases-section blurb-section">
                <SectionContainer>
                    <Heading className="heading">{heading}</Heading>
                    <BlurbP className="blurb-p">{blurb}</BlurbP>
                    <PressReleasesWrapper className="press-releases-wrapper">
                        {page == "press-releases" ? (
                          <PressReleasesYearNav className="press-releases-year-nav">
                                <h3>{currentDate}</h3>
                                <ul>
                                    {this.state.years.map((year, index) => (
                                        <span
                                          style={{fontWeight: year == currentDate ? "bold" : "normal"}}
                                          key={index}
                                          onClick={() => { this.switchYear(year); }}
                                        >{year}</span>
                                    ))}
                                </ul>
                            </PressReleasesYearNav>
                          ) : ""
                        }
                        <ul>
                          {
                            newsfeed.map((release, index) => {
                              const calendar = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                              const date = new Date(release.releaseDate.date);
                              const month = date.getMonth();
                              const day = date.getDate();
                              const year = date.getFullYear();
                              const currentSection = year == this.state.currentDate ? 'active-date' : 'non-active-date';
                              return (
                                  <li key={index} className={currentSection}>
                                      <a href={release.link.hostedUrl}>
                                          <p className="press-release-date">{`${calendar[month]} ${day}, ${year}`}</p>
                                          <p className="press-release-title"><strong>{release.title} <span>›</span></strong></p>
                                      </a>
                                  </li>
                              );
                            })
                          }
                        </ul>
                    </PressReleasesWrapper>
                    {
                      page == "newsroom" ? (
                      <ViewAllButton className="view-all-button" role="button">
                          <a href={blurbButtonUrl} rel="noopener noreferrer" target="_blank">{blurbButtonText}</a>
                      </ViewAllButton>) : ""
                    }
                </SectionContainer>
            </div>
        );
    }
}

export default PressRelease;
