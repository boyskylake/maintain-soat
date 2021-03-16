import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useScript } from "../../helpers";
import { feedDataAction } from "../redux/actions";
import Services from "../redux/services/services";


const Sidebar = () => {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const service = new Services();

    // useScript("/officer/dist/js/pages/Officerayoutscrip.js");
    useScript("/officer/dist/js/pages/Effect/tab.js");
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    const [FeedMenu, setFeedMenu] = useState();

    useEffect(() => {
        async function feedData() {
            // await dispatch(feedDataAction.feedDataGet("/api/v1/officer/menu"));

            service
                .API("/api/v1/officer/menu", { method: "Get" })
                .then((res) => {
                    setFeedMenu(res);
                });
        }
        feedData();
    }, [dispatch]);
    // console.log("feedData", feedData);
    return (
        <nav className="side-nav" style={{fontFamily:'Kanit'}}>
            <a href="" className="intro-x flex items-center pl-5 pt-4">
                <span className="hidden xl:block text-white text-lg ml-3 font-medium">
                    Soat
                </span>
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul>
                {FeedMenu &&
                    FeedMenu[0] &&
                    FeedMenu[0].map((val, i) => {
                        return (
                            <li
                                key={i}
                                to={val.url}
                                icon={val.icon_class}
                                name={val.title}
                            >
                                {/* side-menu side-menu--active */}
                                    <a href={val.url} className={`side-menu`}>
                                    <div className="side-menu__icon">
                                        <i className={val.icon_class}></i>
                                    </div>
                                    <div className="side-menu__title">
                                        {val.title}
                                    </div>
                                </a>
                            </li>
                        );
                    })}
            </ul>
        </nav>
    );
};

// eslint-disable-next-line react/prop-types
function ListItemLink({ to, icon, name, ...rest }) {
    return (
        <Route
            path={to}
            // eslint-disable-next-line react/no-children-prop
            children={({ match }) => (
                <li className={match ? "active" : ""}>
                    <Link to={to} {...rest}>
                        <i className={icon} />
                        <span>{name}</span>
                    </Link>
                    {/* <Link to={to} {...rest} /> */}
                </li>
            )}
        />
    );
}

export default Sidebar;
