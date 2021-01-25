import { authConstants } from "../constants";

const initialState = {
    isAuthenticated: false,
};

const reducer = (state = initialState, { type, payload = null }) => {
    switch (type) {
        case authConstants.AUTH_REFRESH_TOKEN:
        case authConstants.AUTH_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case authConstants.AUTH_CHECK:
            return checkAuth(state);
        case authConstants.AUTH_LOGOUT:
            return logout(state);
        case authConstants.AUTH_RESET_PASSWORD:
            return resetPassword(state);
        default:
            return state;
    }
};

function login(state, payload) {
    localStorage.setItem("access_token", payload);
    // HTTP.defaults.headers.common["Authorization"] = `Bearer ${payload}`;

    return {
        ...state,
        isAuthenticated: true,
    };
}

function checkAuth(state) {
    state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem("access_token"),
    });

    if (state.isAuthenticated) {
        // HTTP.defaults.headers.common[
        //     "Authorization"
        // ] = `Bearer ${localStorage.getItem("access_token")}`;
    }

    return state;
}

function logout(state) {
    localStorage.removeItem("access_token");

    return {
        ...state,
        isAuthenticated: false,
    };
}

function resetPassword(state) {
    return {
        ...state,
        resetPassword: true,
    };
}

export const getAuth = (state) => state.auth.isAuthenticated;

export default reducer;
