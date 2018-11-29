import React from "react";
import "../static/navBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" id="mynav">
          <NavbarBrand href="/view-articles" id="navbar-brand">
            My Diary
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/" id="navv-link">
                    Welcome To Your Diary
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/" id="navv-link">
                    Profile
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/" id="navv-link">
                    Logout
                  </a>
                </li>
                <li className="nav-item active">
                  <img
                    id="profile"
                    src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                    alt="user"
                  />
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/entries" />
                </li>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
