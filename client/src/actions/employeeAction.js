import { employeeConstants } from '../helpers/constants';
import { userService } from '../services/userService';

export const employeeActions = {
    fetchDetails
};

function fetchDetails() {
    return dispatch => {
        dispatch(request());
        userService.fetchEmployees()
            .then(
                data => {
                    dispatch(success(data.data));
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: employeeConstants.REQUEST, user } }
    function success(payload) { return { type: employeeConstants.SUCCESS, payload } }
    function failure(error) { return { type: employeeConstants.FAILURE, error } }
}