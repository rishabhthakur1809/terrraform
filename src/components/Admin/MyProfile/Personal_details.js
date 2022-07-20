/* eslint-disable react/prefer-stateless-function */
import React from 'react';


const Age = 'Ground Staff';
const Gender = 'DepartmentType';
const City = '+41 9876543210';
const Country = 'United Kingdom';
const TimeZone = 'UK(GMT)';
const ContactNumber = ' +41 213452687';


class Personaldetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { userData } = this.props;
    return (
      <div className="personalDetails">
        <h2> Personal Details </h2>
        <p>
          <span> Age </span>
          {userData.Age ? userData.Age : "Not Updated"}
        </p>
        <p>
          <span> Gender </span>
          {userData.Gender ? userData.Gender : "Not Updated"}
        </p>
        <p>
          <span> City/Province </span>
          {userData.City ? userData.City : "Not Updated"}
        </p>
        <p>
          <span> Country </span>
          {userData.Country ? userData.Country : "Not Updated"}
        </p>
        <p>
          <span> Time Zone </span>
          {userData.TimeZone ? userData.TimeZone : "Not Updated"}
        </p>
        <p>
          <span> Contact Number </span>
          {userData.Phone ? userData.Phone : "Not Updated"}
        </p>
      </div>
    );
  }
}

export default Personaldetails;
