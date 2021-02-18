import toastr from "toastr";

function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
            Authorization: "Bearer " + localStorage.getItem("linetoken"),
        },
        data: JSON.stringify({ username, password }),
    };

    return axios(`/api/v1/linebot/login`, requestOptions)
        .then(_handleResponseAPIsuc)
        .catch(_handleResponseAPIerr)
        .then((res) => {
            // login successful if there's a oauth token in the response
            if (res) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("user", res.user);
                toastr.success("login success", "Success");
            }

            return res;
        });
}

function getAuthUser() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
            Authorization: "Bearer " + localStorage.getItem("linetoken"),
        },
    };

    return axios(`/api/v1/linebot/user`, requestOptions)
        .then((res) => {
            // localStorage.setItem("linetoken", access_token);
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
    // if (errors.status === 400) {
    //     logout();
    // }
    const error = (errors.data && errors.data.message) || errors.statusText;
    error && toastr.error(error, "Error");

    return Promise.reject(error);
}

export const userService = {
    getAuthUser,
    login,
};
