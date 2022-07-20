/* eslint-disable react/prefer-stateless-function */

import React from "react";
import Profile from "./Profile";
import Prodetails from "./Pro_details";
import Personaldetails from "./Personal_details";
import "./style.scss";
import { userService } from "../../../services";
import Api from "../../common/Api";

class ProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    const token = userService.getToken();
    const userEmail = userService.getUserEmail();
    this.state = {
      token: `Bearer ${token}`,
      userEmail,
      userData: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const { token, userEmail } = this.state;

    // Get chapter type
    fetch(`${Api.userDetail}`, {
      method: "POST",
      headers: new Headers({
        Authorization: `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ email: userEmail }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          this.setState({
            userData: response.data,
          });
        }
        console.log(response);
      })
      .catch((err) => console.error(err.toString()));
  };

  render() {
    const { userData } = this.state;
    return (
      userData ? (
        <>
          <div className="container-fluid">
            <div className="card_layout myProfile_comp">
              <div className="row">
                <div className="col-md-12">
                  <Profile userData={userData} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <Personaldetails userData={userData} />
                </div>
                <div className="col-lg-6">
                  <Prodetails userData={userData} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : <p>Loading...</p>
    );
  }
}

export default ProfileIndex;
