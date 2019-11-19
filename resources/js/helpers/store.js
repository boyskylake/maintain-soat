import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from 'redux-logger';
import reducers from '../reducers';

// const loggerMiddleware = createLogger();

const middleware = applyMiddleware(thunkMiddleware);

export const store = createStore(reducers, composeWithDevTools(middleware));