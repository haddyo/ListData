import React from "react";
import { Link } from "react-router-dom";
// or less ideally
import { Navbar, Nav } from 'react-bootstrap';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  openSideNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }
  render() {


    return (
      <div className="navigation">
        <Navbar bg="primary" >
          <span className="icnMenu" onClick={this.openSideNav}><img src="images/menu.svg" /></span>
          <Navbar.Brand href="/home">

            List Data
          </Navbar.Brand>

        </Navbar>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
          <Nav.Link href="/home" onClick={this.closeNav}>Home</Nav.Link>
          <Nav.Link href="/dashboard" onClick={this.closeNav}>Dashboard</Nav.Link>
        </div>

      </div >
    );
  }
}

const styles = {
  container: {
    color: "#666666"
  },
  link: {
    textDecoration: "none",
    color: "#666666"
  }
};

export default AppHeader;
