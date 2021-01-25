import { authConstants } from "../constants";

/**
 * fetch the current logged in user
 *
 * @returns {function(*)}
 */
export function fetchUser() {
    return (dispatch) => {
        return Http.get("api/v1/auth/me")
            .then((res) => {
                const data = Transformer.fetch(res.data);
                dispatch(authActions.authUser(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

/**
 * login user
 *
 * @param credentials
 * @returns {function(*)}
 */
export function login(credentials) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            Http.get("sanctum/csrf-cookie").then(() => {
                Http.post("login", credentials)
                    .then((res) => {
                        const data = Transformer.fetch(res.data);
                        dispatch(authActions.authLogin(data.accessToken));
                        return resolve();
                    })
                    .catch((err) => {
                        const statusCode = err.response.status;
                        const data = {
                            error: null,
                            statusCode,
                        };

                        if (statusCode === 422) {
                            const resetErrors = {
                                errors: err.response.data.errors,
                                replace: false,
                                searchStr: "",
                                replaceStr: "",
                            };
                            data.error = Transformer.resetValidationFields(
                                resetErrors
                            );
                        } else if (statusCode === 401) {
                            data.error = err.response.data.message;
                        }
                        return reject(data);
                    });
            });
        });
}

export function register(credentials) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            Http.post("register", Transformer.send(credentials))
                .then((res) => {
                    const data = Transformer.fetch(res.data);
                    dispatch(authActions.authLogin(data.accessToken));
                    return resolve();
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };

                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data.errors,
                            replace: false,
                            searchStr: "",
                            replaceStr: "",
                        };
                        data.error = Transformer.resetValidationFields(
                            resetErrors
                        );
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    console.log(data);
                    return reject(data);
                });
        });
}

/**
 * logout user
 *
 * @returns {function(*)}
 */
export function logout() {
    return (dispatch) => {
        return Http.post("logout")
            .then(() => {
                dispatch(authActions.authLogout());
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

function authCheck() {
    return {
        type: authConstants.AUTH_CHECK,
    };
}

function authLogin(payload) {
    return {
        type: authConstants.AUTH_LOGIN,
        payload,
    };
}

function authLogout() {
    return {
        type: authConstants.AUTH_LOGOUT,
    };
}

function authRefreshToken(payload) {
    return {
        type: authConstants.AUTH_REFRESH_TOKEN,
        payload,
    };
}

function authResetPassword() {
    return {
        type: authConstants.AUTH_RESET_PASSWORD,
    };
}

function authUser(payload) {
    return {
        type: authConstants.AUTH_USER,
        payload,
    };
}

export const authActions = {
    authCheck,
    authLogin,
    authLogout,
    authRefreshToken,
    authResetPassword,
    authUser,
};
