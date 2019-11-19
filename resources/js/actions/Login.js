import * as ActionTypes from '../constants';
import { history } from '../helpers';
import { NotificationManager} from 'react-notifications';

export const isLogged = (bool) => {
    return {
        type: ActionTypes.IS_LOGGED,
        isLogged: bool,
    }
};

export const loginHasError = (bool) => {
    return {
        type: ActionTypes.LOGIN_HAS_ERROR,
        hasError: bool,
    }
};

export const loginIsLoading = (bool) => {
    return {
        type: ActionTypes.LOGIN_IS_LOADING,
        isLoading: bool
    }
};

export const LOGIN = (res) => {
    return {
        type: ActionTypes.LOGIN,
        payload: {
            mem_id : res.mem_id,
            name : res.name
        }
    }
};

// export const loginname = (memid) => {
//     return (dispatch) => {
//         fetch('http://test.coopmoj.org/coop/api_mobile/app.php', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({type:'loginname', Memid:memid})
//         })
//             .then((res) => res.json())
//             .then(res =>  {
//                 if (res.status == false) {
//                     dispatch(loginIsLoading(false));
//                     dispatch(loginHasError(true));
//                     dispatch(isLogged(res.status));
//                 }else{
//                     dispatch(loginIsLoading(false));
//                     dispatch(loginHasError(false));
//                     dispatch(isLogged(res.status));
//                     dispatch(LOGIN(res));
//                 }     
//             })
//             .catch((e) => {
//                 dispatch(loginHasError(true));
//             });
//     }
// };

export const login = (username, password) => {

    return (dispatch) => {
        dispatch(loginIsLoading(true));

        if(!username || !password){
            dispatch(loginHasError(true));
            dispatch(loginIsLoading(false));
            NotificationManager.error('plase username/password', 'Error', 5000);
            return;
        }

        // fetch('http://test.coopmoj.org/coop/api_mobile/app.php', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({type:'login', username: username, password: password})
        // })
        //     .then((res) => res.json())
        //     .then(res =>  {
        //         if (res.status == false) {
        //             dispatch(loginIsLoading(false));
        //             dispatch(loginHasError(true));
        //             dispatch(isLogged(res.status));
        //             Alert.alert(res.messege);
        //         }else{
                    dispatch(loginIsLoading(false));
                    dispatch(loginHasError(false));
                    dispatch(isLogged(true));
                    
                    localStorage.setItem('user', username);

                    history.push('/officer/home');

                    NotificationManager.success('User has been updated!', 'Success', 5000);
                    // AsyncStorage.setItem('memid', res.mem_id);
                    // dispatch(LOGIN(res));
            //     }     
            // })
            // .catch((e) => {
            //     dispatch(loginHasError(true));
            // });
    }
};

export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: ActionTypes.LOGOUT
    }
};
