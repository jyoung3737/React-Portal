import React from "react";

import About from "../components/layout/About";
import Clients from "../components/layout/Clients";
import ContactForm from "../components/layout/ContactForm";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Portfolio from "../components/layout/Portfolio";
import Services from "../components/layout/Services";
import OurTeam from "../components/layout/OurTeam";

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
        <About />
        <OurTeam />
        <ContactForm />
        <Footer />
        
      </div>

    );
  }
}
