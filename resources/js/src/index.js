import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";

// React Notification
// import "react-notifications/lib/notifications.css";

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
