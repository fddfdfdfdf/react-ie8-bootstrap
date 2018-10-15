import React, {Component} from 'react';

import './Page1.css';

import image from './images/brickpsert.jpg';

export default class Page1 extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return (
            <div className="page-box">
                {/*this is page1~*/}
                {/*<img src={image}/>*/}
                <div className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">菜鸟教程</a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">iOS</a></li>
                                <li><a href="#">SVN</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        Java
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">jmeter</a></li>
                                        <li><a href="#">EJB</a></li>
                                        <li><a href="#">Jasper Report</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">分离的链接</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">另一个分离的链接</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}