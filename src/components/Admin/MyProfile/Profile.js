import React from "react";
import img5 from "../../../Images/Avatar/profile.png";
import ChangePasswordModal from "./ChangePasswordModal";
import Api from '../../common/Api';
import { userService } from "../../../services";

const userName = "John Doe ";
const userId = "@Johnesp123";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const token = userService.getToken();
    const email = userService.getUserEmail();
    this.state = {
      isChangePasswordActive: false,
      oldpassword: '',
      newpassword: '',
      confirmnewpassword: '',
      submitted: false,
      loading: false,
      error: '',
      token: `Bearer ${token}`,
      email,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.handleOnBlur();
  }

  handleOnBlur() {
    const { newpassword, confirmnewpassword } = this.state;
    if (newpassword !== confirmnewpassword) {
        this.setState({error: "The passwords doesn't match" });
    } else {
        this.setState({error: "" });
    }
  }

  handleSubmit= () => {
    this.handleOnBlur();
    this.setState({ submitted: true });

    const { 
      token,
      email,
      oldpassword,
      newpassword,
      confirmnewpassword,
      isChangePasswordActive
    } = this.state;

    // stop here if form is invalid
    if (!(oldpassword && newpassword && confirmnewpassword)) {
      return;
    }

    this.setState({ loading: true });
    fetch(`${Api.changePassword}`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`, 
      }),
      body: JSON.stringify({ email: email, oldpassword, newpassword, confirmnewpassword }),
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        this.setState({
          isChangePasswordActive: !isChangePasswordActive,
        })
      }
    })
    .catch((err) => console.error(err.toString()));
}

  ShowChangePasswordModel = () => {
    const { isChangePasswordActive } = this.state;
    this.setState({
      isChangePasswordActive: !isChangePasswordActive,
    })
  }

  render() {
    const { userData } = this.props;
    const { 
      isChangePasswordActive,
      oldpassword,
      newpassword,
      confirmnewpassword,
      error,
      submitted,
      loading
    } = this.state;
    return (
      <div>
        <div className="MyProfileOuter">
          <div className="row">
            <div className="col-lg-6">
              <div className="avtarOuter">
                <div className="profilePic">
                  <img src={img5} alt="image" />
                </div>
                <div className="profileInfo">
                  <h4>{`${userData.FirstName} ${userData.LastName}`}</h4>
                  <p>{userData.Email}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="profileRight">
                <button className="btn btn-primary" onClick={() => this.ShowChangePasswordModel()}>Change Password</button>
              </div>
            </div>
          </div>

          <ChangePasswordModal 
            isChangePasswordActive={isChangePasswordActive} 
            clickAction={() => this.ShowChangePasswordModel()} 
            oldpassword={oldpassword} 
            newpassword={newpassword} 
            confirmnewpassword={confirmnewpassword} 
            handleChangeAction={this.handleChange}
            handleSubmitAction={() => this.handleSubmit()}
            error={error}
            handleOnBlurAction={() => this.handleOnBlur()}
            submitted={submitted}
            loading={loading}
          />
        </div>


      </div>
    );
  }
}

export default Profile;
