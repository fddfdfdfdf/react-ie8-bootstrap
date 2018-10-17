import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
           <div>

           </div>
        )
    }
}