import React, { Component } from 'react';
import timelineData from './timelineData';
import { Heading } from '../../styled-components/global';
import ReactHtmlParser from 'react-html-parser';
import { OurHistory, MobileSelect, HistoryListContainer, Timeline_Div, YearsList, TimelineBubble, HistoryImage, HistoryList, Timeline_Line } from '../../styled-components/timeline';

class Timeline extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedYear: 1999
    }
  }
  changeYear(e,year){
    let val = year ? year : e.target.value
    this.setState({
      selectedYear: val
    });
  }
  render(){
    //changed to Caps
    const { selectedYear } = this.state;
    return (
      <OurHistory id="our-history">
           <Heading className="heading">Our History</Heading>
           <MobileSelect
              className="mobileSelect"
              aria-label="Select a Year to Explore Our History"
              onChange={(e) => { this.changeYear(e)}}
            >
             {timelineData.map((data, index) => {
                return <option key={index} data-related={data.year} value={data.year} defaultValue={selectedYear}>{data.year}</option>
             })}
           </MobileSelect>
           <Timeline_Div id="timeline">
             <YearsList className="years-list">
                {
                  timelineData.map((data, index) => {
                    return (
                      <li key={index} onClick={(e) => { this.changeYear(e,data.year)}}>
                        {data.year}
                        <TimelineBubble className="timeline-bubble" data-related={data.year}>
                          <span className={"bubble " + (selectedYear == data.year ? "active-bubble" : "")}> </span>
                        </TimelineBubble>
                      </li>
                    )
                  })
                }
                <Timeline_Line className="timeline-line"/>
             </YearsList>
           </Timeline_Div>
           {
             timelineData.map((data, index) => {
               return (
                 selectedYear == data.year ?
                 (
                   <HistoryListContainer
                      key={index}
                      id={data.year}
                      className="history-list-container"
                   >
                     <HistoryImage className="history-image" src={data.historyImg} alt={data.year + "'s Homepage"}/>
                     <HistoryList className="history-list">
                       <h2>{data.year}: A Closer Look</h2>
                       <ul>
                         {
                           data.infoList.map((info, idx) =>{
                             return (
                               <li key={idx} className="history-list-item">
                                 <h4>{info.date}:</h4>
                                 <p>{ReactHtmlParser(info.value)}</p>
                               </li>
                             )
                           })
                         }
                       </ul>
                     </HistoryList>
                   </HistoryListContainer>
                 ) : ""
               )
             })
           }
      </OurHistory>
    )
  }
}

export default Timeline;
