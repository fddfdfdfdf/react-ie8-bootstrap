import {ALERTQUIT,ALERTHIDE,ALERTSHOW} from '../actions/alert';

/*
* 初始化state
 */


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
