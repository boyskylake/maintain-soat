import React from 'react'
import { useDispatch , useSelector } from "react-redux";
import { Route , Redirect } from "react-router-dom";

import { userActions } from "../actions";

import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Footer from '../layout/Footer'
// import Content from './Content'

import Home from '../pages/Home/Home'
import Saveorder from '../pages/Order/Saveorder'


const PrivateRoute = () => {

  const authentication = useSelector(state => state.authentication);

  if (authentication.loggedIn) {
    useDispatch(userActions.getAuthUser());
  }
  
    return (
        <div>
            <FadingContentRoute path="/officer/home" component={Home}/>
            <FadingContentRoute path="/officer/saveorder" component={Saveorder}/>
        </div>
    )
}

function FadingContentRoute({ component: Component, ...rest }) {

  const authentication = useSelector(state => state.authentication);

  return (
    <Route
      {...rest} render={routeProps => (
        authentication.loggedIn
          ? <div>
              <Header/>
              <Sidebar/>
              <Component {...routeProps} />
              <Footer/>
            </div>
          : <Redirect to={{ pathname: '/officer/login', state: { from: routeProps.location } }} />
      )}
    />
  );
}

export default PrivateRoute;