import React, { Component } from 'react';
import { SectionContainer, Heading } from '../../styled-components/global';
import { TextSection, ModalsSection, ArticleView, Overlay, ImgWrap, ButtonClose, ModalText, VRIframe } from '../../styled-components/newsroom';
import ActionClose from 'overstock-component-library/lib/Icons/action/Close';

class PrivateLabel extends Component {
  constructor(props){
    super(props);
    this.state = {
      openArticle: ""
    }
  }
  openCloseArticle(id, e){
    if(this.state.openArticle && (e.target.className == 'modal-content' || e.target.tagName == "path" || e.target.tagName == "svg")){
      this.setState({
        openArticle: ""
      })
    } else {
      this.setState({
        openArticle: id
      })
    }
  }
  render(){
    const { data } = this.props;
    const { openArticle } = this.state;
    return (
        <div className="section-private-label section-content" style={{marginBottom: "24px"}}>
            <SectionContainer className="section-container">
                <div className="heading-section">
                    <Heading style={{lineHeight: '1.2'}}>Overstock&apos;s &quot;Not Another Trend Survey&quot; Results:</Heading>
                </div>
                <TextSection className="text-section">
                    <p>In April 2018, Overstock fielded an online survey of consumers around the United States to find out how the latest and hottest trends impact their purchasing behaviors.</p>
                    <p>It turns out that a lot of the trends out there are just noise! While some shoppers do follow trends to inspire their home decor, most don&apos;t care at all about trends when building their dream home.</p>
                </TextSection>
                <div className="video-section">
                    <div className="video-box">
                        <div id="vrView1Video" className="video-wrapper">
                            <VRIframe
                                title="Overstock.com Virtual Reality Private Label Experience"
                                src="https://www.youtube.com/embed/UOIk3UvJBgY?rel=0"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                        <TextSection>
                            <p><span>360 Degree Tour Full of Trends Room:</span> Only 27% of consumers are committed to shopping trend, making sure their decor is full of the &quot;hottest&quot; items.</p>
                            <p>However, 73% of consumers don&apos;t pay attention to trends when styling their homes, preferring to mix and match across styles and incorporating their favorite items, regardless of what&apos;s on trend.</p>
                        </TextSection>
                    </div>
                </div>
                <ModalsSection className="modals-section">
                  {
                    data.articles.map((article, index) => {
                      return (
                        <div
                          key={index}
                          className="article-mod"
                          onClick={(e) => {this.openCloseArticle(article.dataAttribute, e)}}
                        >
                            <ArticleView className="article-view">
                                <img alt={article.topText} src={'https://www.overstock.com' + article.image} />
                                <p>{article.topText}<br />{article.bottomText}</p>
                            </ArticleView>
                            {
                              openArticle == article.dataAttribute ?
                              <Overlay className="article-modal overlay" >
                                <div className="modal-content">
                                    <ImgWrap className="imgWrap">
                                      <ButtonClose className="button-close">
                                        <ActionClose
                                          className="button-close"
                                          height="40px"
                                          width="40px"
                                          fill="#00000080"
                                          alt="close icon"
                                        />
                                      </ButtonClose>
                                      <img data-modal={article.dataAttribute} alt={article.topText} src={'https://www.overstock.com' + article.image} />
                                        <ModalText className="modal-text">
                                            <a className="modal-link" href={'https://www.overstock.com' + article.image} target="_blank" rel="noopener noreferrer" download>
                                                Download Infographic
                                            </a>
                                        </ModalText>
                                    </ImgWrap>
                                </div>
                              </Overlay>
                              : ""
                            }
                        </div>
                      )
                    })
                  }
                </ModalsSection>
            </SectionContainer>
        </div>
    );
  }
}

export default PrivateLabel;
