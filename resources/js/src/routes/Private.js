import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(
        (state) => state.authentication.loggedIn
    );

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
                        {isAuthenticated ? (
                            <Component {...props} />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/officer/logon",
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
