/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import LeaveBalance from '../LeaveBalance/LeaveBalance';


class LeaveBalanceIndex extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card_layout leaveManagement">
              <LeaveBalance />
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveBalanceIndex;
