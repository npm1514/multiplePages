import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { Heading, BlurbP, ViewAllButton } from '../styled-components/global';
import { BlurbSection, CareersPage } from '../styled-components/careers';


class Careers extends Component {
    render(){
      return (
          <CareersPage className="careers-page">
            <Header page="careers"/>
            <Banner data={{ heading: 'Join Our Team' }} img="https://ak1.ostkcdn.com/img/mxc/20170817-careers-hero-banner.png" />
            <BlurbSection className="blurb-section">
                  <Heading className="heading">Our Culture</Heading>
                  <BlurbP className="blurb-p">Situated a few minutes' drive from Salt Lake City, Utah, Overstock is an original resident of the 'Silicon Slopes,' one of the fastest growing technology hubs in the country. We're game changers, problem solvers, and collaborators. We are a passionate group of creative people who love and believe in the work we do. Oh, and did we mention we're pretty good at table tennis? Each one of us has a unique role in a fast-paced, tech-driven ecommerce landscape.</BlurbP>
            </BlurbSection>
            <div className="photo-break">
                <div className="careers-culture-mod-1 ">
                    <iframe
                      frameborder="0"
                      height="100%"
                      width="100%"
                      src="https://www.youtube.com/embed/tg0x2j62lVQ?rel=0&amp;showinfo=0"
                      className="video-background"
                      title="Why Overstock?"
                    ></iframe>
                </div>
                <div className="careers-culture-mod-2 ">
                    <iframe
                      frameborder="0"
                      height="100%"
                      width="100%"
                      src="https://www.youtube.com/embed/IwAGZTC2Dpg?rel=0&amp;showinfo=0"
                      className="video-background"
                      title="Overstock Peace Coliseum"
                    ></iframe>
                </div>
            </div>
            <BlurbSection className="career-benefits">
              <Heading className="heading">Our Benefits</Heading>
              <div className="benefits-list">
                <img src="https://ak1.ostkcdn.com/img/mxc/20170817-careers-benefits.png" alt=""/>
                <ul>
                    <li><p> - 401k (6% match)</p></li>
                    <li><p> - New 19 acre Corporate Campus with one of the most unique buildings in the State</p></li>
                    <li><p> - Onsite Health Clinic</p></li>
                    <li><p> - Onsite Fitness Center with group fitness classes and trainers</p></li>
                    <li><p> - Onsite Daycare Center</p></li>
                    <li><p> - Onsite Cafe with additional Coffee and Juice Bar</p></li>
                    <li><p> - Onsite Indoor Bike Storage </p></li>
                    <li><p> - Conveniently located feet from UTA Public Transit Station</p></li>
                    <li><p> - Employee Wellness Program </p></li>
                    <li><p> - Tuition Reimbursement</p></li>
                    <li><p> - Summer Party at Lagoon, the state's biggest theme park</p></li>
                    <li><p> - Employee Fall Concert (Past performers include: Neon Trees, Snoop Dogg and Bret Michaels)</p></li>
                    <li><p> - Competitive Salaries and PTO Plan</p></li>
                    <li><p> - Medical, Dental, Vision coverage</p></li>
                    <li><p> - Life Insurance, Short and Long-Term Disability coverage</p></li>
                    <li><p> - Many more voluntary and corporate benefits</p></li>
                </ul>
              </div>
            </BlurbSection>
            <div className="careers-section">
              <BlurbSection className="blurb-section">
                <Heading className="heading">Careers</Heading>
                <BlurbP className="blurb-p">Most of our work is done in-house, and we're proud of it. Each team is a part of creating the best experience for our customers. We ask for a lot: that's why we hire the best. Do you have what it takes?</BlurbP>
                <ViewAllButton className="view-all-button" role="button">
                  <a
                    href="https://overstock.wd5.myworkdayjobs.com/Overstock_Careers?tid=Careers:05:WorkdayPostions:ViewAll"
                    target="_blank"
                  >View All Positions</a>
                </ViewAllButton>
              </BlurbSection>
            </div>
            <div className="careers-why-utah">
              <Heading className="heading">Living in Utah</Heading>
              <BlurbP className="blurb-p">Mountains to the north. And east. And west. <br/>Red rock to the south. Bars, restaurants, and shops in our historic capital city. Lakes, rivers, and world-class ski resorts. <br/>This is life in Utah.</BlurbP>
            </div>
            <Footer/>
          </CareersPage>
      );
    }
}

export default Careers;
