import React from 'react'
import {Link , Route} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                    </div>
                </div>
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                            <i className="fa fa-search" />
                        </button>
                        </span>
                    </div>
                </form>
                {/* /.search form */}
                {/* sidebar menu: : style can be found in sidebar.less */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">เมนูหลัก</li>
                    <ListItemLink to="/officer/home" icon="fa fa-circle-o" name="หน้าแรก" />
                    <ListItemLink to="/officer/saveorder" icon="fa fa-files-o" name="บันทึกแจ้ง Order แก้ไขงาน" />
                  
                </ul>
            </section>
            {/* /.sidebar */}
        </aside>
    )
}

function ListItemLink({ to, icon, name , ...rest }) {
    return (
      <Route
        path={to}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link to={to} {...rest}><i className={icon} /><span>{name}</span></Link>
            {/* <Link to={to} {...rest} /> */}
          </li>
        )}
      />
    );
  }



  export default Sidebar;