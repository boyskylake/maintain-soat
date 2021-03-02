import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { feedDataAction } from "../../redux/actions";

const Orders = () => {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);

    useEffect(() => {
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataPost("/api/v1/linebot/order")
            );
        }
        feedData();
    }, [dispatch]);

    return (
        <div className="content-wrapper">
            <div className="container">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>Orders</h1>
                </section>
                <table>
                    <thead>
                        <tr>
                            <th>inform_no</th>
                            <th>coop_id</th>
                            <th>receive_date</th>
                            <th>inform_description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedData.data &&
                            feedData.data.data &&
                            feedData.data.data.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{val.inform_no}</td>
                                        <td>{val.coop_id}</td>
                                        <td>{val.receive_date}</td>
                                        <td>{val.inform_description}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            {/* /.container */}
        </div>
    );
};

export default Orders;
