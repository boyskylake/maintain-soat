import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { history } from "../../../helpers";
import toastr from "toastr";
// import { login } from '../actions';

import { userActions } from "../../redux/actions";

const Login = () => {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const dispatch = useDispatch();

    const authentication = useSelector((state) => state.authentication);
    let history = useHistory();

    useEffect(() => {
        if (authentication.loggedIn) {
            history.push("/officer/home");
        }
    }, [authentication, history]);

    let handleSubmit = (e) => {
        e.preventDefault();
        toastr.info("Are you the 6 fingered man?\n dfmadskfmsd;flmsdflsad; \n adkfadskfl;sdk;l");
        // dispatch(userActions.login(user, pass));
    };

    return (
        <div className="login-box login-page">
            <div className="login-logo">
                <a href="../../index2.html">
                    <b>Soat</b>Officer
                </a>
            </div>
            {/* /.login-logo */}
            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session </p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group has-feedback">
                        <input
                            type="email"
                            onChange={(event) => setUser(event.target.value)}
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                        <input
                            type="password"
                            onChange={(event) => setPass(event.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required
                        />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
                    <div className="row">
                        {/* <div className="col-xs-8">
                        <div className="checkbox icheck">
                            <label>
                            <input type="checkbox" /> Remember Me
                            </label>
                        </div>
                        </div> */}
                        {/* /.col */}
                        <div className="col-xs-4">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block btn-flat"
                            >
                                Sign In
                            </button>
                        </div>
                        {/* /.col */}
                    </div>
                </form>
                {/* <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign in using
                    Facebook</a>
                <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign in using
                    Google+</a>
                </div> */}
                {/* /.social-auth-links */}
                {/* <a href="#">I forgot my password</a><br />
                <a href="register.html" className="text-center">Register a new membership</a> */}
            </div>
        </div>
    );
};

export default Login;
