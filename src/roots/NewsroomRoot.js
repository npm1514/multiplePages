import React, { Component } from 'react';
import Newsroom from '../pages/Newsroom';

class Root extends Component {
    render() {
        if(!this.props.data) return <div></div>
        return <Newsroom data={this.props.data}/>
    }
}

export default Root;
