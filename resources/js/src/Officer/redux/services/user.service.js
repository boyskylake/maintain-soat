import { authHeader } from "../../../helpers";
// import axios from 'axios';
// import { NotificationManager } from "react-notifications";
import toastr from "toastr";

function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ username, password }),
    };

    return axios(`/api/v1/officer/auth/login`, requestOptions)
        .then(_handleResponseAPIsuc)
        .catch(_handleResponseAPIerr)
        .then((user) => {
            // login successful if there's a oauth token in the response
            if (user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("user", JSON.stringify(user));

                toastr.success("login success", "Success");
            }

            return user;
        });
}

function refresh(refresh_token) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ refresh_token }),
    };

    return axios(`/api/v1/officer/auth/refresh`, requestOptions)
        .then(_handleResponseAPIsuc)
        .catch(_handleResponseAPIerr)
        .then((user) => {
            // login successful if there's a jwt token in the response
            if (user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("user", JSON.stringify(user));

                toastr.success("refresh success", "Success");
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
    };

    axios(`/api/v1/officer/auth/logout`, requestOptions)
        .then((res) => res.data)
        .then((res) => {
            if (res.message) {
                toastr.success(res.message, "success");
            }
        })
        .catch((err) => {
            // console.log(err);
        });
    localStorage.removeItem("user");
}

function getAuthUser() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: "GET",
        headers: authHeader(),
    };

    return axios(`/api/v1/officer/user`, requestOptions)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            // if (err.response.status == 401) {
            //     localStorage.removeItem("user");
            // }
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
    const error = (errors.data && errors.data.message) || errors.statusText;
    error && toastr.error(errors.data.message, "Error");

    return Promise.reject(error);
}

export const userService = {
    login,
    refresh,
    logout,
    getAuthUser,
};
