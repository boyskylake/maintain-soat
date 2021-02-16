import { userConstants } from "../constants";
import { userService } from "../services";

// import { history } from "../../../helpers";
// import { NotificationManager } from "react-notifications";

export const userActions = {
    login,
    logout,
    refresh,
    getAuthUser,
};

function login(username, password) {
    return (dispatch) => {
        dispatch(
            request({
                username,
            })
        );

        userService.login(username, password).then(
            (user) => {
                dispatch(success(user));
                // history.push("/officer/home");
            },
            (error) => {
                dispatch(failure(error));
            }
        );
    };

    function request(user) {
        return {
            type: userConstants.LOGIN_REQUEST,
            user,
        };
    }

    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user,
        };
    }

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            error,
        };
    }
}

function refresh() {
    return (dispatch) => {
        dispatch(request());

        let user = JSON.parse(localStorage.getItem("user"));

        if (user && user.refresh_token) {
            userService.refresh(user.refresh_token).then(
                (user) => {
                    dispatch(success(user));
                },
                (error) => {
                    dispatch(failure(error));
                }
            );
        }
    };

    function request() {
        return {
            type: userConstants.REFRESH_REQUEST,
        };
    }

    function success(user) {
        return {
            type: userConstants.REFRESH_TOKEN,
            user,
        };
    }

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            error,
        };
    }
}

function logout() {
    userService.logout();
    return {
        type: userConstants.LOGOUT,
    };
}

function getAuthUser() {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            userService.getAuthUser().then((data) => {
                if (data.status == 401) {
                    dispatch({
                        type: userConstants.EXPIRE_TOKEN,
                    });
                    return reject(data);
                }
                return resolve(data);
            });
        });
}
