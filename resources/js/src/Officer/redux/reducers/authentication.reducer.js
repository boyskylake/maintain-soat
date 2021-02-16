import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { loggedIn: true, refreshIn: true, user }
    : { loggedIn: false, refreshIn: false, user: [] };

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: [],
            };
        case userConstants.REFRESH_REQUEST:
            return {
                loggingIn: true,
                loggedIn: false,
                refreshIn: true,
                user: [],
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn: false,
                loggedIn: true,
                refreshIn: true,
                user: action.user,
            };
        case userConstants.REFRESH_TOKEN:
            return {
                loggedIn: true,
                refreshIn: true,
                user: action.user,
            };
        case userConstants.EXPIRE_TOKEN:
            return {
                loggedIn: false,
                refreshIn: true,
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
