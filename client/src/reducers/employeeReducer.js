import { employeeConstants } from '../helpers/constants';

const initialState = {isLoading: false, employees: []}

export function employee(state = initialState, action) {
    switch (action.type) {
    case employeeConstants.REQUEST:
        return {
        ...state,
        isLoading: true,
        };
    case employeeConstants.SUCCESS:
        return {
        ...state,
        isLoading: false,
        employees: action.payload
        };
    case employeeConstants.FAILURE:
        return {
        ...state,
        isLoading: false
        };
    default:
        return state
    }
}