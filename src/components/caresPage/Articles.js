import React, { Component } from 'react';
import { Heading, BlurbP, ViewAllButton, SectionContainer } from '../../styled-components/global';
import { BreakMod, BreakModBlurb } from '../../styled-components/cares';

class Articles extends Component {
  render(){
    const { data } = this.props;
    return (
        <BreakMod className="right-break break-mod">
          <div className="break-wrapper">
            <Heading className="heading">previous projects</Heading>

                  {
                    data.map(article => (
                      <BreakModBlurb className="break-mod-blurb">
                          <img
                              alt={article.title}
                              src={article.image}
                          />
                          <p>
                              <a className="articleLink" href={article.link}>{article.title}</a>
                              {article.blurb}
                          </p>
                      </BreakModBlurb>
                    ))
                  }
              </div>
        </BreakMod>
    );
  }
}

export default Articles;
