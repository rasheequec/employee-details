import { userConstants } from '../helpers/constants';
import { userService } from '../services/userService';
import { history } from '../helpers/history';

export const userActions = {
    signup
};

function signup(data) {
    return dispatch => {
        debugger
        dispatch(request({ data }));
        userService.signup(data)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('login');
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}