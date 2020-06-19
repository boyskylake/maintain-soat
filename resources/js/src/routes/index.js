// import libs
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import ScrollToTop from "../helpers/ScrollToTop";

// import components
import routes from "./routes";
import PublicRoute from "./Public";
import PrivateRoute from "./Private";

import Layout from "./layout";

const Routes = () => (
    <Router>
        <Layout>
            <ScrollToTop />
            <Switch>
                {routes.map((route, i) => {
                    if (route.auth) {
                        return <PrivateRoute key={i} {...route} />;
                    }
                    return <PublicRoute key={i} {...route} />;
                })}
                <Route path="*">
                    <Redirect to="/officer/home" />
                </Route>
            </Switch>
        </Layout>
        <NotificationContainer />
    </Router>
);

export default Routes;
