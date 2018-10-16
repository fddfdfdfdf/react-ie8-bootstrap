import React, {Component} from "react";
import "./Hello.css";
import  { connect } from "react-redux";
import {alerquit, alerthide, alertshow} from 'actions/alert';

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
        console.log(this.props)
        return (
            <table className="alerCommon" style={{display:(this.props.alert.alert.alert.alertNoBtnIsShow || this.props.alert.alert.alert.alertBtnIsShow)?'block':'none'}}>
                <tbody>
                   <tr>
                    <td>
                        <div className="modal-dialog" style={{display:this.props.alert.alert.alert.alertNoBtnIsShow?'block':'none'}}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true" onClick={() => console.log(this.props.alert.alerquit('',true))}>×</span><span className="sr-only">Close</span></button>
                                    <h4 className="modal-title" id="modalLabel">范德萨范德萨</h4>
                                </div>
                                <div className="modal-body">
                                    {this.props.alert.alert.alert.text}
                                </div>
                            </div>
                        </div>
                        <div className="modal-dialog" style={{display:this.props.alert.alert.alert.alertBtnIsShow?'block':'none'}}>
                             <div className="modal-content">
                            <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="modalLabel">fdsfds</h4>
                            </div>
                            <div className="modal-body">
                            <p>fdsfdsfdsf</p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-default cancel" data-dismiss="modal">确认</button>
                            <button type="button" className="btn btn-primary ok" data-dismiss="modal">取消</button>
                            </div>
                            </div>
                         </div>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
