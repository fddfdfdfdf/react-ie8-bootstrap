import {ALERTQUIT,ALERTHIDE,ALERTSHOW} from '../actions/alert';
import {is,fromJS,Map} from "immutable"
/*
* 初始化state
 */

let data = fromJS({
    a: {
        b: [1, 2, 3],
        c: 40
    }
});

console.log(data.get('a').getIn(['b']).toJS())

const initState = {
    alert: {
        alertText:"",
        alertNoBtnIsShow:false,
        alertBtnIsShow:false,
    }
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case ALERTQUIT:
            return {
                alert: {
                    alertText:"",
                    alertNoBtnIsShow:false,
                    alertBtnIsShow:false,
                }
            };
        case ALERTHIDE:
            return {
                alert: {
                    alertText:"",
                    alertNoBtnIsShow:false,
                    alertBtnIsShow:false,
                }
            };
        case ALERTSHOW:
            console.log('2')
            return {
                alert: {
                    alertText:action.text,
                    alertNoBtnIsShow:!action.status,
                    alertBtnIsShow:action.status,
                }
            };
        default:
            return state
    }
}
