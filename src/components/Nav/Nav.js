import React, {Component} from "react";
import  { connect } from "react-redux";
import {alerquit, alerthide, alertshow} from 'actions/alert';

import Hello from "../Hello/Hello"

class Nav extends Component {

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
                <Hello alert = {this.props}/>
                <div>{this.props.alert.alert.alertText}</div>
                <div onClick={() => this.props.alertshow("dd",false)}>
                    出现弹框
                </div>
            </div>
        )
    }
}

const mapToState = (state) =>{
    return {
        alert:state.alert
    }
}
const mapDispathAction = (dispatch) =>{
    return {
        alerquit:() => {
            dispatch(alerquit())
        },
        alerthide:() => {
            dispatch(alerhide())
        },
        alertshow:(text,status) => {
            dispatch(alertshow(text,status))
        },
    }
}

export default connect(mapToState,mapDispathAction)(Nav)