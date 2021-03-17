import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useScript } from "../../helpers";
import { feedDataAction } from "../redux/actions";
import Services from "../redux/services/services";

const MenuMobile = () => {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const service = new Services();

    useScript("/officer/dist/js/pages/mobile-menu.js");
    // useScript("/officer/dist/js/pages/tab.js");
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    const [FeedMenu, setFeedMenu] = useState();

    useEffect(() => {
        async function feedData() {
            // await dispatch(feedDataAction.feedDataGet("/api/v1/officer/menu"));

            service
                .API("/api/v1/officer/menumoblie", { method: "Get" })
                .then((res) => {
                    setFeedMenu(res);
                });
        }
        feedData();
    }, [dispatch]);
    // console.log("feedData", feedData);
    return (
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a className="flex mr-auto">
                    <img
                        // alt="Midone Tailwind HTML Admin Template"
                        className="w-6"
                        src="/officer/dist/img/logo.png"
                    />
                </a>
                <a id="mobile-menu-toggler">
                    <i className="fas fa-user w-8 h-8 text-black transform -rotate-90"
                    />
                </a>
            </div>
            <ul className="border-t border-theme-24 py-5 hidden">
                <li>
                {FeedMenu &&
                    FeedMenu[0] &&
                    FeedMenu[0].map((val, i) => {
                        return (
                            <ListItemLink
                                    key={i}
                                    to={val.url}
                                    icon={val.icon_class}
                                    name={val.title}
                            />
                        );
                    })}
                </li>
            </ul>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
function ListItemLink({ to, icon, name, ...rest }) {
    return (
        <Route
            path={to}
            // eslint-disable-next-line react/no-children-prop
            children={({ match }) => (
                <li
                    className={match ? "active" : ""}
                    to={to}
                    icon={icon}
                    name={name}
                >
                    <Link
                        className={
                            match ? "side-menu side-menu--active" : "side-menu"
                        }
                        to={to}
                        {...rest}
                    >
                        <div className="side-menu__icon">
                            <i className={icon} />
                        </div>
                        <div className="side-menu__title">
                            <span>{name}</span>
                        </div>
                    </Link>
                    {/* <Link to={to} {...rest} /> */}
                </li>
            )}
        />
    );
}

export default MenuMobile;
