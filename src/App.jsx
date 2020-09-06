import React, { Fragment } from "react";
import Footer from "./Components/Footer";
import AppHeader from "./Components/AppHeader"
import Routes from "./Routes";
function App() {
  return (
    <Fragment>
      <AppHeader />
      <Routes />
      <Footer />
    </Fragment>
  );
}

export default App;
