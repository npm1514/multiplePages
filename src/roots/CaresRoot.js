import React, { Component } from 'react';
import Cares from '../pages/Cares';

class Root extends Component {
    render() {
        if(!this.props.data) return <div></div>
        return <Cares data={this.props.data}/>
    }
}

export default Root;
