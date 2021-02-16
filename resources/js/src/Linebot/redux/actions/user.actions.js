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
            token: "",
            user,
        };
    }

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            token: "",
            error,
        };
    }
}

function getAuthUser(accessToken) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            userService.getAuthUser(accessToken).then((data) => {
                if (data.status == 401) {
                    dispatch({
                        type: userConstants.LOGIN_FAILURE,
                        token: accessToken,
                    });
                    return reject(data);
                }
                dispatch({
                    type: userConstants.LOGIN_SUCCESS,
                    token: accessToken,
                    user: data.user,
                });
                return resolve(data);
            });
        });
}
