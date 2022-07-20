import React from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import "./style.scss";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";

// import default minimal styling or your own styling
import "../../../../node_modules/react-simple-tree-menu/dist/main.css";
import { userService } from "../../../services";

const RegisterMenus = [
  {
    key: "panel-1",
    label: "Dashboard",
    url: "/dashboard",
    nodes: [],
  },
  {
    key: "panel-2",
    label: "My Profile",
    url: "/profile",
    nodes: [],
  },
  {
    key: "panel-3",
    label: "Manage Requests",
    nodes: [
      {
        key: "panel-3.0",
        label: "Sub Requests 1",
        nodes: [
          {
            key: "panel-3.0.0",
            label: "Sub Requests 2-1",
            url: "/url",
            nodes: [],
          },
          {
            key: "panel-3.0.1",
            label: "Sub Requests 2-2",
            url: "/url",
            nodes: [],
          },
        ],
      },
    ],
  },
  {
    key: "panel-4",
    label: "Schedule",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-5",
    label: "Manage Employees",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-6",
    label: "Settings",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-7",
    label: "Notifications",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-8",
    label: "User Roles",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-9",
    label: "Impersonate",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-10",
    label: "Timesheet",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-11",
    label: "Leaves Management",
    nodes: [
      {
        key: "panel-11.1",
        label: "My Leaves",
        nodes: [
          {
            key: "panel-11.1.1",
            label: "Apply Leave",
            url: "/leave-management/my-leaves/applying-leave",
            nodes: [],
          },
          {
            key: "panel-11.1.2",
            label: "Applied Leaves",
            url: "",
            nodes: [],
          },
        ],
      },
      {
        key: "panel-11.2",
        label: "Leave Balance",
        url: "/leave-management/leave-Balance",
        nodes: [],
      },
      {
        key: "panel-11.3",
        label: "Holiday Calendar",
        url: "",
        nodes: [],
      },
      {
        key: "panel-11.4",
        label: "Leave Calendar",
        url: "",
        nodes: [],
      },
    ],
  },
  {
    key: "panel-12",
    label: "Reports",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-13",
    label: "Manage Locations",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-14",
    label: "SU Summary",
    url: "/summary",
    nodes: [],
  },
  {
    key: "panel-15",
    label: "Configurations",
    url: "/forgot-password",
    nodes: [],
  },
  {
    key: "panel-16",
    label: "Logout",
    url: "/logout",
    nodes: [],
  },
];

const AdminMenus = [
  {
    key: "panel-1",
    label: "Dashboard",
    url: "/dashboard",
    nodes: [],
  },
  {
    key: "panel-2",
    label: "My Profile",
    url: "/profile",
    nodes: [],
  },
  {
    key: "panel-3",
    label: "Manage Requests",
    nodes: [
      {
        key: "panel-3.0",
        label: "Drop Shift Request",
        nodes: [],
      },
      {
        key: "panel-3.1",
        label: "Exception Request",
        nodes: [
          {
            key: "panel-3.1.0",
            label: "Over Time",
            url: "/url",
            nodes: [],
          },
          {
            key: "panel-3.1.1",
            label: "Change Time",
            url: "/url",
            nodes: [],
          },
          {
            key: "panel-3.1.2",
            label: "Swap Time",
            url: "/url",
            nodes: [],
          },
        ],
      },
    ],
  },
  {
    key: "panel-4",
    label: "Timesheet",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-5",
    label: "Punch Logs",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-6",
    label: "Notifications",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-7",
    label: "Schedules",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-8",
    label: "Open Shfit",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-9",
    label: "Manage Payments",
    url: "/url",
    nodes: [],
  },
  {
    key: "panel-11",
    label: "Leaves Management",
    nodes: [
      {
        key: "panel-11.1",
        label: "My Leaves",
        nodes: [
          {
            key: "panel-11.1.1",
            label: "Apply Leave",
            url: "/leave-management/my-leaves/applying-leave",
            nodes: [],
          },
          {
            key: "panel-11.1.2",
            label: "Applied Leaves",
            url: "",
            nodes: [],
          },
        ],
      },
      {
        key: "panel-11.2",
        label: "Leave Balance",
        url: "/leave-management/leave-Balance",
        nodes: [],
      },
      {
        key: "panel-11.3",
        label: "Holiday Calendar",
        url: "",
        nodes: [],
      },
      {
        key: "panel-11.4",
        label: "Leave Calendar",
        url: "",
        nodes: [],
      },
    ],
  },
  {
    key: "panel-12",
    label: "Reports",
    url: "/url",
    nodes: [
      {
        key: "panel-12.1",
        label: "Schedule History",
        nodes: [],
      },
      {
        key: "panel-12.2",
        label: "Invoices",
        nodes: [],
      },
      {
        key: "panel-12.3",
        label: "Hours worked",
        nodes: [],
      },
      {
        key: "panel-12.4",
        label: "Exceptions",
        nodes: [],
      },
      {
        key: "panel-12.5",
        label: "Leave Balance",
        nodes: [],
      },
    ],
  },
  {
    key: "panel-16",
    label: "Logout",
    url: "/logout",
    nodes: [],
  },
];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    const role = userService.getRole();
    console.log(role);
    this.state = {
      menu: role === "Administrators" ? AdminMenus : RegisterMenus,
    };
  }

  navigate = (path) => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const {menu} = this.state;
    return (
      <aside className="float-left" id="sidebar-wrapper">
        <TreeMenu
          data={menu}
          //   initialOpenNodes={['panel-3', 'panel-3/panel-3.0']}
          // initialActiveKey="panel-3/panel-3.0"
          hasSearch={false}
          onClickItem={({ label, url }) => {
            this.navigate(url); // user defined prop
          }}
        >
          {({ items }) => (
            <ul>
              {items.map((props) => (
                <ItemComponent {...props}></ItemComponent>
              ))}
            </ul>
          )}
        </TreeMenu>
      </aside>
    );
  }
}

export default withRouter(SideBar);
