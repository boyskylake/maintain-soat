import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// import { userActions } from "../../redux/actions";

const Setting = () => {
    return (
        <div className="content-wrapper">
            <div className="container">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Setting
                        <small>soat officer 2.0</small>
                    </h1>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="callout callout-info">
                        <h4>Tip!</h4>
                        <p>
                            Add the layout-top-nav class to the body tag to get
                            this layout. This feature can also be used with a
                            sidebar! So use this class if you want to remove the
                            custom dropdown menus from the navbar and use
                            regular links instead.
                        </p>
                    </div>
                    <div className="callout callout-danger">
                        <h4>Warning!</h4>
                        <p>
                            The construction of this layout differs from the
                            normal one. In other words, the HTML markup of the
                            navbar and the content will slightly differ than
                            that of the normal layout.
                        </p>
                    </div>
                    <div className="box box-default">
                        <div className="box-header with-border">
                            <h3 className="box-title">Blank Box</h3>
                        </div>
                        <div className="box-body">
                            The great content goes here
                        </div>
                        {/* /.box-body */}
                    </div>
                    {/* /.box */}
                </section>
                {/* /.content */}
            </div>
            {/* /.container */}
        </div>
    );
};

export default Setting;
