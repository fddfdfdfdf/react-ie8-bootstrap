import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1" replace>Page1</Link></li>
                <li><Link to="/counter" replace>Counter</Link></li>
                <li><Link to="/userinfo" replace>UserInfo</Link></li>
            </ul>
        )
    }
}