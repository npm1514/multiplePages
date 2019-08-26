import React, { Component } from 'react';
import Contact from '../pages/Contact';

class Root extends Component {
    render() {
        if(!this.props.data) return <div></div>
        return <Contact data={this.props.data}/>
    }
}

export default Root;
