import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from 'redux-logger';
import reducers from '../reducers';
// import { userConstants } from '../constants';
// import { userActions } from "../actions";
// import { useDispatch } from "react-redux";
// const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware);

// const Store = createStoreWithMiddleware(reducers);
// let user = JSON.parse(localStorage.getItem('user'));

// function name() {
//     const dispatch = useDispatch();

//     if (user && user.token) {
//         dispatch(userActions.getAuthUser());
//         console.log("testse");
//     }
// }

// export const store = Store;

export const store = createStore(reducers ,composeWithDevTools(createStoreWithMiddleware));