/**
 * Main store function
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { createLogger } from 'redux-logger'
import rootReducer from "./../redux/reducers";

export default function (initialState = {}) {
    // Middleware and store enhancers
    const enhancers = [applyMiddleware(thunk)];

    if (process.env.NODE_ENV !== "production") {
        // enhancers.push(applyMiddleware(createLogger()))
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const store = createStore(rootReducer, initialState, compose(...enhancers));

    // For hot reloading reducers
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./../redux/reducers", () => {
            const nextReducer = require("./../redux/educers").default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
