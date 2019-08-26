import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Timeline from '../components/aboutPage/Timeline';
import Leadership from '../components/Leadership';
import { Heading, BlurbP, ViewAllButton } from '../styled-components/global';
import { AboutPage, BlurbSection, GridBox, OstCaresGridBox } from '../styled-components/about';

class About extends Component {
    render(){
      const { executiveTeam, boardOfDirectors } = this.props.data.about;
      return (
          <AboutPage className="about-page">
              <Header page="about"/>
              <Banner data={{ heading: 'Dream Homes for All' }} img="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-banner-2.png" />
              <BlurbSection className="blurb-section">
                <Heading className="heading">Who We Are</Heading>
                <BlurbP className="blurb-p">Nice to meet you! We are a tech-driven online retailer located near Salt Lake City in the shadow of the Wasatch Mountains. Since our beginnings in 1999, Overstock has evolved from a fledging startup to a billion-dollar online retailer as a result of a hard-working and creative team.</BlurbP>
              </BlurbSection>
              {executiveTeam ? <Leadership data={executiveTeam} /> : ""}
              {boardOfDirectors ? <Leadership data={boardOfDirectors} /> : ""}
              <BlurbSection className="blurb-section">
                <Heading className="heading">What We Value</Heading>
                <BlurbP className="blurb-p">We are passionate about doing our part to make life better. We provide high-quality merchandise, great value, and exceptional customer service. We connect people with products and services in new and unexpected ways. We do our part to create dream homes for all.</BlurbP>
              </BlurbSection>
              <div className="grid">
                <GridBox className="grid-box">
                  <img className="grid-img" src="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-connection.png" alt=""/>
                  <h4>Connections</h4>
                  <p>Connecting the world – it's why we support pet adoptions, local farmers, international artisans, and have the best customer care in the industry.</p>
                </GridBox>
                <GridBox className="grid-box">
                  <img className="grid-img" src="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-entrepreneurship.png" alt=""/>
                  <h4>Entrepreneurship</h4>
                  <p>From opening our website to artists and small businesses to our full embrace of a blockchain future, we're always looking for what's next.</p>
                </GridBox>
                <GridBox className="grid-box">
                  <img className="grid-img" src="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-social-responsibility.png" alt=""/>
                  <h4>Social Responsibility</h4>
                  <p>Overstock actively supports several local and national charities, offers carbon-neutral shipping, and is a fur- and ivory-free retailer.</p>
                </GridBox>
              </div>
              <BlurbSection className="blurb-section timeline">
                <Timeline/>
              </BlurbSection>
              <BlurbSection className="blurb-section overstock-cares">
                <Heading className="heading">Overstock Cares</Heading>
                <div className="grid ost-cares-grid">
                  <OstCaresGridBox className="ost-cares-grid-box">
                    <a href="//pets.overstock.com?TID=AboutUs:07:OSTKCares-2:Pets" target="_blank">
                      <img className="ost-cares-grid-img" src="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-ostk-pets.png" alt=""/>
                      <div className="ost-cares-grid-content">
                        <h4>Overstock Pets</h4>
                        <p>We've paired up with animal shelters across the United States to help you connect with your new best friend. By entering your zip code, you can search for dogs, cats, and other pets available for adoption at local shelters.</p>
                        <div className="ost-cares-learn">Learn More ›</div>
                      </div>
                    </a>
                  </OstCaresGridBox>
                  <OstCaresGridBox className="ost-cares-grid-box">
                    <a href="//www.overstock.com/86156/static.html?TID=AboutUs:07:OSTKCares-3:SpecialOps" target="_blank">
                      <img className="ost-cares-grid-img" src="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-special-ops.png" alt=""/>
                      <div className="ost-cares-grid-content">
                        <h4>Special Operations Warrior Foundation</h4>
                        <p>We're honored to support Special Operations Warrior Foundation (SOWF). Since 1980, SOWF has supported over 1,100 children of the over 1,000 special operations service members.</p>
                        <div className="ost-cares-learn">Learn More ›</div>
                      </div>
                    </a>
                  </OstCaresGridBox>
                  <OstCaresGridBox className="ost-cares-grid-box">
                    <a href="//www.overstock.com/bestfriends?TID=AboutUs:07:OSTKCares-4:BestFriends" target="_blank">
                      <img className="ost-cares-grid-img" src="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-best-friends.png" alt=""/>
                      <div className="ost-cares-grid-content">
                        <h4>Best Friends Animal Society</h4>
                        <p>Partnering with Best Friends Animal Society is a perfect fit for Overstock™. After all, we're neighbors. Like Best Friends, Overstock™ has a base in utah and a national presence.</p>
                        <div className="ost-cares-learn">Learn More ›</div>
                      </div>
                    </a>
                  </OstCaresGridBox>
                </div>
              </BlurbSection>
              <BlurbSection className="blurb-section">
                <Heading className="heading awards-title">Awards &amp; Recognition</Heading>
                <BlurbP className="blurb-p">Industry leaders and influencers recognize Overstock as one of the most trustworthy retail companies in the U.S., ranking high for both customer and employee satisfaction.</BlurbP>
                <div className="awards">
                  <img className="awards-img" src="https://ak1.ostkcdn.com/img/mxc/20170817_partner_Ernst.png" alt="Ernst &amp; Young- Entrepreneur of the Year"/>
                  <img className="awards-img" src="https://ak1.ostkcdn.com/img/mxc/20170817_partner_ABA.png" alt="American Business Award"/>
                  <img className="awards-img" src="https://ak1.ostkcdn.com/img/mxc/20170817_partner_NRF.png" alt="National Retail Foundation"/>
                  <img className="awards-img" src="https://ak1.ostkcdn.com/img/mxc/20170817_partner_top100.png" alt="The Top 100 Retailers"/>
                  <img className="awards-img" src="https://ak1.ostkcdn.com/img/mxc/20170817_partner_WMA.png" alt="Web Marketing Association"/>
                </div>
              </BlurbSection>
              <Footer/>
          </AboutPage>
      );
    }
}

export default About;

// <OstCaresGridBox className="ost-cares-grid-box">
//   <a href="//www.overstock.com/our-story?TID=AboutUs:07:OSTKCares-1:Worldstock" target="_blank">
//     <img className="ost-cares-grid-img" src="https://ak1.ostkcdn.com/img/mxc/20170817-about-us-ostk-worldstock.png" alt=""/>
//     <div className="ost-cares-grid-content">
//       <h4>Worldstock</h4>
//       <p>Worldstock provides a global platform for skilled artisans in developing regions to bring their products to you. 60-70% of sales return to the artisans and their suppliers.</p>
//       <div className="ost-cares-learn">Learn More ›</div>
//     </div>
//   </a>
// </OstCaresGridBox>
