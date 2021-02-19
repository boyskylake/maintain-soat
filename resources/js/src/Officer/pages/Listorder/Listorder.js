import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";

import { feedDataAction } from "../../redux/actions";



function Listorder() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);

    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = (data) => {
    //     // console.log(data);
    //     // console.log(coopid);
    // };

    useEffect(() => {
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataGet("/api/v1/officer/Listorder")
            );
        }
        $("#example2").DataTable({

        });
        feedData();
    }, [dispatch]);



    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <h1>
                    Data Tables
                    <small>advanced tables</small>
                </h1>
                <ol className="breadcrumb">
                    <li>
                        <a href="#">
                            <i className="fa fa-dashboard" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#">Tables</a>
                    </li>
                    <li className="active">Data tables</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Hover Data Table</h3>
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                {/* <table ref={main} /> */}
                                <table
                                    id="example2"
                                    className="table table-bordered table-hover"
                                >
                                    <thead>
                                        <tr>
                                            <th>Rendering engine</th>
                                            <th>Browser</th>
                                            <th>Platform(s)</th>
                                            <th>Engine version</th>
                                            <th>CSS grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedData.data &&
                                            feedData.data.infrom &&
                                            feedData.data.infrom.map(
                                                (val, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{val.inform_no}</td>
                                                            <td>{val.coop_shortname}
                                                            </td>
                                                            <td>{val.receive_data}</td>
                                                            <td>{val.editor_id}</td>
                                                            <td>X</td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                    </tbody>
                                </table>

                            </div>
                            {feedData.fetching && (
                        <div className="overlay">
                            <i className="fa fa-refresh fa-spin" />
                        </div>
                    )}
                            {/* /.box-body */}
                        </div>
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </section>
            {/* /.content */}
        </div>
    );
}

export default Listorder;
