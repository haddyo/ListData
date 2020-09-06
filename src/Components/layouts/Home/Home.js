import React, { Fragment } from "react";


import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div id="container">
        <h6>Welcome to the Application</h6>
        <p>Please navigate through the application using the menu icon on the Top Left</p>

      </div>
    );
  }
}

export default Home;