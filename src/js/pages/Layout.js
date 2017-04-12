import React from "react";

import About from "../components/About";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import OurTeam from "../components/OurTeam";

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
