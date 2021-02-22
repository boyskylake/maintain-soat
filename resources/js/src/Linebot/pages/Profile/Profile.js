import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// import { userActions } from "../../redux/actions";

const Profile = () => {
    return (
        <div className="content-wrapper">
            <div className="container">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Profile
                        <small>soat officer 2.0</small>
                    </h1>
                </section>

            </div>
            {/* /.container */}
        </div>
    );
};

export default Profile;
