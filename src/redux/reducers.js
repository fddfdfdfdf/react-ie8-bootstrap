import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import alert from 'reducers/alert';

export default combineReducers({
    counter,
    alert,
    userInfo
});