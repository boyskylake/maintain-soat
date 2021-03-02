import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { feedDataAction } from "../../redux/actions";

const Profile = () => {

    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);

    useEffect(() => {
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataPost("/api/v1/linebot/profile",{
                    username: 'view@view.com'
                })
            );
        }
        feedData();
    }, [dispatch]);


    return (
        <div className="content-wrapper">
            <div className="container">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Hello
                        <small>soat officer 2.0</small>
                    </h1>
                </section>
                {feedData.data && feedData.data.user && feedData.data.user.name}
            </div>
            {/* /.container */}
        </div>
    );
};

export default Profile;
