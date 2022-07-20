import React from 'react';
import { Breadcrumb, Image, } from 'react-bootstrap';
import burger from '../../../Images/Icons/icon_burgerMenu.svg';
import './style.scss';


class AdminBreadcrumb extends React.Component {

    state = { isActive: false };

    handleToggle = () => {
      const { isActive } = this.state;
      this.setState({ isActive: !isActive });
      console.log(isActive);
    };

    render() {
        return (
            <Breadcrumb>
                <Image className="sidebar-toggle" onClick={this.handleToggle} src={burger} fluid />
                <Breadcrumb.Item href="#">My Profile</Breadcrumb.Item>
                
            </Breadcrumb>
        )
    }
}



export default AdminBreadcrumb;