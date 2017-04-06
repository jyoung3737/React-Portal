import React from "react";
import Service from "./Service";

export default class Services extends React.Component {
  render() {

    return (
        <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row text-center">
                <Service />
                <Service />
                <Service />
            </div>
        </div>
    </section>
    );
  }
}
