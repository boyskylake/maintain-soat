import React ,  { useState , useEffect } from 'react'
import { useDispatch , useSelector } from "react-redux";
import { history } from '../../helpers';
// import { login } from '../actions';

import { userActions } from "../../actions";

const Login = () => {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    // useEffect(() => {
    //     console.log('useEffect');

    //     return () => {
    //     console.log('cleanup');
    //     };
    // });

    const dispatch = useDispatch();
    const authentication = useSelector(state => state.authentication);

    if (authentication.loggedIn) {
        setTimeout(history.push('/officer/home'), 100);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userActions.login(user,pass));
    }
  
    return (
        <div className="login-box login-page">
            <div className="login-logo">
                <a href="../../index2.html"><b>Soat</b>Officer</a>
            </div>
            {/* /.login-logo */}
            <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session </p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group has-feedback">
                        <input type="email" onChange={event => setUser(event.target.value)} className="form-control" placeholder="Email" required/>
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" onChange={event => setPass(event.target.value)} className="form-control" placeholder="Password" required/>
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
                        <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
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
}


export default Login;