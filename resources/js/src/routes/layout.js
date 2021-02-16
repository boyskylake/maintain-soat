// //import libs
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, matchPath, useLocation } from "react-router-dom";

// import services actions
import { userActions } from "./../Officer/redux/actions";

// import components
import routes from "../routes/routes";
import OfficerLayout from "../Officer/layouts/OfficerLayout";
import LinebotLayout from "../Linebot/layouts/LinebotLayout";

const Layout = ({ children, ...props }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state) => state.authentication.loggedIn
    );

    const { pathname } = useLocation();
    const [path, setPath] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(userActions.getAuthUser()).catch(() => {
                // NotificationManager.error(err.data.error, "Error", 5000);
            });
        }

        for (var i = 0; i < routes.length; i++) {
            let path = matchPath(pathname, {
                path: routes[i].path,
            });

            if (path != null) {
                setPath(routes[i]);
                break; // stop the loop
            }
        }
    }, [dispatch, isAuthenticated, pathname]);

    const layout = path && path.layout;

    switch (layout) {
        case "officer":
            return <OfficerLayout {...props}>{children}</OfficerLayout>;
        case "line":
            return <LinebotLayout {...props}>{children}</LinebotLayout>;
        default:
            return <Fragment>{children}</Fragment>;
    }
};

Layout.displayName = "Layout";

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withRouter(Layout);
