import { userConstants } from '../helpers/constants';
import { userService } from '../services/userService';
import { alertActions } from './alertAction'
import { history } from '../helpers/history';

export const userActions = {
    signup,
    login,
    logout
};

function signup(data) {
    return dispatch => {
        dispatch(request({ data }));
        userService.signup(data)
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(alertActions.alertSuccess('You have successfully registered. Please login to continue.'))
                    history.push('login');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.alertError('Something went wrong. Please try again'));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function login(data) {
    return dispatch => {
        dispatch(request({ data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(alertActions.alertSuccess('You have successfully logged in.'))
                    history.push('home');
                },
                error => {
                    dispatch(alertActions.alertError(error))
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(data) {
    return dispatch => {
        userService.logout(data)
            .then(
                user => {
                    dispatch(alertActions.alertSuccess('You have successfully logged out.'))
                    history.push('login');
                },
                error => {
                    dispatch(alertActions.alertError('Something went wrong. Please try again.'))
                }
            );
    };
}