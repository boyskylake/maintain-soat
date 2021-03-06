import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
