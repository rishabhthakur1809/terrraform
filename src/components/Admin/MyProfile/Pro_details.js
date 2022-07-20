/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const DepartmentType = 'Ground Staff';
const ManagerName = 'DepartmentType';
const PhoneNumber = '+41 9876543210';
const FaxNumber = '+41 4585488255';

class Prodetails extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { userData } = this.props;
    return (
      <div className="profDetails">
        <h2>Professional Details</h2>
        <p>
          <span> Department </span>
          { userData.Department ? userData.Department : "Not Updated" }
        </p>
        <p>
          <span> Line Manager </span>
          {userData.PrimaryLineManager ? userData.PrimaryLineManager : "Not Updated"}
        </p>
        <p>
          <span> Mobile Number </span>
          {userData.MobileNumber ? userData.MobileNumber : "Not Updated"}
        </p>
        <p>
          <span> Fax </span>
          {userData.Fax ? userData.Fax : "Not Updated"}
        </p>
      

      </div>
    );
  }
}

export default Prodetails;
