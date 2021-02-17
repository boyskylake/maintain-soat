import React, { Suspense, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import liff from "@line/liff";
import { userActions } from "../../redux/actions";

const Verify = () => {
    const { search } = useLocation();
    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        let path = new URLSearchParams(search);

        async function initialize() {
            await liff.init({ liffId: "1655658567-YmdRmAVg" });
            // console.log(path.get("path"));
            liff.ready.then(() => {
                if (liff.isLoggedIn()) {
                    const accessToken = liff.getAccessToken();

                    if (accessToken) {
                        dispatch(userActions.getAuthUser(accessToken))
                            .then(() => {
                                history.push(path.get("path"));
                            })
                            .catch(() => {
                                history.push(
                                    "/linebot/login?path=" + path.get("path")
                                );
                            });
                    }
                } else {
                    liff.login();
                }
            });
        }
        initialize();
    }, [dispatch, history, search]);

    return (
        <div className="overlay">
            <i className="fa fa-refresh fa-spin" />
        </div>
    );
};

export default Verify;