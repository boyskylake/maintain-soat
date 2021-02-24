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
        <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel">
                    <div className="pull-left image">
                        <img
                            src="dist/img/user2-160x160.jpg"
                            className="img-circle"
                            alt="User Image"
                        />
                    </div>
                    {FeedMenu && FeedMenu[1] && (
                        <div>
                            <div className="pull-left info">
                                <center>
                                    <p>{FeedMenu[1].name}</p>
                                </center>
                                {/*< <p>Alexander Pierce</p> */}
                                <a href="#">
                                    <i className="fa fa-circle text-success" />{" "}
                                    Online
                                </a>
                            </div>
                        </div>
                    )}
                    {/* <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        <a href="#">
                            <i className="fa fa-circle text-success" /> Online
                        </a>
                    </div> */}
                </div>
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input
                            type="text"
                            name="q"
                            className="form-control"
                            placeholder="Search..."
                        />
                        <span className="input-group-btn">
                            <button
                                type="submit"
                                name="search"
                                id="search-btn"
                                className="btn btn-flat"
                            >
                                <i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                </form>
                {/* /.search form */}
                {/* sidebar menu: : style can be found in sidebar.less */}
                {FeedMenu && FeedMenu[2] && (
                    <div>
                        <span className="hidden-xs">{FeedMenu[1].name}</span>
                    </div>
                )}
                <ul className="sidebar-menu" data-widget="tree">
                    {/* <li className="header">เมนูหลัก</li>
                    <ListItemLink
                        to="/officer/home"
                        icon="fa fa-circle-o"
                        name="หน้าแรก"
                    />
                    <ListItemLink
                        to="/officer/saveorder"
                        icon="fa fa-files-o"
                        name="บันทึกแจ้ง Order แก้ไขงาน"
                    />
                    <ListItemLink
                        to="/officer/listorder"
                        icon="fa fa-file-text"
                        name="Order ทั้งหมด"
                    /> */}
                    {FeedMenu &&
                        FeedMenu[0] &&
                        FeedMenu[0].map((val, i) => {
                            return (
                                <ListItemLink
                                key={i}
                                to={val.url}
                                icon={val.url}
                                name={val.title}
                            />
                            );
                        })}

                </ul>
            </section>
            {/* /.sidebar */}
        </aside>
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
