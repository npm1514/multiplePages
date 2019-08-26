import React, { Component } from 'react';
import Modal from 'overstock-component-library/lib/Modal';
import Banner from '../components/Banner';
import Form from '../components/caresPage/Form';
import Articles from '../components/caresPage/Articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heading, SectionContainer, BlurbP } from '../styled-components/global';
import { BlurbCitation, BreakSection, BreakMod, BreakModBlurb, DonationBlurb, SupportSection, ProjectsBlurbSection, ModalWrapper } from '../styled-components/cares';

class Cares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    render() {
        const { cares, caresArticles } = this.props.data;
        return (
            <div className="cares-page">
                <Header page="cares"/>
                <Banner data={{ heading: 'Overstock Cares' }} img="https://ak1.ostkcdn.com/img/mxc/20180913_cares_hero_bg_v2.png" />
                <BreakSection className="cares-blurb-section blurb-section">
                  <SectionContainer className="max-width-container">
                      <Heading className="heading">{cares.caresBlurb.heading}</Heading>
                      <BlurbP className="blurb-p">{cares.caresBlurb.quote}</BlurbP>
                      <BlurbCitation className="blurb-citation">
                        <BlurbP>{cares.caresBlurb.quoted[0]}<br />{cares.caresBlurb.quoted[1]}</BlurbP>
                      </BlurbCitation>
                      <BlurbP className="blurb-p">{cares.caresBlurb.blurb}</BlurbP>
                  </SectionContainer>
                </BreakSection>
                <BreakSection className="break-blurb-section break-section">
                    <BreakMod className="left-break break-mod">
                        <div className="break-wrapper">
                            <Heading className="heading">{cares.partnerships.heading}</Heading>
                            {
                              cares.partnerships.partners.map(partner => (
                                  <BreakModBlurb className="break-mod-blurb">
                                      <img
                                          alt={partner.altText}
                                          src={partner.image}
                                      />
                                      <p>
                                          {partner.blurb}<br />
                                          <a href={partner.link}><strong>Learn More ›</strong></a>
                                      </p>
                                  </BreakModBlurb>
                              ))
                            }
                        </div>
                    </BreakMod>
                    <BreakMod className="right-break break-mod">
                        <div className="break-wrapper">
                            <Heading className="heading">{cares.donationRequests.heading}</Heading>
                            <DonationBlurb className="donation-blurb">
                                <h3>{cares.donationRequests.subHeading}</h3>
                                <p>{cares.donationRequests.reviewText}</p>
                                <p>Click here to review our <a href={cares.donationRequests.reviewLink} target="_blank" rel="noopener noreferrer">donation policy.</a></p>
                                <div className="button-wrapper">
                                    <a className="submit-button" onClick={() => this.toggleModal()}>{cares.donationRequests.buttonText}</a>
                                </div>
                                <p style={{marginTop: "24px"}}>*If you submitted a donation request through this portal from June through July of 2019 and did not receive response, your request may have been missed due to a technical error. Please resubmit to ensure it was viewed. Thank you.</p>
                            </DonationBlurb>
                        </div>
                    </BreakMod>
                </BreakSection>
                <SupportSection className="support-section">
                    <SectionContainer className="max-width-container">
                        <Heading className="heading">{cares.groupSupport.heading}</Heading>
                        <p>{cares.groupSupport.blurb}</p>
                    </SectionContainer>
                </SupportSection>
                <BreakSection className="projects-blurb-section break-section">
                    <BreakMod className="left-break break-mod">
                      <div className="break-wrapper">
                        <Heading className="heading">{cares.donationHighlights.heading}</Heading>
                          <iframe
                              title={cares.donationHighlights.videoTitle}
                              src={cares.donationHighlights.videoSrc}
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                          />
                      </div>
                    </BreakMod>
                      {
                        caresArticles.articles && caresArticles.articles.length ?
                        <Articles data={caresArticles.articles} /> : ""
                      }
                </BreakSection>
                <ModalWrapper>
                  <SectionContainer>
                    <Modal
                        size="lg"
                        isOpen={this.state.modalOpen}
                        onClose={this.toggleModal}
                        header={cares.donationForm.heading}
                        content={<Form />}
                    />
                  </SectionContainer>
                </ModalWrapper>
              <Footer/>
            </div>
        );
    }
}

export default Cares;
