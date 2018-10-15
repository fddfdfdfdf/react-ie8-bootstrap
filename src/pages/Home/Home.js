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
                <div>this is home~</div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-3"
                             style={{backgroundColor: '#dedef8',boxShadow:
                                     'inset 1px -1px 1px #444, inset -1px 1px 1px #444'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-xs-6 col-sm-3"
                             style={{backgroundColor: '#dedef8',boxShadow:
                                     'inset 1px -1px 1px #444, inset -1px 1px 1px #444'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut.
                            </p>
                        </div>

                        <div className="clearfix visible-xs"></div>

                        <div className="col-xs-6 col-sm-3"
                             style={{backgroundColor: '#dedef8',boxShadow:
                                     'inset 1px -1px 1px #444, inset -1px 1px 1px #444'}}>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="col-xs-6 col-sm-3"
                             style={{backgroundColor: '#dedef8',boxShadow:
         'inset 1px -1px 1px #444, inset -1px 1px 1px #444'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim
                            </p>
                        </div>
                    </div>
                </div>
                <li><Link to="/page1/ff?order=123&ff=ss" replace>Page1</Link></li>
                <div>当前计数：{this.state.count}</div>
                <button onClick={() => this._handleClick()}>自增</button>
            </div>
        )
    }
}