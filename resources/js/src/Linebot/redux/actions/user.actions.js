import { userConstants } from "../constants";
import { userService } from "../services";

export const userActions = {
    getAuthUser,
    login,
};

function login(username, password) {
    return (dispatch) => {
        dispatch(
            request({
                username,
            })
        );

        userService.login(username, password).then(
            (data) => {
                dispatch(success(data.user));
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
            token: localStorage.getItem("path"),
            user,
        };
    }

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            token: localStorage.getItem("path"),
            error,
        };
    }
}

function getAuthUser() {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            userService.getAuthUser().then((data) => {
                if (data.status == 401) {
                    dispatch({
                        type: userConstants.LOGIN_FAILURE,
                        token: localStorage.getItem("path"),
                    });
                    return reject(data);
                }
                dispatch({
                    type: userConstants.LOGIN_SUCCESS,
                    token: localStorage.getItem("path"),
                    user: data.user,
                });
                return resolve(data);
            });
        });
}
