//import libs
import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function OfficerLayout({ children }) {
    const feedData = useSelector((state) => state.feedData);

    return (
        <Fragment>
            {/* <MenuMobile /> */}
        <div className="flex officer-content px-8 py-3">
            {/* <Header /> */}
            <Sidebar />
            <div className="content">
                <Header />
                {children}
                {feedData.fetching && (
                    <div className="overlay">
                        <i className="fa fa-refresh fa-spin" />
                    </div>
                )}
            </div>
            {/* <Footer /> */}
        </div>
        </Fragment>
    );
}

const displayName = "Officer Layout";
const propTypes = {
    children: PropTypes.node.isRequired,
};

OfficerLayout.dispatch = displayName;
OfficerLayout.propTypes = propTypes;

export default OfficerLayout;
