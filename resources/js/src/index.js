import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';
import store from "./store";
import Routes from "./routes";

const App = () => {
    return (
        <Provider store={store}>
            <CookiesProvider>
                <Routes />
            </CookiesProvider>
        </Provider>
    );
};

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
