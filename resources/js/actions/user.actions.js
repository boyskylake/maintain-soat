import { userConstants } from '../constants';
import { userService } from '../services';
// import { alertActions } from './';
import { history } from '../helpers';
import { NotificationManager} from 'react-notifications';

export const userActions = {
    login,
    logout,
    getAll,
    getAuthUser
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/officer/home');
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

async function getAuthUser() {
    await userService.getAuthUser()
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            // console.log(data)
            NotificationManager.error(data.error, 'Error', 5000);  
            location.reload(true);

        }
    });
    return { };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}