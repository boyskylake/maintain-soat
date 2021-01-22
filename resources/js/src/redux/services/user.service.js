import { authHeader } from "../../helpers";
// import axios from 'axios';
import { NotificationManager } from "react-notifications";

function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ email: username, password })
    };

    return axios(`/api/auth/login`, requestOptions)
        .then(_handleResponseAPIsuc)
        .catch(_handleResponseAPIerr)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("user", JSON.stringify(user));

                NotificationManager.success("login success", "Success", 5000);
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: "POST",
        headers: authHeader()
    };

    axios(`/api/auth/logout`, requestOptions)
        .then(res => res.data)
        .then(res => {
            if (res.message) {
                NotificationManager.success(res.message, "success", 5000);
            }
        })
        .catch(err => {
            // console.log(err);
        });
    localStorage.removeItem("user");
}

function getAuthUser() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: "POST",
        headers: authHeader()
    };

    return axios(`/api/auth/getAuthUser`, requestOptions)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            if (err.response.status == 400) {
                localStorage.removeItem("user");
            }
            return err.response;
        });
}

function _handleResponseAPIsuc(response) {
    const data = response.data;
    return data;
}

function _handleResponseAPIerr(err) {
    const errors = err.response;
    if (errors.status === 401) {
        logout();
    }
    if (errors.data.error) {
        NotificationManager.error(errors.data.error, "Error", 5000);
    }
    const error = (errors.data && errors.data.message) || errors.statusText;

    return Promise.reject(error);
}

export const userService = {
    login,
    logout,
    getAuthUser
};
