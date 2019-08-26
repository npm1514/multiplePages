import React, { Component } from 'react';
import Banner from '../components/Banner';
import PressRelease from '../components/PressRelease';
import Header from '../components/Header';
import Footer from '../components/Footer';

class PressReleases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allNewsfeedData: []
        };
        this.fetchPRs = this.fetchPRs.bind(this);
    }
    fetchPRs(){
      fetch('/get-press-releases')
        .then((response) => {
            if(response.status !== 200) throw Error(response.statusText);
            return response.json();
        }).then((json) => {
            this.setState({
              allNewsfeedData: json
            })
        }).catch((err) => console.log(err))
    }
    componentDidMount(){
      this.fetchPRs();
    }
    render(){
      const { pressReleases, pressReleaseData, otherData } = this.props.data;
      const { allNewsfeedData } = this.state;
      return (
          <div>
              <Header page="newsroom"/>
              <Banner data={pressReleases} />
              <PressRelease
                data={pressReleases}
                newsfeedData={allNewsfeedData.length ? allNewsfeedData : pressReleaseData}
                page={"press-releases"}
              />
              <Footer/>
          </div>
      );
    }
}

export default PressReleases;
