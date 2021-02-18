//import libs
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { matchPath, useHistory, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import routes from "./LinebotRoute";

import { userActions } from "../redux/actions";

function LinebotLayout({ children }) {
    const isAuth = useSelector((state) => state.userline.loggedIn);
    const { pathname } = useLocation();
    let history = useHistory();
    const dispatch = useDispatch();
    const [path, setPath] = useState(null);

    useEffect(() => {
        if (path == null) {
            for (var i = 0; i < routes.length; i++) {
                let path = matchPath(pathname, {
                    path: routes[i].path,
                });

                if (path != null) {
                    setPath(routes[i]);
                    break; // stop the loop
                }
            }
        }
        if (path && path.authliff && !isAuth) {
            dispatch(userActions.getAuthUser()).catch(() => {
                history.push("/linebot/verify?path=" + path.path);
            });
        }
    }, [dispatch, isAuth, pathname, path, history]);

    return isAuth ? (
        <div className="wrapper">
            <Header />
            {children}
            {/* {feedData.fetching && (
                <div className="overlay">
                    <i className="fa fa-refresh fa-spin" />
                </div>
            )} */}
            <Footer />
        </div>
    ) : (
        <div className="overlay">
            <i className="fa fa-refresh fa-spin" />
        </div>
    );
}

const displayName = "Linebot Layout";
const propTypes = {
    children: PropTypes.node.isRequired,
};

LinebotLayout.dispatch = displayName;
LinebotLayout.propTypes = propTypes;

export default LinebotLayout;
