import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
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
                        <Component {...props} />
                    </Suspense>
                );
            }}
        />
    );
};

PublicRoute.propTypes = {
    component: PropTypes.object.isRequired,
    location: PropTypes.object,
};

export default PublicRoute;
