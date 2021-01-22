import React from "react";

function PublicLayout({ children }) {
    return <div>{children}</div>;
}

const displayName = "Info Layout";
const propTypes = {
    children: PropTypes.node.isRequired
};

PublicLayout.dispatch = displayName;
PublicLayout.propTypes = propTypes;

export default PublicLayout;
