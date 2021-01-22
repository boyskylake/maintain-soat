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
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/Nomatch/NoMatch";

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
                    {/* <Redirect to="/officer/home" /> */}
                    <NoMatch />
                </Route>
            </Switch>
        </Layout>
        <NotificationContainer />
    </Router>
);

export default Routes;
