import React, { Component} from 'react';
import Ticker from './Ticker';
import { SectionContainer, Heading, BlurbP, ViewAllButton } from '../../styled-components/global';
import { BlurbSubsection } from '../../styled-components/newsroom';

 class InvestorRelations extends Component {

   render(){
     const { data, tickerData } = this.props;
     return (
         <div className="investor-relations-section blurb-section">
             <SectionContainer className="section-container">
                 <Heading className="heading">{data.heading}</Heading>
                 <BlurbSubsection className="chart-container blurb-subsection">
                     {tickerData ? <Ticker data={tickerData} /> : ""}
                 </BlurbSubsection>
                 <BlurbSubsection className="text-subsection blurb-subsection">
                     <BlurbP className="blurb-p">{data.blurb}</BlurbP>
                     <ViewAllButton className="view-all-button" role="button">
                        <a
                         href={data.blurbButtonUrl}
                         rel="noopener noreferrer"
                         target="_blank"
                        >{data.blurbButtonText}</a>
                    </ViewAllButton>
                 </BlurbSubsection>
             </SectionContainer>
         </div>
     );
   }
}

export default InvestorRelations;
