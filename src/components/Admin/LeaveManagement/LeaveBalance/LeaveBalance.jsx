
import React from 'react';
import CardLeaveBalance from './CardLeaveBalance';
import ProgressBar from './progressbar'

const leaves = [
  {
    leaveType: 'Earn Leave',
    LeaveBalance: 3,
    AppliedLeave: 1,
    ApprovedLeave: 1,
  },
  {
    leaveType: 'Sick Leave',
    LeaveBalance: 3,
    AppliedLeave: 1,
    ApprovedLeave: 1,
  },
  {
    leaveType: 'Casual Leave',
    LeaveBalance: 3,
    AppliedLeave: 1,
    ApprovedLeave: 1,
  },
  {
    leaveType: 'Bonus Leave',
    LeaveBalance: 3,
    AppliedLeave: 1,
    ApprovedLeave: 1,
  }
]

const EarnLeave = [
  { bgcolor: "#00C2F0", completed: 90 },
];

const sickLeave = [
  { bgcolor: "#00C2F0", completed: 50 },
];


const casualLeave = [
  { bgcolor: "#00C2F0", completed: 40 },
];


const lwp = [
  { bgcolor: "#00C2F0", completed: 40 },
];

const xyz = [
  { bgcolor: "#00C2F0", completed: 0 },
];


const abc = [
  { bgcolor: "#00C2F0", completed: 20 },
];


class LeaveBalance extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <h2>Leave Balance</h2>
          </div>
        </div>
        <div className="row">

          {/* {leaves?.map((Leave) => {
              <div className="col-md-6 col-xl-4">
              <div className="balancecard">
              <CardLeaveBalance
                cardTitle={Leave.leaveType}
                grantTitle={Leave.LeaveBalance}
                daysleft={Leave.LeaveBalance - Leave.ApprovedLeave}
                c_link="#!" />
            </div>
            </div>
            })} */}

          <div className="col-md-6 col-xl-4">
            <div className="balancecard">
              <CardLeaveBalance

                cardTitle="Sick Leaves"
                grantTitle="Granted:12"
                daysleft="6"
                c_link="#!" />
              <div className="progressBar">
                {sickLeave.map((item, idx) => (
                  <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="balancecard">
              <CardLeaveBalance

                cardTitle="Casual Leaves"
                grantTitle="Granted:12"
                daysleft="5"
                c_link="#!" />
              <div className="progressBar">
                {casualLeave.map((item, idx) => (
                  <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="balancecard">
              <CardLeaveBalance

                cardTitle="Leaves without pay"
                grantTitle="Granted:12"
                daysleft="5"
                c_link="#!" />
              <div className="progressBar">
                {lwp.map((item, idx) => (
                  <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="balancecard">
              <CardLeaveBalance

                cardTitle="XYZ Leaves"
                grantTitle="Granted:12"
                daysleft="0"
                c_link="#!" />
              <div className="progressBar">
                {xyz.map((item, idx) => (
                  <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="balancecard">
              <CardLeaveBalance

                cardTitle="ABC Leaves"
                grantTitle="Granted:12"
                daysleft="2"
                c_link="#!" />
              <div className="progressBar">
                {abc.map((item, idx) => (
                  <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default LeaveBalance;