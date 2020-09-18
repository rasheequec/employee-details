import { userConstants } from '../helpers/constants';

const initialState = {isLoading: false}

export function user(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
        isLoading: true,
        };
    case userConstants.LOGIN_SUCCESS:
        return {
        isLoading: false
        };
    case userConstants.LOGIN_FAILURE:
        return {
        isLoading: false
        };
    case userConstants.SIGNUP_REQUEST:
        return {
        isLoading: true
        };
    case userConstants.SIGNUP_SUCCESS:
        return {
        isLoading: false
        };
    case userConstants.SIGNUP_FAILURE:
        return {
        isLoading: false
        };
    default:
        return state
    }
}