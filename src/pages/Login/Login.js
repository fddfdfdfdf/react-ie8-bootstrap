import React, {Component} from "react";
import  { connect } from "react-redux";
import './Login.css'
import { DatePicker } from 'antd';

export default class Hello extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return (
            <div>
                <DatePicker></DatePicker>
            </div>
        )
    }
}
