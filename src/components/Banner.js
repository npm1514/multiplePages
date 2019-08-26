import React, { Component } from 'react';
import { HeroImg, HeroImgH1 } from '../styled-components/global';

class Banner extends Component {
  render(){
    const { data, img } = this.props;
    return (
        <HeroImg
          style={{backgroundImage: img ? "url('"+img+"')" : "url('https://ak1.ostkcdn.com/img/mxc/20180604_newsroom_hero_bg.png')", backgroundPosition: "center"}}
          className="newsroom-hero-img common-hero"
        >
            <HeroImgH1>{data.heading}</HeroImgH1>
        </HeroImg>
    );
  }
}

export default Banner;
