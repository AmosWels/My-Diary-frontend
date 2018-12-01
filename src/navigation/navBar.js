import React from "react";
import "../static/navBar.css";
import { clearToken } from "../utils/myHeaders";
import CreateEntryModal  from "../components/entries/createEntry";
import {
  Button,
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
          <NavbarBrand href="/entries" id="navbar-brand">
            Welcome To Your Diary
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <CreateEntryModal />
                </li>
                <li className="nav-item active">
                  <Button block color="link" id="btn_link">
                    Profile
                  </Button>
                </li>
                <li className="nav-item active">
                  <Button
                    block
                    color="link"
                    id="btn_link"
                    href="/"
                    onClick={() => clearToken()}
                  >
                    Logout
                  </Button>
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
