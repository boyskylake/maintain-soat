import * as ActionTypes from '../constants';

const initialState = {
    isLogged: false,
    hasError : false,
    isLoading: false,
    mem_id: '',
    name: '',
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case ActionTypes.IS_LOGGED:
            return Object.assign({}, state, {
                isLogged: action.isLogged
            });
        case ActionTypes.LOGIN_HAS_ERROR:
            return Object.assign({}, state, {
                hasError: action.hasError,
            });
        case ActionTypes.LOGIN_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            });
        case ActionTypes.LOGIN:
            return Object.assign({}, state, {
                isLogged: false,
                mem_id:payload.mem_id,
                name: payload.name,
            });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                isLogged: false,
                isLoading:false,
                mem_id:'',
                name: '',
                username: '',
                password: ''
            });
        default:
            return state
    }
}