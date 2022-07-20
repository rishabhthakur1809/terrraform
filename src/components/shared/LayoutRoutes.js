import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './Sidebar/index';
import AdminBreadcrumb from './Breadcrumb/index';
import MyProfile from '../Admin/MyProfile/index';
import LeaveManagement from '../Admin/LeaveManagement/index';
import LeaveBalanceIndex from '../Admin/LeaveManagement/LeaveBalance/index';
import Logout from './Logout/Logout';

class LayoutRoutes extends Component {

  render() {
    const { handleToggle } = this.props;
    return (

      <Router>
        <SideBar />
        <div id="page-content-wrapper" >
          <AdminBreadcrumb handleToggle={handleToggle} />
          <Switch>
            <Route exact component={Logout} path="/logout" />
            <Route exact component={MyProfile} path="/profile" />
            <Route exact component={LeaveManagement} path="/leave-management/my-leaves/applying-leave" />
            <Route exact component={LeaveBalanceIndex} path="/leave-management/leave-Balance" />
          </Switch>
        </div>
      </Router>

    );
  }
}
export default LayoutRoutes;
