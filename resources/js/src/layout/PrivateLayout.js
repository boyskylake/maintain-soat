import React, { Fragment } from "react";

function PrivateLayout({ children }) {
    const feedData = useSelector(state => state.feedData);

    return (
        <Fragment>
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                {children}
                {feedData.fetching && (
                    <div className="overlay">
                        <i className="fa fa-refresh fa-spin" />
                    </div>
                )}
            </div>
            <Footer />
        </Fragment>
    );
}

const displayName = "Private Layout";
const propTypes = {
    children: PropTypes.node.isRequired
};

PrivateLayout.dispatch = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout;
