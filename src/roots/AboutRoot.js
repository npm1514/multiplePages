import React, { Component } from 'react';
import About from '../pages/About';

class Root extends Component {
    render() {
        if(!this.props.data) return <div></div>
        return <About data={this.props.data}/>
    }
}

export default Root;
