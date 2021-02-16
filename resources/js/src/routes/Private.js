import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.authentication);

    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <Suspense
                        fallback={
                            <div className="overlay">
                                <i className="fa fa-refresh fa-spin" />
                            </div>
                        }
                    >
                        {auth.loggedIn && auth.refreshIn ? (
                            <Component {...props} />
                        ) : !auth.loggedIn && auth.refreshIn ? (
                            <Redirect
                                to={{
                                    pathname: "/officer/lookscreen",
                                    state: { from: props.location },
                                }}
                            />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/officer/login",
                                    state: { from: props.location },
                                }}
                            />
                        )}
                    </Suspense>
                );
            }}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.object.isRequired,
    location: PropTypes.object,
};

export default PrivateRoute;
