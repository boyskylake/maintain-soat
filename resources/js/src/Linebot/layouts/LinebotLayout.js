//import libs
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";

function LinebotLayout({ children }) {
    const isAuth = useSelector((state) => state.userline.loggedIn);

    // useEffect(() => {
    //     if (isAuth) {
    //         dispatch(userActions.getAuthUser()).catch(() => {
    //             // NotificationManager.error(err.data.error, "Error", 5000);
    //         });
    //     }
    // }, [dispatch, isAuth]);

    return (
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
    );
}

const displayName = "Linebot Layout";
const propTypes = {
    children: PropTypes.node.isRequired,
};

LinebotLayout.dispatch = displayName;
LinebotLayout.propTypes = propTypes;

export default LinebotLayout;
