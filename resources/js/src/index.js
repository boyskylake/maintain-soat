import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, history } from "./helpers";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./layout/PrivateRoute";
import Login from "./pages/Login/Login";

// React Notification
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/officer/login">
                        <Login />
                    </Route>

                    <PrivateRoute />
                </Switch>
                <NotificationContainer />
            </Router>
        </Provider>
    );
};

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
