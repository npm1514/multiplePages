import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { BlurbSection, ContactUsGrid, ContactColumn, LinkDecoration } from '../styled-components/contact';
import { BlurbP, Heading } from '../styled-components/global';

class Contact extends Component {
    render(){
      return (
          <div className="contact-page">
              <Header page="contact"/>
              <Banner data={{ heading: 'Contact Us' }} img="https://ak1.ostkcdn.com/img/mxc/20170817-contact-us-banner.png" />
              <BlurbSection className='blurb-section'>
                <Heading className='heading'>Have Questions</Heading>
                <BlurbP className='blurb-p'>We're happy to answer any questions you may have. Keep in touch by contacting any of the following departments.</BlurbP>
              </BlurbSection>

              <ContactUsGrid className='contact-us-grid'>
                <ContactColumn className='contact-column'>
                  <div>
                    <h4>Headquarters</h4>
                    <p>799 W. Coliseum Way<br/>
                    Midvale, UT 84047 <br/>
                  <a href="tel:8019473100"> Phone: (801) 947-3100</a></p>
                  </div>

                  <div>
                    <h4>European Development Center</h4>
                    <p>Hanson Building<br />
                       Cleveragh Retail Park<br />
                       Sligo, Ireland F91 P7N2<br />
                     <a href="tel:353719136100"> Phone: (353) 7191-36100</a></p>
                  </div>

                  <div>
                    <h4>Customer Care</h4>
                    <p>Online: <LinkDecoration className="link-decoration" href="//help.overstock.com"  target="_blank"> help.overstock.com</LinkDecoration><br/>
                     <a href="tel:8008432446">Phone: (800) 843-2446</a><br/>
                     Customer Support Email: <LinkDecoration className="link-decoration"href="mailto:customercare@overstock.com">customercare@overstock.com</LinkDecoration><br/>
                   Customer Care Leadership Email: <LinkDecoration className="link-decoration"href="mailto:customercareleadership@overstock.com">customercareleadership@overstock.com</LinkDecoration></p>
                  </div>
                </ContactColumn>

                <ContactColumn className='contact-column'>
                  <div>
                    <h4>Investor Relations</h4>
                    <p>Email: <LinkDecoration className="link-decoration" href="mailto:ir@overstock.com">ir@overstock.com</LinkDecoration></p>
                  </div>
                  <div>
                    <h4>Media Relations</h4>
                    <p>Email: <LinkDecoration className="link-decoration" href="mailto:pr@overstock.com">pr@overstock.com</LinkDecoration><br/>
                      <a href="tel:8019473564">Phone: (801) 947-3564</a></p>
                  </div>
                  <div>
                    <h4>Transfer Agent</h4>
                    <p>Computershare Investor Services<br/>
                    P.O. Box 43023<br/>
                    Providence, RI 02940-3023<br/>
                  <a href="tel:7815752879">Phone: (781) 575-2879</a><br/>
                    Fax: (781) 575-3605<br/>
                  Email: <LinkDecoration className="link-decoration" href="mailto:shareholder@computershare.com">shareholder@computershare.com</LinkDecoration><br/></p>
                  </div>
                </ContactColumn>

                <ContactColumn className='contact-column'>
                  <div>
                    <h4>Product Recalls</h4>
                    <p>Online: <LinkDecoration className="link-decoration" href="//www.overstock.com/product-recalls" target="_blank">www.overstock.com/product-recalls</LinkDecoration></p>
                  </div>
                  <div>
                    <h4>Board of Directors</h4>
                    <p>Email: <LinkDecoration className="link-decoration" href="mailto:boardofdirectors@overstock.com">boardofdirectors@overstock.com</LinkDecoration></p>
                  </div>
                  <div>
                    <h4>Recruiting</h4>
                    <p>Email: <LinkDecoration className="link-decoration" href="mailto:careers@overstock.com">careers@overstock.com</LinkDecoration></p>
                    <p>Email: <LinkDecoration className="link-decoration" href="mailto:irelandcareers@overstock.com">irelandcareers@overstock.com</LinkDecoration></p>
                  </div>
                  <div>
                    <h4>Vendor Offers</h4>
                    <p>Online: <LinkDecoration className="link-decoration" href="//www.overstock.com/partner" target="_blank">www.overstock.com/partner</LinkDecoration> </p>
                  </div>
                </ContactColumn>
              </ContactUsGrid>
              <Footer/>
          </div>
      );
    }
}

export default Contact;
