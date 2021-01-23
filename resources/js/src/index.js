import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";

// import { store } from "./store";
// import Routes from "./routes";

// React Notification
import "react-notifications/lib/notifications.css";

const App = () => {
    return (
        <Fragment>
            <h1>Testestsetes</h1>
        </Fragment>
    );
};

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
