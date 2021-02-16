import { userConstants } from "../constants";

const initialState = { loggedIn: false, access_token: "", user: [] };

export function userline(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                access_token: "",
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn: false,
                loggedIn: true,
                access_token: action.token,
                user: action.user,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggingIn: false,
                loggedIn: false,
                access_token: action.token,
                user: [],
            };
        case userConstants.LOGOUT:
            return {
                ...state,
            };
        default:
            return state;
    }
}
