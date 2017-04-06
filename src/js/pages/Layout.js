import React from "react";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Portfolio from "../components/layout/Portfolio";
import Services from "../components/layout/Services";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Header />
        <Nav />
        <Services />
        <Portfolio />
        
      </div>

    );
  }
}
