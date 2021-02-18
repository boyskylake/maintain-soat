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
        localStorage.setItem("path", path.get("path"));

        async function initialize() {
            await liff.init({ liffId: "1655658567-YmdRmAVg" });
            // console.log(path.get("path"));
            liff.ready.then(() => {
                if (liff.isLoggedIn()) {
                    const accessToken = liff.getAccessToken();

                    if (accessToken) {
                        localStorage.setItem("linetoken", accessToken);

                        dispatch(userActions.getAuthUser())
                            .then(() => {
                                history.push(path.get("path"));
                            })
                            .catch(() => {
                                history.push(
                                    "/linebot/login?path=" +
                                        localStorage.getItem("path")
                                );
                            });
                    }
                } else {
                    // localStorage.setItem("path", path.get("path"));
                    liff.login({
                        redirectUri:
                            "https://6be7805c3720.ngrok.io/linebot/verify?path=" + path.get("path"),
                    });
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
