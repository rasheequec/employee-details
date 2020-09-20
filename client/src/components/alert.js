import React from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../actions/alertAction'
const AlertMessage = () => {
    const dispatch = useDispatch();
    const alertReducer = useSelector(state => state.alert);
    const clearAlert = () => {
        setTimeout(() => {
            dispatch(alertActions.alertClear())
        }, 3000);
    }
    return(
        <div>
            {alertReducer.message && <Alert variant={alertReducer.type}>
            {alertReducer.message}
             </Alert>}
             {alertReducer.message && clearAlert()}
        </div>
    )
}

export default AlertMessage