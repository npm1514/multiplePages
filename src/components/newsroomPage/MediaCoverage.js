/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Slider from 'react-slick';
import { SectionContainer, Heading } from '../../styled-components/global';
import { FeaturedCarouselWrapper } from '../../styled-components/newsroom';

class MediaCoverage extends Component {
    constructor(props){
      super(props);
    }
    render(){
      const { data } = this.props;
      const settings = {
        arrows: true,
        className: 'featured-carousel',
        dots: false,
        draggable: true,
        infinite: false,
        useCSS: true,
        nextArrow: <a/>,
        prevArrow: <a/>,
        lazyLoad: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1560,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      }
      return (
          <div className="featured-carousel-section small-padding-section lazy-load-section">
              <SectionContainer className="max-width-container">
                  <Heading className="heading">{data.heading}</Heading>
                  <FeaturedCarouselWrapper className="featured-carousel-wrapper">
                    <Slider {...settings}>
                        {
                          data.slides.map((slide, index) => (
                              <div key={index} className="carousel-slide">
                                  <img alt="article publisher logo" src={slide.image} />
                                  <p className="featured-slide-title"><strong>{slide.heading}</strong></p>
                                  <p className="featured-slide-date">{slide.date}</p>
                                  <p className="featured-slide-content">{slide.content}</p>
                                  <a href={slide.link} rel="noopener noreferrer" target="_blank"><strong>Read More ›</strong></a>
                              </div>
                          ))
                        }
                    </Slider>
                  </FeaturedCarouselWrapper>
              </SectionContainer>
          </div>
      );
    }
}

export default MediaCoverage;
