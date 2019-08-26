import React, { Component } from 'react';
import Careers from '../pages/Careers';

class Root extends Component {
    render() {
        if(!this.props.data) return <div></div>
        return <Careers data={this.props.data}/>
    }
}

export default Root;
