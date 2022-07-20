/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ApplyLeaveIndex from './ApplyLeave/index';
import './style.scss';


class LeaveManagement extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card_layout leaveManagement">
              <ApplyLeaveIndex />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveManagement;
