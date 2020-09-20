import {API_URL, USER_TOKEN} from '../helpers/constants';

export const userService = {
    signup,
    login,
    logout,
    fetchEmployees
};

function signup(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`${API_URL}/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function login(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`${API_URL}/login`, requestOptions)
        .then(
            handleResponse)
        .then(user => {
            localStorage.setItem(USER_TOKEN, user.token)
            return user;
        });
}

function logout(data) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'x-auth': localStorage.getItem(USER_TOKEN)},
    };

    return fetch(`${API_URL}/logout`, requestOptions)
        .then(handleResponse)
        .then(data => {
            localStorage.clear()
            return data;
        });
}

function fetchEmployees() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-auth': localStorage.getItem(USER_TOKEN) },
        body: JSON.stringify({})
    };

    return fetch(`${API_URL}/list`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}