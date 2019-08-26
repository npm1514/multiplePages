import React, { Component } from 'react';
import PressReleases from '../pages/PressReleases';

class Root extends Component {
    render() {
        if(!this.props.data) return <div></div>
        return <PressReleases data={this.props.data}/>
    }
}

export default Root;
