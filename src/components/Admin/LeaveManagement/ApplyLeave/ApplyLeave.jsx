/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Dpicker from '../DatePicker/Dpicker';

const name1 = 'Applying for Leave';
const name = 'John Doe';
const email_to = 'Primary Manager';

class ApplyLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  updateValue(evt) {
    this.setState({
      value: evt.target.value,
    });
  }

  updateValue = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <h2>
              {' '}
              {name1}
              {' '}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <label className="form-label">Leave Category</label>
                <select className="form-control" aria-label="Default select example" value={this.state.value} onChange={this.updateValue}>
                  <option value="Earned Leave"> Earned Leave </option>
                  <option value="Sick Leave"> Sick Leave </option>
                  <option value="Casual Leave"> Casual Leave </option>
                  <option value="Comp Off"> Comp Off </option>
                </select>
              </div>

              <div className="col-lg-6">
                <label className="form-label">Leave Type</label>
                <select className="form-control" aria-label="Default select example">
                  <option selected> Stomach Problem </option>
                  <option value="1"> Headache </option>
                  <option value="2"> Feaver </option>
                </select>
              </div>

              <div className="col-lg-6">
                <label className="form-label">Start Date</label>
                <Dpicker />
              </div>

              <div className="col-lg-6">
                <label className="form-label">End Date</label>
                <Dpicker />
              </div>

              <div className="col-lg-6">
                <label className="form-label">Session</label>
                <select className="form-control" aria-label="Default select example">
                  <option selected> Session 1 </option>
                  <option value="1"> Session 2 </option>
                </select>
              </div>

              <div className="col-lg-6">
                <label className="form-label">Session</label>
                <select className="form-control" aria-label="Default select example">
                  <option selected> Session 1 </option>
                  <option value="1"> Session 2 </option>
                </select>
              </div>

              <div className="col-lg-6">
                <div className="form-group form-check">
                  <label className="form-check-label customCheck" htmlFor="exampleCheck1">Open Ended?: </label>
                  <input type="checkbox" className="form-check-input" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group form-check">
                  <label className="form-check-label" htmlFor="exampleCheck2">Duration:</label>
                  <span> 4 Days</span>
                </div>
              </div>


              <div className="col-lg-6">
                <p className="para">
                  Person Notified:
                  <strong> {name} </strong>
                </p>
              </div>
            
              <div className="col-lg-6">
                <p className="para">
                  {' '}
                  Email to:
                  <strong> {email_to} </strong>
                </p>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <label className="form-label">Contact Details</label>
            <textarea className="form-control"> </textarea>

            <label className="form-label">Narrative</label>
            <textarea className="form-control"> </textarea>

          </div>
        </div>


        <div className="EarnLeave">
          <p><b>{this.state.value}</b></p>
        </div>


        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <div className="buttonsOuter">
              <button className="btn btn-outline-secondary"> Cancel </button>
              <button className="btn btn-primary"> Save </button>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default ApplyLeave;
